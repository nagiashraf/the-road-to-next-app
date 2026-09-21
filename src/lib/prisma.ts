import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

// Prevent hot reloading from creating new instances of PrismaClient:
// https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/databases-connections#prevent-hot-reloading-from-creating-new-instances-of-prismaclient

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
