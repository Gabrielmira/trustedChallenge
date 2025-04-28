import { PrismaClient } from "@/generated/prisma"; // aqui é direto do prisma gerado (não '@/generated/prisma')

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
