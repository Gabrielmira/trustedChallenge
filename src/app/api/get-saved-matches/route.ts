import { auth } from '@clerk/nextjs/server';
import { prisma } from "@/lib/prisma";  // Prisma importado de @/lib/prisma
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }


        const savedMatches = await prisma.saved_matches.findMany({
            where: { userId },
        });

        return NextResponse.json(savedMatches, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar partidas salvas:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
