import { PrismaClient } from "../prisma/generated/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

function createMissingDatabaseUrlPrismaProxy(): PrismaClient {
  return new Proxy(
    {},
    {
      get() {
        throw new Error(
          "Prisma is not configured: missing DATABASE_URL. Add DATABASE_URL to your environment (e.g. .env) to enable database features."
        )
      },
    }
  ) as PrismaClient
}

export const prisma =
  globalForPrisma.prisma ||
  (process.env.DATABASE_URL
    ? new PrismaClient()
    : createMissingDatabaseUrlPrismaProxy())

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma



