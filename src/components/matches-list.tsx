'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Swords, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export interface MatchListProps {
    matches: {
        username: string;
        tag: string;
        matchId: string;
        championName: string;
        result: "victory" | "defeat";
        gameType: string;
        duration: string;
        kills: number;
        deaths: number;
        assists: number;
        date: string;
        teammates: {
            summonerName: string;
            championName: string;
        }[];
    }[];
    mode?: "history" | "saved"; // <- aqui o modo
}

export default function MatchList({ matches, mode = "history" }: MatchListProps) {
    const { userId, isSignedIn } = useAuth();
    const [savingMatchIds, setSavingMatchIds] = useState<string[]>([]);
    const [savedMatchIds, setSavedMatchIds] = useState<string[]>([]);

    async function handleSaveMatch(match: any) {
        if (!isSignedIn || !userId) {
            alert("Você precisa estar logado para salvar partidas.");
            return;
        }

        if (savedMatchIds.includes(match.matchId)) {
            return; // Já salvo
        }

        setSavingMatchIds((prev) => [...prev, match.matchId]);

        try {
            const response = await fetch("/api/save-match", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, match }),
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar a partida.");
            }

            setSavedMatchIds((prev) => [...prev, match.matchId]);
        } catch (error) {
            console.error(error);
            alert("Falha ao salvar partida.");
        } finally {
            setSavingMatchIds((prev) => prev.filter((id) => id !== match.matchId));
        }
    }

    if (!matches || matches.length === 0) {
        return (
            <div className="w-full max-w-4xl mx-auto p-4 text-center">
                <p className="text-muted-foreground">No matches found.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4 p-4">
            <h2 className="text-2xl font-bold mb-6">Match History</h2>

            {matches.map((match) => {
                const isSaving = savingMatchIds.includes(match.matchId);
                const isSaved = mode === "saved" || savedMatchIds.includes(match.matchId);

                return (
                    <Link
                        key={match.matchId}
                        href={`/summoner/${encodeURIComponent(match.username)}%23${encodeURIComponent(match.tag)}/match/${match.matchId}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Card
                            className={`overflow-hidden border-l-4 ${
                                match.result === "victory" ? "border-l-emerald-500" : "border-l-rose-500"
                            }`}
                        >
                            <CardContent className="p-0">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="p-4 flex flex-col items-center justify-center sm:w-[120px]">
                                        <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2">
                                            <AvatarImage
                                                src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${match.championName}.png`}
                                                alt={match.championName}
                                            />
                                            <AvatarFallback>
                                                {match.championName.substring(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="mt-2 text-sm font-medium">{match.championName}</span>
                                        <Badge
                                            variant={match.result === "victory" ? "success" : "destructive"}
                                            className="mt-2"
                                        >
                                            {match.result}
                                        </Badge>
                                    </div>

                                    {/* Match details section */}
                                    <div className="flex-1 p-4">
                                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline">{match.gameType}</Badge>
                                                    <span className="text-xs text-muted-foreground">
                                                        {match.date}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="flex items-center gap-1 text-sm">
                                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                                        <span>{match.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm">
                                                        <Swords className="h-4 w-4 text-muted-foreground" />
                                                        <span className="font-medium">{match.kills}</span>
                                                        <span className="text-muted-foreground">/</span>
                                                        <span className="font-medium text-destructive">{match.deaths}</span>
                                                        <span className="text-muted-foreground">/</span>
                                                        <span className="font-medium">{match.assists}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm font-medium">Team:</span>
                                                    <div className="flex -space-x-2">
                                                        {match.teammates.map((teammate, index) => (
                                                            <Avatar
                                                                key={index}
                                                                className="h-6 w-6 border border-background"
                                                            >
                                                                <AvatarImage
                                                                    src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${teammate.championName}.png`}
                                                                    alt={teammate.championName}
                                                                />
                                                                <AvatarFallback className="text-[10px]">
                                                                    {teammate.championName.substring(0, 2)}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Botão de salvar */}
                                            {mode !== "saved" && (
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    {match.result === "victory" && (
                                                        <Trophy className="h-10 w-10 text-emerald-500" />
                                                    )}

                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.preventDefault(); // impedir clique no Link
                                                            handleSaveMatch(match);
                                                        }}
                                                        disabled={isSaving || isSaved}
                                                    >
                                                        {isSaving
                                                            ? "Salvando..."
                                                            : isSaved
                                                                ? "✅ Salvo!"
                                                                : "Salvar partida"}
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
