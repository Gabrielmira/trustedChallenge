import Link from "next/link";
import {Button} from "@/components/ui/button";
import {BarChart2, ChevronRight, TrendingUp, Users} from "lucide-react";
import Image from "next/image";

export default function Features(){
    return(

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need to Improve</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Comprehensive tools to analyze your performance and track your progress in League of Legends.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-primary/10 p-3">
                            <BarChart2 className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Detailed Stats</h3>
                        <p className="text-center text-muted-foreground">
                            Get in-depth statistics on your performance, including KDA, CS, vision score, and more.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-primary/10 p-3">
                            <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Performance Trends</h3>
                        <p className="text-center text-muted-foreground">
                            Track your improvement over time with visual graphs and performance indicators.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Player Comparisons</h3>
                        <p className="text-center text-muted-foreground">
                            Compare your stats with friends or pro players to see where you stand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}