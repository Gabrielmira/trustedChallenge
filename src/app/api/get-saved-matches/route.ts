import {auth} from '@clerk/nextjs/server';
import {PrismaClient} from "@/generated/prisma";
import {NextResponse} from "next/server";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(req: Request) {
    try {
        const {userId} = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const savedMatches = await prisma.saved_matches.findMany({
            where: {userId},
        });

        return NextResponse.json(savedMatches, {status: 200});
    } catch (error) {
        console.error("Erro ao buscar partidas salvas:", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}