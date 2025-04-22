'use server'

import axios from "axios";

export async function PuuidGetter(name: string, tag: string) {

    try{
        const response = await axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=RGAPI-e9789c03-799f-4ae7-8514-63e17fd23f79`)
        return response.data.puuid
    } catch (error){
        console.log(error)
    }
}

export async function MatchesGetter(puuid: string) {

    try{
        const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=RGAPI-e9789c03-799f-4ae7-8514-63e17fd23f79`)
        return response.data
    }   catch(error){
        console.log(error)
    }

}

