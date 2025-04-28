import {getMatchDetails, getPuuid} from "@/app/server/riotapi/helpers";
import MatchDetails from "@/components/matches-details";

interface Props {
    params: {
        username: string;
        matchId: string;
    };
}

export default async function MatchDetailsPage({ params }: Props) {
    const { username, matchId } = params;
    const usernameDecoded = decodeURIComponent(username);
    const [name, tag] = usernameDecoded.split("#");

    const summoner = await getPuuid(name, tag);
    const matchDetail = await getMatchDetails(matchId, summoner);

    console.log("esse é o id", matchId)

    return (
        <div>
            <MatchDetails match={matchDetail}/>
        </div>
    );
}
