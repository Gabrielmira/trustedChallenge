import { getMatchDetails, getMatches, getPuuid } from "@/app/server/riotapi/helpers";
import MatchList from "@/components/matches-list";

export default async function Component(
    props: {
        params: Promise<{ gameName: string; tagLine: string }>;
    }
) {
    const { gameName, tagLine } = await props.params;

    if (!gameName || !tagLine) {
        return <div>Formato inválido. Verifique o nome e tag.</div>;
    }


    try {
        // Obter o PUUID do invocador
        const summoner = await getPuuid(gameName, tagLine);

        // Obter a lista de partidas do invocador
        const matches = await getMatches(summoner);

        // Obter detalhes de cada partida
        const detailedMatches = await Promise.all(
            matches.slice(0, 5).map(async (matchId: string) => {
                const matchDetails = await getMatchDetails(matchId, summoner);
                return {
                    ...matchDetails,
                    username: gameName,
                    tag: tagLine,
                };
            })
        );

        return (
            <div>
                <h1 className="text-2xl font-bold mb-6 text-center">Histórico de Partidas de {gameName}#{tagLine}</h1>
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
