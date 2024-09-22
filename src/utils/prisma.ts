import { PrismaClient } from "@prisma/client";

const globaforPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  globaforPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globaforPrisma.prisma = prisma;
