import {MatchesGetter, PuuidGetter} from "@/app/server/riotapi/helpers";

export const GetSummonerData = async (name: string, tag: string) => {
    const puuid = await PuuidGetter(name, tag)
    const matches: string[] = await MatchesGetter(puuid)
    console.log(matches)
    return{
        puuid, matches
        }
}








