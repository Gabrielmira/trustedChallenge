import { getMatchDetails, getMatches, getPuuid } from "@/app/server/riotapi/helpers";
import MatchList from "@/components/matches-list";

type tParams = Promise<{ username: string }>;

export default async function MatchesPage({ params }: { params: tParams }) {
    const { username } = await params;

    const usernameDecoded = decodeURIComponent(username);
    const [name, tag] = usernameDecoded.split('#');

    try {
        const summoner = await getPuuid(name, tag);
        const matches = await getMatches(summoner);

        const detailedMatches = await Promise.all(
            matches.slice(0, 5).map(async (matchId: string) => {
                const matchDetails = await getMatchDetails(matchId, summoner);
                return {
                    ...matchDetails,
                    username: name,
                    tag: tag
                };
            })
        );

        return (
            <div>
                <MatchList matches={detailedMatches} mode="history" />
            </div>
        );
    } catch (error) {
        console.error("Erro ao carregar partidas:", error);
        return (
            <div className="p-4 text-red-500">
                <h2 className="text-xl font-bold mb-2">Erro ao carregar partidas</h2>
                <p>{error instanceof Error ? error.message : "Ocorreu um erro desconhecido"}</p>
            </div>
        );
    }
}
