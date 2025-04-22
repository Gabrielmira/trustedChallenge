import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Header(){
    return(
            <div className="py-16 container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Track, Analyze, and Compare League Players
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Get detailed stats, performance metrics, and comparisons for any League of Legends player.
                        </p>
                    </div>
                    <div className="w-full max-w-2xl mx-auto mt-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search for a summoner..."
                                className="pl-10 pr-12 py-6 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary"
                            />
                            <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full" size="sm">
                                Search
                            </Button>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Try searching: Faker, Caps, Bjergsen, or your own summoner name
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center gap-1 text-sm">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span>10M+ Summoners Tracked</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <span>All Regions Supported</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                            <span>Real-time Updates</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}