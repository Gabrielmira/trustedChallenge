'use client'

import {GetSummonerData} from "@/app/server/riotapi/route";
import {Button} from "@/components/ui/button";

export default function Home(){
    return (
        <div>
            <Button onClick={() => GetSummonerData('fengxiao123', 'BR1')}/>
        </div>

    )
}