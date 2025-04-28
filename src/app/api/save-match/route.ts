import {auth, currentUser} from "@clerk/nextjs/server";
import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const {userId} = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const user = await currentUser();
        if (!user) {
            return new NextResponse("User not found", {status: 401});
        }

        const body = await req.json();
        const {match} = body;

        if (!match || typeof match !== "object") {
            return new NextResponse("Invalid match data", {status: 400});
        }

        const {
            matchId,
            summonerName,
            championName,
            result,
            gameType,
            gameDuration,
            goldPerMinute,
            kills,
            deaths,
            assists,
            teammates,
            items,
            totalDamageDealtToChampions,
            totalDamageTaken,
            visionScore,
            totalMinionsKilled,
        } = match;

        const savedMatch = await prisma.saved_matches.create({
            data: {
                matchId,
                summonerName,
                championName,
                result: result?.toLowerCase() === 'victory' ? 'VICTORY' : 'DEFEAT',
                gameType,
                gameDuration: isNaN(parseInt(String(gameDuration))) ? 0 : parseInt(String(gameDuration)),
                goldPerMinute: goldPerMinute || 0,
                kills,
                deaths,
                assists,
                teammates: teammates || [],
                items: items || [],
                damageDealt: totalDamageDealtToChampions || 0,
                damageTaken: totalDamageTaken || 0,
                visionScore: visionScore || 0,
                cs: totalMinionsKilled || 0,
                users: {
                    connectOrCreate: {
                        where: {id: userId},
                        create: {
                            id: userId,
                            email: user.emailAddresses[0]?.emailAddress || "",
                            name: user.firstName || "",
                        },
                    },
                },
            },
        });

        return NextResponse.json(savedMatch, {status: 201});
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error saving match: ${error.message}`);
            if (error.message.includes("Unique constraint")) {
                return new NextResponse("Match already exists", {status: 409});
            }
        }
        return new NextResponse("Internal Server Error", {status: 500});
    }
}