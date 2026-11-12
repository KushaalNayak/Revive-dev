/**
 * EmberDB Demo Import — One-time mirror sync from Revive.dev Supabase
 *
 * Reads Users, Projects, and SavedProject records via Prisma (read-only),
 * sanitizes fields using the EmberDB Phase 2 allowlists, and pushes them
 * to the local EmberDB Management API mirror endpoints.
 *
 * Usage:
 *   EMBERDB_MANAGEMENT_URL=http://127.0.0.1:3001 \
 *   EMBERDB_MANAGEMENT_TOKEN=demov1 \
 *   npx tsx scripts/sync-emberdb-demo.ts
 *
 * Or via the npm script:
 *   npm run emberdb:demo-sync
 *
 * Safety:
 * - Never prints or logs credentials.
 * - Never writes to the production database.
 * - Never reads Account, Session, or VerificationToken tables.
 * - Explicitly excludes email, emailVerified, and all sensitive fields.
 */

import { PrismaClient } from '@prisma/client';

// ─── Configuration ──────────────────────────────────────────────────────────

const EMBERDB_URL = process.env.EMBERDB_MANAGEMENT_URL?.trim() || 'http://127.0.0.1:3001';
const EMBERDB_TOKEN = process.env.EMBERDB_MANAGEMENT_TOKEN?.trim() || 'demov1';
const BATCH_SIZE = 50;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;
const CONCURRENCY = 5;

// Mirror schema version must match EmberDB MirrorManager's MIRROR_SCHEMA_VERSION
const SCHEMA_VERSION = 1;

// ─── Field projections (must match EmberDB ALLOWED_*_FIELDS exactly) ────────

const USER_SELECT = {
  id: true,
  name: true,
  username: true,
  image: true,
  createdAt: true,
  updatedAt: true,
  // Explicitly excluded: email, emailVerified, accounts, sessions
} as const;

const PROJECT_SELECT = {
  id: true,
  ownerId: true,
  adoptedById: true,
  repoUrl: true,
  repoFullName: true,
  slug: true,
  title: true,
  shortDescription: true,
  status: true,
  completionStage: true,
  abandonmentReason: true,
  helpNeeded: true,
  tags: true,
  lastRepoActivityAt: true,
  handoffWhat: true,
  handoffCompleted: true,
  handoffPending: true,
  handoffSetup: true,
  handoffKnownIssues: true,
  handoffNotes: true,
  isPriority: true,
  priorityExpiresAt: true,
  healthScore: true,
  language: true,
  lastCommitDate: true,
  stars: true,
  revivalMode: true,
  createdAt: true,
  updatedAt: true,
} as const;

const SAVED_PROJECT_SELECT = {
  id: true,
  userId: true,
  projectId: true,
  createdAt: true,
} as const;

// ─── Helpers ────────────────────────────────────────────────────────────────

function toISO(val: Date | string | null | undefined): string | null {
  if (!val) return null;
  if (val instanceof Date) return val.toISOString();
  return String(val);
}

// ─── Mirror envelope builders (match MirrorManager.upsertRecord contract) ───

interface MirrorEnvelope {
  schemaVersion: number;
  namespace: string;
  sourceId: string;
  sourceUpdatedAt: string;
  sourceRevision: number;
  eventId: string | null;
  syncSource: string;
  fields: Record<string, unknown>;
}

function userEnvelope(row: Record<string, unknown>): MirrorEnvelope {
  return {
    schemaVersion: SCHEMA_VERSION,
    namespace: 'user',
    sourceId: String(row.id),
    sourceUpdatedAt: toISO(row.updatedAt as Date)!,
    sourceRevision: 0,
    eventId: `demo-sync-user-${row.id}`,
    syncSource: 'reconcile',
    fields: {
      id: row.id,
      name: row.name ?? null,
      username: row.username ?? null,
      image: row.image ?? null,
      createdAt: toISO(row.createdAt as Date),
      updatedAt: toISO(row.updatedAt as Date),
    },
  };
}

function projectEnvelope(row: Record<string, unknown>): MirrorEnvelope {
  return {
    schemaVersion: SCHEMA_VERSION,
    namespace: 'project',
    sourceId: String(row.id),
    sourceUpdatedAt: toISO(row.updatedAt as Date)!,
    sourceRevision: 0,
    eventId: `demo-sync-project-${row.id}`,
    syncSource: 'reconcile',
    fields: {
      id: row.id,
      ownerId: row.ownerId,
      adoptedById: row.adoptedById ?? null,
      repoUrl: row.repoUrl ?? '',
      repoFullName: row.repoFullName,
      slug: row.slug,
      title: row.title,
      shortDescription: row.shortDescription ?? '',
      status: row.status,
      completionStage: row.completionStage ?? 'IDEA',
      abandonmentReason: row.abandonmentReason ?? 'OTHER',
      helpNeeded: Array.isArray(row.helpNeeded) ? row.helpNeeded : [],
      tags: Array.isArray(row.tags) ? row.tags : [],
      lastRepoActivityAt: toISO(row.lastRepoActivityAt as Date | null),
      handoffWhat: row.handoffWhat ?? null,
      handoffCompleted: row.handoffCompleted ?? null,
      handoffPending: row.handoffPending ?? null,
      handoffSetup: row.handoffSetup ?? null,
      handoffKnownIssues: row.handoffKnownIssues ?? null,
      handoffNotes: row.handoffNotes ?? null,
      isPriority: row.isPriority === true,
      priorityExpiresAt: toISO(row.priorityExpiresAt as Date | null),
      healthScore: row.healthScore ?? 100,
      language: row.language ?? null,
      lastCommitDate: toISO(row.lastCommitDate as Date | null),
      stars: row.stars ?? 0,
      revivalMode: row.revivalMode ?? 'OPEN_SOURCE',
      createdAt: toISO(row.createdAt as Date),
      updatedAt: toISO(row.updatedAt as Date),
    },
  };
}

interface UserProjectRelation {
  userId: string;
  projectId: string;
  roles: string[];
  primaryRole: string;
  savedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

function userProjectEnvelope(rel: UserProjectRelation): MirrorEnvelope {
  const sourceId = `${rel.userId}:${rel.projectId}`;
  return {
    schemaVersion: SCHEMA_VERSION,
    namespace: 'user-project',
    sourceId,
    sourceUpdatedAt: rel.updatedAt,
    sourceRevision: 0,
    eventId: `demo-sync-up-${sourceId}`,
    syncSource: 'reconcile',
    fields: {
      id: sourceId,
      userId: rel.userId,
      projectId: rel.projectId,
      roles: rel.roles,
      primaryRole: rel.primaryRole,
      savedAt: rel.savedAt,
      createdAt: rel.createdAt,
      updatedAt: rel.updatedAt,
    },
  };
}

// ─── Relationship builder ───────────────────────────────────────────────────

function buildRelationships(
  projects: Record<string, unknown>[],
  savedProjects: Array<{ userId: string; projectId: string; createdAt: Date }>
): UserProjectRelation[] {
  const map = new Map<string, {
    userId: string;
    projectId: string;
    roles: Set<string>;
    savedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }>();

  function getOrCreate(userId: string, projectId: string, timestamp: string) {
    const key = `${userId}:${projectId}`;
    let entry = map.get(key);
    if (!entry) {
      entry = {
        userId,
        projectId,
        roles: new Set(),
        savedAt: null,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
      map.set(key, entry);
    }
    if (timestamp > entry.updatedAt) entry.updatedAt = timestamp;
    if (timestamp < entry.createdAt) entry.createdAt = timestamp;
    return entry;
  }

  // Owner relationships from Project.ownerId
  for (const p of projects) {
    const ownerId = p.ownerId as string;
    const projectId = p.id as string;
    const ts = toISO(p.updatedAt as Date)!;
    getOrCreate(ownerId, projectId, ts).roles.add('OWNER');
  }

  // Adopter relationships from Project.adoptedById
  for (const p of projects) {
    const adoptedById = p.adoptedById as string | null;
    if (!adoptedById) continue;
    const projectId = p.id as string;
    const ts = toISO(p.updatedAt as Date)!;
    getOrCreate(adoptedById, projectId, ts).roles.add('ADOPTER');
  }

  // Saved relationships from SavedProject
  for (const sp of savedProjects) {
    const ts = toISO(sp.createdAt)!;
    const entry = getOrCreate(sp.userId, sp.projectId, ts);
    entry.roles.add('SAVED');
    entry.savedAt = ts;
  }

  // Sort roles by priority: OWNER > ADOPTER > SAVED
  const ROLE_PRIORITY: Record<string, number> = { OWNER: 0, ADOPTER: 1, SAVED: 2 };
  const results: UserProjectRelation[] = [];
  for (const entry of map.values()) {
    const roles = [...entry.roles].sort((a, b) => (ROLE_PRIORITY[a] ?? 99) - (ROLE_PRIORITY[b] ?? 99));
    results.push({
      userId: entry.userId,
      projectId: entry.projectId,
      roles,
      primaryRole: roles[0],
      savedAt: entry.savedAt,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    });
  }
  return results;
}

// ─── HTTP client with retry ─────────────────────────────────────────────────

interface UpsertResult {
  action: string;
  record: Record<string, unknown> | null;
  syncMeta: Record<string, unknown>;
}

async function upsertWithRetry(envelope: MirrorEnvelope, attempt = 1): Promise<UpsertResult> {
  try {
    const res = await fetch(`${EMBERDB_URL}/api/mirror/upsert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${EMBERDB_TOKEN}`,
      },
      body: JSON.stringify(envelope),
      signal: AbortSignal.timeout(10_000),
    });

    if (res.status === 401) {
      throw new Error('Authentication failed — check EMBERDB_MANAGEMENT_TOKEN');
    }

    const body = await res.json();

    if (!res.ok) {
      const errMsg = body?.error?.message ?? body?.error ?? JSON.stringify(body);
      throw new Error(`HTTP ${res.status}: ${errMsg}`);
    }

    return body as UpsertResult;
  } catch (err) {
    const isTransient =
      err instanceof TypeError || // network error
      (err as { name?: string }).name === 'TimeoutError';

    if (isTransient && attempt < MAX_RETRIES) {
      const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
      await new Promise((r) => setTimeout(r, delay));
      return upsertWithRetry(envelope, attempt + 1);
    }
    throw err;
  }
}

// ─── Bounded concurrency runner ─────────────────────────────────────────────

async function runWithConcurrency<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  concurrency: number
): Promise<{ results: R[]; errors: Array<{ item: T; error: Error }> }> {
  const results: R[] = [];
  const errors: Array<{ item: T; error: Error }> = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const i = index++;
      try {
        results.push(await fn(items[i]));
      } catch (err) {
        errors.push({ item: items[i], error: err as Error });
      }
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return { results, errors };
}

// ─── Pre-flight checks ─────────────────────────────────────────────────────

async function checkEmberDBHealth(): Promise<void> {
  try {
    const res = await fetch(`${EMBERDB_URL}/healthz`, {
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok) {
      throw new Error(`Health check returned HTTP ${res.status}`);
    }
    const body = await res.json();
    if (body.status !== 'ok') {
      throw new Error(`Unexpected health response: ${JSON.stringify(body)}`);
    }
    console.log(`✓ EmberDB is healthy at ${EMBERDB_URL}`);
  } catch (err) {
    console.error(`✗ Cannot reach EmberDB at ${EMBERDB_URL}`);
    console.error(`  Make sure EmberDB is running: cd Ember-DB && npm start`);
    throw err;
  }
}

async function checkEmberDBAuth(): Promise<void> {
  const res = await fetch(`${EMBERDB_URL}/api/mirror/status`, {
    headers: { Authorization: `Bearer ${EMBERDB_TOKEN}` },
    signal: AbortSignal.timeout(5_000),
  });
  if (res.status === 401) {
    console.error('✗ EmberDB authentication failed — EMBERDB_MANAGEMENT_TOKEN is incorrect');
    process.exit(1);
  }
  if (!res.ok) {
    throw new Error(`Mirror status check returned HTTP ${res.status}`);
  }
  console.log('✓ EmberDB authentication successful');
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║   EmberDB Demo Import — Revive.dev Mirror   ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');

  // Validate token is set (never print it)
  if (!EMBERDB_TOKEN) {
    console.error('✗ EMBERDB_MANAGEMENT_TOKEN environment variable is required');
    console.error('  Set it to match the token used when starting EmberDB');
    process.exit(1);
  }

  // Pre-flight: EmberDB reachable and authenticated
  await checkEmberDBHealth();
  await checkEmberDBAuth();

  // Connect to Revive.dev Supabase via Prisma (uses DATABASE_URL from .env)
  console.log('');
  console.log('── Reading source database ──');
  console.log('');
  const prisma = new PrismaClient();

  try {
    await prisma.$connect();
    console.log('✓ Connected to Revive.dev Supabase database');
  } catch (err) {
    console.error('✗ Failed to connect to source database');
    console.error('  Ensure DATABASE_URL is configured in .env');
    throw err;
  }

  // ── Read Users (paginated, read-only) ──
  const allUsers: Record<string, unknown>[] = [];
  let userCursor: string | undefined;
  while (true) {
    const batch = await prisma.user.findMany({
      select: USER_SELECT,
      take: BATCH_SIZE,
      orderBy: { id: 'asc' },
      ...(userCursor ? { skip: 1, cursor: { id: userCursor } } : {}),
    });
    if (batch.length === 0) break;
    allUsers.push(...(batch as unknown as Record<string, unknown>[]));
    userCursor = (batch[batch.length - 1] as { id: string }).id;
    if (batch.length < BATCH_SIZE) break;
  }
  console.log(`  Users read from source:        ${allUsers.length}`);

  // ── Read Projects (paginated, read-only) ──
  const allProjects: Record<string, unknown>[] = [];
  let projectCursor: string | undefined;
  while (true) {
    const batch = await prisma.project.findMany({
      select: PROJECT_SELECT,
      take: BATCH_SIZE,
      orderBy: { id: 'asc' },
      ...(projectCursor ? { skip: 1, cursor: { id: projectCursor } } : {}),
    });
    if (batch.length === 0) break;
    allProjects.push(...(batch as unknown as Record<string, unknown>[]));
    projectCursor = (batch[batch.length - 1] as { id: string }).id;
    if (batch.length < BATCH_SIZE) break;
  }
  console.log(`  Projects read from source:     ${allProjects.length}`);

  // ── Read SavedProjects (paginated, read-only) ──
  const allSaved: Array<{ id: string; userId: string; projectId: string; createdAt: Date }> = [];
  let savedCursor: string | undefined;
  while (true) {
    const batch = await prisma.savedProject.findMany({
      select: SAVED_PROJECT_SELECT,
      take: BATCH_SIZE,
      orderBy: { id: 'asc' },
      ...(savedCursor ? { skip: 1, cursor: { id: savedCursor } } : {}),
    });
    if (batch.length === 0) break;
    allSaved.push(...batch);
    savedCursor = batch[batch.length - 1].id;
    if (batch.length < BATCH_SIZE) break;
  }
  console.log(`  SavedProjects read from source: ${allSaved.length}`);

  // Disconnect from source immediately after reading
  await prisma.$disconnect();
  console.log('✓ Disconnected from source database (read-only, zero writes)');

  // ── Build relationships ──
  const relationships = buildRelationships(allProjects, allSaved);
  console.log(`  User-Project relationships built: ${relationships.length}`);

  // ── Import Users ──
  console.log('');
  console.log('── Importing Users ──');
  console.log('');
  const userEnvelopes = allUsers.map((u) => userEnvelope(u));
  const userResult = await runWithConcurrency(userEnvelopes, upsertWithRetry, CONCURRENCY);
  const usersCreated = userResult.results.filter((r) => r.action === 'created').length;
  const usersUpdated = userResult.results.filter((r) => r.action === 'updated').length;
  console.log(`  ✓ Created: ${usersCreated}, Updated: ${usersUpdated}, Failed: ${userResult.errors.length}`);
  for (const e of userResult.errors) {
    console.error(`    ✗ User ${(e.item as MirrorEnvelope).sourceId}: ${e.error.message}`);
  }

  // ── Import Projects ──
  console.log('');
  console.log('── Importing Projects ──');
  console.log('');
  const projectEnvelopes = allProjects.map((p) => projectEnvelope(p));
  const projectResult = await runWithConcurrency(projectEnvelopes, upsertWithRetry, CONCURRENCY);
  const projectsCreated = projectResult.results.filter((r) => r.action === 'created').length;
  const projectsUpdated = projectResult.results.filter((r) => r.action === 'updated').length;
  console.log(`  ✓ Created: ${projectsCreated}, Updated: ${projectsUpdated}, Failed: ${projectResult.errors.length}`);
  for (const e of projectResult.errors) {
    console.error(`    ✗ Project ${(e.item as MirrorEnvelope).sourceId}: ${e.error.message}`);
  }

  // ── Import Relationships ──
  console.log('');
  console.log('── Importing Relationships ──');
  console.log('');
  const relEnvelopes = relationships.map((r) => userProjectEnvelope(r));
  const relResult = await runWithConcurrency(relEnvelopes, upsertWithRetry, CONCURRENCY);
  const relsCreated = relResult.results.filter((r) => r.action === 'created').length;
  const relsUpdated = relResult.results.filter((r) => r.action === 'updated').length;
  console.log(`  ✓ Created: ${relsCreated}, Updated: ${relsUpdated}, Failed: ${relResult.errors.length}`);
  for (const e of relResult.errors) {
    console.error(`    ✗ Relationship ${(e.item as MirrorEnvelope).sourceId}: ${e.error.message}`);
  }

  // ── Final mirror status ──
  console.log('');
  console.log('── EmberDB Mirror Status ──');
  console.log('');
  const statusRes = await fetch(`${EMBERDB_URL}/api/mirror/status`, {
    headers: { Authorization: `Bearer ${EMBERDB_TOKEN}` },
  });
  const mirrorStatus = await statusRes.json();
  console.log(JSON.stringify(mirrorStatus, null, 2));

  // ── Summary ──
  const totalFailed = userResult.errors.length + projectResult.errors.length + relResult.errors.length;
  console.log('');
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║              Import Summary                      ║');
  console.log('╠══════════════════════════════════════════════════╣');
  console.log(`║  Users read:              ${String(allUsers.length).padStart(6)}                ║`);
  console.log(`║  Users imported:          ${String(usersCreated + usersUpdated).padStart(6)}                ║`);
  console.log(`║  Projects read:           ${String(allProjects.length).padStart(6)}                ║`);
  console.log(`║  Projects imported:       ${String(projectsCreated + projectsUpdated).padStart(6)}                ║`);
  console.log(`║  SavedProjects read:      ${String(allSaved.length).padStart(6)}                ║`);
  console.log(`║  Relationships built:     ${String(relationships.length).padStart(6)}                ║`);
  console.log(`║  Relationships imported:  ${String(relsCreated + relsUpdated).padStart(6)}                ║`);
  console.log(`║  Failed records:          ${String(totalFailed).padStart(6)}                ║`);
  console.log('╚══════════════════════════════════════════════════╝');

  if (totalFailed > 0) {
    console.error(`\n⚠  ${totalFailed} record(s) failed — see errors above`);
    process.exit(1);
  }

  console.log('');
  console.log('✓ Demo import complete. Open EmberDB Studio to view mirrored data.');
  console.log('  Studio URL: http://127.0.0.1:3000');
  console.log('  Navigate to the Users and Projects tabs.');
  console.log('');
}

main().catch((err) => {
  console.error('');
  console.error('✗ Fatal error:', err.message);
  process.exit(1);
});
