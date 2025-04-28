
import { PrismaClient } from "@/generated/prisma"; // ajuste o caminho se precisar
import MatchList from "@/components/matches-list"; // ajuste o caminho se precisar
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const prisma = new PrismaClient();

async function getSavedMatches(userId: string) {
    const matches = await prisma.saved_matches.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            date: "desc",
        },
    });

    return matches.map((match) => ({
        username: match.summonerName,
        tag: "BR1", // ajuste aqui se você salvar tag separada
        matchId: match.matchId,
        championName: match.championName,
        result: match.result.toLowerCase() as "victory" | "defeat",
        gameType: match.gameType,
        duration: formatDuration(match.gameDuration),
        kills: match.kills,
        deaths: match.deaths,
        assists: match.assists,
        date: format(match.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }),
        teammates: match.teammates as {
            summonerName: string;
            championName: string;
        }[],
    }));
}

function formatDuration(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = durationSeconds % 60;
    return `${minutes}m ${seconds}s`;
}

export default async function SavedMatchesPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in"); // manda pro login se não tiver logado
    }

    const matches = await getSavedMatches(userId);

    return (
        <div className="p-8">
            <MatchList matches={matches} mode={"saved"} />
        </div>
    );
}
