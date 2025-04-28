import { MatchDetails, Teammate, Participant } from "@/app/types/riot";

export async function getPuuid(name: string, tag: string) {
    const encodedName = encodeURIComponent(name);
    const encodedTag = encodeURIComponent(tag);

    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodedName}/${encodedTag}`;
    try {
        const response = await fetch(url, {
            headers: {
                'X-Riot-Token': process.env.API_RIOT ?? ''
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar PUUID: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (!data.puuid) {
            throw new Error('PUUID não encontrado');
        }
        console.log(data)
        return data.puuid;
    } catch (error) {
        console.error('Erro ao buscar PUUID:', error);
        throw error;
    }
}

export async function getMatches(puuid: string) {
    if (!puuid) {
        throw new Error('PUUID é obrigatório');
    }

    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-Riot-Token': process.env.API_RIOT ?? ''
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar partidas: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Erro ao buscar partidas:', error);
        throw error;
    }
}
export async function getMatchDetails(matchId: string, puuid: string): Promise<{
    matchId: string;
    summonerName: string;
    riotTag: string;
    championName: string;
    result: string;
    gameType: number;
    gameDuration: number;
    goldPerMinute: number;
    kills: number;
    deaths: number;
    assists: number;
    date: string;
    teammates: Teammate[]
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    totalDamageDealtToChampions: number
    totalDamageTaken: number
    visionScore: number
    totalMinionsKilled: number
}> {
    if (!matchId) {
        throw new Error('matchId é obrigatório');
    }

    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`;

    try {
        const response = await fetch(url, {
            headers: {
                'X-Riot-Token': process.env.API_RIOT ?? ''
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar detalhes da partida: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        const participant: Participant = data.info.participants.find((p: Participant) => p.puuid === puuid);

        if (!participant) {
            throw new Error('Participante não encontrado na partida.');
        }

        const teammates: Teammate[] = data.info.participants
            .filter((p: Participant) => p.teamId === participant.teamId && p.puuid !== participant.puuid)
            .map((teammate: Participant) => ({
                summonerName: teammate.riotIdGameName,
                riotTag: teammate.riotIdTagline,
                championName: teammate.championName
            }));

        const dateFormatted = new Date(data.info.gameCreation).toLocaleDateString('pt-BR');

        return {
            matchId: matchId,
            summonerName: participant.riotIdGameName,
            riotTag: participant.riotIdTagline,
            championName: participant.championName,
            result: participant.win ? "victory" : "defeat",
            gameType: data.info.gameMode,
            gameDuration: data.info.gameDuration,
            goldPerMinute: participant.challenges?.goldPerMinute || 0,
            kills: participant.kills,
            deaths: participant.deaths,
            assists: participant.assists,
            date: dateFormatted,
            teammates: teammates,
            items: [
                participant.item0,
                participant.item1,
                participant.item2,
                participant.item3,
                participant.item4,
                participant.item5,
                participant.item6,
            ],
            totalDamageTaken: participant.totalDamageTaken,
            totalDamageDealtToChampions: participant.totalDamageDealtToChampions,
            totalMinionsKilled: participant.totalMinionsKilled,
            visionScore: participant.visionScore,

        };
    } catch (error) {
        console.error('Erro ao buscar detalhes da partida:', error);
        throw error;
    }
}


