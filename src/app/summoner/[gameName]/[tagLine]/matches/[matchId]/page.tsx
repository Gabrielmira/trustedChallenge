import { Suspense } from "react";
import { getMatchDetails, getPuuid } from "@/app/server/riotapi/helpers";
import MatchDetails from "@/components/matches-details";

export default async function MatchDetailsPage({
                                                   params,
                                               }: {
    params: Promise<{ gameName: string; tagLine: string; matchId: string }>;
}) {
    const { gameName, tagLine, matchId } = await params;

    try {
        const name = decodeURIComponent(gameName);
        const tag = decodeURIComponent(tagLine);

        const summoner = await getPuuid(name, tag);
        const matchDetailData = await getMatchDetails(matchId, summoner);

        const matchDetail = {
            username: name,
            tag: tag,
            matchId: matchDetailData.matchId,
            summonerName: matchDetailData.summonerName,
            gameDuration: matchDetailData.gameDuration,
            championName: matchDetailData.championName,
            result: matchDetailData.result,
            gameType: String(matchDetailData.gameType),
            kills: matchDetailData.kills,
            deaths: matchDetailData.deaths,
            assists: matchDetailData.assists,
            teammates: matchDetailData.teammates as {
                riotTag: string;
                summonerName: string;
                championName: string;
            }[],
            goldPerMinute: matchDetailData.goldPerMinute,
            totalDamageDealtToChampions: matchDetailData.totalDamageDealtToChampions,
            totalDamageTaken: matchDetailData.totalDamageTaken,
            visionScore: matchDetailData.visionScore,
            totalMinionsKilled: matchDetailData.totalMinionsKilled,
            item0: matchDetailData.item0,
            item1: matchDetailData.item1,
            item2: matchDetailData.item2,
            item3: matchDetailData.item3,
            item4: matchDetailData.item4,
            item5: matchDetailData.item5,
            item6: matchDetailData.item6,
        };

        return (
            <div>
                <Suspense fallback={<div>Carregando detalhes da partida...</div>}>
                    <MatchDetails match={matchDetail} />
                </Suspense>
            </div>
        );
    } catch (error) {
        console.error("Erro ao carregar detalhes da partida:", error);
        return (
            <div className="p-4 text-red-500">
                <h2 className="text-xl font-bold mb-2">Erro ao carregar detalhes da partida</h2>
                <p>{error instanceof Error ? error.message : "Ocorreu um erro desconhecido"}</p>
            </div>
        );
    }
}
