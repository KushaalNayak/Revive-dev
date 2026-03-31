
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  username: 'username',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  repoUrl: 'repoUrl',
  repoFullName: 'repoFullName',
  slug: 'slug',
  title: 'title',
  shortDescription: 'shortDescription',
  status: 'status',
  completionStage: 'completionStage',
  abandonmentReason: 'abandonmentReason',
  helpNeeded: 'helpNeeded',
  tags: 'tags',
  lastRepoActivityAt: 'lastRepoActivityAt',
  handoffWhat: 'handoffWhat',
  handoffCompleted: 'handoffCompleted',
  handoffPending: 'handoffPending',
  handoffSetup: 'handoffSetup',
  handoffKnownIssues: 'handoffKnownIssues',
  handoffNotes: 'handoffNotes',
  isPriority: 'isPriority',
  priorityExpiresAt: 'priorityExpiresAt',
  adoptedById: 'adoptedById',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  healthScore: 'healthScore',
  language: 'language',
  lastCommitDate: 'lastCommitDate',
  stars: 'stars',
  revivalMode: 'revivalMode'
};

exports.Prisma.AIAnalysisScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  summary: 'summary',
  problemsDetected: 'problemsDetected',
  revivalRoadmap: 'revivalRoadmap',
  difficultyLevel: 'difficultyLevel',
  structureExplanation: 'structureExplanation',
  stoppageReason: 'stoppageReason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RequestScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  requesterId: 'requesterId',
  type: 'type',
  message: 'message',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  revivalMode: 'revivalMode'
};

exports.Prisma.SupportTicketScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  requestId: 'requestId',
  requesterId: 'requesterId',
  message: 'message',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SavedProjectScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  projectId: 'projectId',
  createdAt: 'createdAt'
};

exports.Prisma.SavedGlobalRepoScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  repoFullName: 'repoFullName',
  createdAt: 'createdAt'
};

exports.Prisma.RevivalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  repoFullName: 'repoFullName',
  revivalType: 'revivalType',
  status: 'status',
  forkUrl: 'forkUrl',
  startedAt: 'startedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ProjectStatus = exports.$Enums.ProjectStatus = {
  LOOKING_FOR_HELP: 'LOOKING_FOR_HELP',
  IN_PROGRESS: 'IN_PROGRESS',
  REVIVED: 'REVIVED',
  ARCHIVED: 'ARCHIVED'
};

exports.CompletionStage = exports.$Enums.CompletionStage = {
  IDEA: 'IDEA',
  EARLY_PROTOTYPE: 'EARLY_PROTOTYPE',
  HALF_DONE: 'HALF_DONE',
  NEARLY_COMPLETE: 'NEARLY_COMPLETE'
};

exports.AbandonmentReason = exports.$Enums.AbandonmentReason = {
  NO_TIME: 'NO_TIME',
  SOLO_LIMIT: 'SOLO_LIMIT',
  LOST_INTEREST: 'LOST_INTEREST',
  NEED_SKILL: 'NEED_SKILL',
  OTHER: 'OTHER',
  ARCHIVED: 'ARCHIVED',
  DEPRECATED: 'DEPRECATED'
};

exports.RevivalMode = exports.$Enums.RevivalMode = {
  OPEN_SOURCE: 'OPEN_SOURCE',
  COLLABORATIVE: 'COLLABORATIVE',
  INDEPENDENT: 'INDEPENDENT'
};

exports.HelpType = exports.$Enums.HelpType = {
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  DEVOPS: 'DEVOPS',
  DOCS: 'DOCS',
  MAINTAINER: 'MAINTAINER'
};

exports.DifficultyLevel = exports.$Enums.DifficultyLevel = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

exports.RequestType = exports.$Enums.RequestType = {
  ADOPT: 'ADOPT',
  CONTRIBUTE: 'CONTRIBUTE'
};

exports.RequestStatus = exports.$Enums.RequestStatus = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

exports.TicketStatus = exports.$Enums.TicketStatus = {
  OPEN: 'OPEN',
  SENT_TO_OWNER: 'SENT_TO_OWNER',
  CLOSED: 'CLOSED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Project: 'Project',
  AIAnalysis: 'AIAnalysis',
  Request: 'Request',
  SupportTicket: 'SupportTicket',
  SavedProject: 'SavedProject',
  SavedGlobalRepo: 'SavedGlobalRepo',
  Revival: 'Revival'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
