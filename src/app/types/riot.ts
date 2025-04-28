
export type Teammate = {
    summonerName: string;
    championName: string;
};

export type MatchDetails = {
    matchId: string;
    summonerName: string;
    championName: string;
    result: "victory" | "defeat";
    gameType: string;
    gameDuration: number;
    goldPerMinute: number;
    kills: number;
    deaths: number;
    assists: number;
    date: string;
    teammates: Teammate[];
    items: number[]
};

export type Participant = {
    puuid: string;
    riotIdGameName: string;
    riotIdTagline: string;
    championName: string;
    win: boolean;
    teamId: number;
    kills: number;
    deaths: number;
    assists: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    totalDamageDealtToChampions: number;
    totalDamageTaken: number
    totalMinionsKilled: number
    visionScore: number
    challenges?: {
        goldPerMinute?: number;
    };
};

