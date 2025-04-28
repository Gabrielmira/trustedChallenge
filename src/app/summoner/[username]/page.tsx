import {getMatchDetails, getMatches, getPuuid} from "@/app/server/riotapi/helpers";
import MatchList from "@/components/matches-list";

interface Props {
    params: {
        username: string;
    };
}

export default async function MatchesPage({ params }: Props) {
    const usernameDecoded = decodeURIComponent(params.username);
    const [name, tag] = usernameDecoded.split('#');

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
            <MatchList matches={detailedMatches} />
        </div>
    );
}
