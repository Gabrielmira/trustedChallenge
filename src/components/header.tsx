"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // <-- aqui mudamos para 'next/navigation'

export default function Header() {
    const [username, setUsername] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedUsername = username.trim().replace(/[^a-zA-Z0-9#]/g, '');
        if (!formattedUsername.includes('#')) {
            // opcional: forçar o usuário a digitar o nome corretamente
            alert("Please enter a summoner name with #tag (example: Faker#KR1)");
            return;
        }
        router.push(`/summoner/${encodeURIComponent(formattedUsername)}`);
    };

    return (
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
                    <form onSubmit={handleSubmit} className="relative">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Search for a summoner... (ex: Faker#KR1)"
                            className="pl-10 pr-12 py-6 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary"
                        />
                        <Button
                            type="submit"
                            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
                            size="sm"
                        >
                            Search
                        </Button>
                    </form>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Try searching: Faker#KR1, Caps#EUW, Bjergsen#NA1, or your own summoner name
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
    );
}
