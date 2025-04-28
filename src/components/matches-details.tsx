"use client"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from "recharts"
import {Coins, Heart, Skull, Swords, Timer, Award, Sword, Shield, Zap} from "lucide-react"
import Link from "next/link";

interface MatchDetailsProps {
    match: {
        matchId: string
        summonerName: string
        championName: string
        result: "victory" | "defeat"
        gameType: string
        gameDuration: number
        goldPerMinute: number
        kills: number
        deaths: number
        assists: number
        date: string
        teammates: {
            riotTag: string
            summonerName: string
            championName: string
        }[]
        items?: number[]
        totaldamageDealtToChampions?: number
        totalDamageTaken?: number
        visionScore?: number
        totalMinionsKilled?: number
    }
}

export default function MatchDetails({match}: MatchDetailsProps) {
    if (!match) {
        return (
            <div className="w-full max-w-6xl mx-auto p-4 text-center">
                <p className="text-muted-foreground">Detalhes da partida não disponíveis.</p>
            </div>
        )
    }

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const kdaData = [
        {name: "Abates", value: match.kills, color: "#10b981"},
        {name: "Mortes", value: match.deaths, color: "#ef4444"},
        {name: "Assistências", value: match.assists, color: "#3b82f6"},
    ]

    const performanceData = [
        {subject: "Abates", A: match.kills, fullMark: 15},
        {subject: "Assistências", A: match.assists, fullMark: 15},
        {subject: "Ouro", A: (match.goldPerMinute / 100).toFixed(1), fullMark: 5},
        {subject: "Sobrevivência", A: 10 - Math.min(10, match.deaths), fullMark: 10},
        {subject: "Visão", A: match.visionScore || 5, fullMark: 10},
    ]

    const goldTimelineData = Array.from({length: 10}, (_, i) => ({
        minute: (i + 1) * Math.floor(match.gameDuration / 600),
        gold: Math.round(match.goldPerMinute * (i + 1) * Math.floor(match.gameDuration / 600)),
    }))

    const itemImages = (match.items || [])
        .filter((itemId) => itemId && itemId > 0)
        .map((itemId) => ({
            id: itemId,
            image: `https://ddragon.leagueoflegends.com/cdn/14.8.1/img/item/${itemId}.png`,
        }))


    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 p-4">
            <Card className={`border-t-4 ${match.result === "victory" ? "border-t-emerald-500" : "border-t-rose-500"}`}>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
                            <div className="flex flex-col items-center">
                                <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                                    <AvatarImage
                                        src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${match.championName}.png`}
                                        alt={match.championName}
                                    />
                                    <AvatarFallback>{match.championName.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="mt-2 font-bold">{match.championName}</span>
                                <Badge variant={match.result === "victory" ? "success" : "destructive"}
                                       className="mt-1 text-xs">
                                    {match.result === "victory" ? "VITÓRIA" : "DERROTA"}
                                </Badge>
                            </div>

                            <div className="flex flex-col gap-2 mt-4 md:mt-0">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline">{match.gameType}</Badge>
                                    <span className="text-sm text-muted-foreground">{match.date}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        <Timer className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm">{formatDuration(match.gameDuration)}</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Coins className="h-4 w-4 text-amber-500"/>
                                        <span className="text-sm">{match.goldPerMinute.toFixed(1)} OPM</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-1">
                                    <div className="bg-muted px-2 py-1 rounded-md flex items-center gap-1">
                                        <Swords className="h-4 w-4 text-emerald-500"/>
                                        <span className="font-medium">{match.kills}</span>
                                    </div>
                                    <div className="bg-muted px-2 py-1 rounded-md flex items-center gap-1">
                                        <Skull className="h-4 w-4 text-rose-500"/>
                                        <span className="font-medium">{match.deaths}</span>
                                    </div>
                                    <div className="bg-muted px-2 py-1 rounded-md flex items-center gap-1">
                                        <Heart className="h-4 w-4 text-sky-500"/>
                                        <span className="font-medium">{match.assists}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
                            <span className="text-sm font-medium">Itens</span>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                                {itemImages.length > 0 ? (
                                    itemImages.map((item) => (
                                        <Avatar key={item.id} className="h-10 w-10 rounded-md border border-border">
                                            <AvatarImage src={item.image || "/placeholder.svg"}
                                                         alt={`Item ${item.id}`}/>
                                            <AvatarFallback className="text-xs rounded-md">{item.id}</AvatarFallback>
                                        </Avatar>
                                    ))
                                ) : (
                                    <div className="text-sm text-muted-foreground">Nenhum item disponível</div>
                                )}
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-sm font-medium">Time:</span>
                                <div className="flex -space-x-2">
                                    {match.teammates.map((teammate) => (
                                        <Link key={teammate.summonerName}
                                              href={`/summoner/${encodeURIComponent(teammate.summonerName)}%23${encodeURIComponent(teammate.riotTag)}`}>
                                            <Avatar
                                                className="h-8 w-8 border border-background hover:opacity-80 transition-opacity">
                                                <AvatarImage
                                                    src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${teammate.championName}.png`}
                                                    alt={teammate.summonerName}
                                                />
                                                <AvatarFallback
                                                    className="text-[10px]">{teammate.championName.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="performance" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="performance">Desempenho</TabsTrigger>
                    <TabsTrigger value="gold">Linha do Tempo de Ouro</TabsTrigger>
                    <TabsTrigger value="team">Composição do Time</TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="space-y-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-amber-500"/>
                                    Distribuição KDA
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={kdaData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {kdaData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color}/>
                                            ))}
                                        </Pie>
                                        <Legend/>
                                        <RechartsTooltip/>
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-purple-500"/>
                                    Gráfico de Desempenho
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
                                        <PolarGrid/>
                                        <PolarAngleAxis dataKey="subject"/>
                                        <PolarRadiusAxis angle={30} domain={[0, "auto"]}/>
                                        <Radar
                                            name={match.championName}
                                            dataKey="A"
                                            stroke={match.result === "victory" ? "#10b981" : "#ef4444"}
                                            fill={match.result === "victory" ? "#10b98180" : "#ef444480"}
                                            fillOpacity={0.6}
                                        />
                                        <RechartsTooltip/>
                                    </RadarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card
                            className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
                            <CardContent className="p-4 flex flex-col items-center">
                                <Sword className="h-8 w-8 text-emerald-500 mb-2"/>
                                <div className="text-xs text-muted-foreground">Abates</div>
                                <div className="text-2xl font-bold">{match.kills}</div>
                            </CardContent>
                        </Card>

                        <Card
                            className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950 dark:to-rose-900">
                            <CardContent className="p-4 flex flex-col items-center">
                                <Shield className="h-8 w-8 text-rose-500 mb-2"/>
                                <div className="text-xs text-muted-foreground">Mortes</div>
                                <div className="text-2xl font-bold">{match.deaths}</div>
                            </CardContent>
                        </Card>

                        <Card
                            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                            <CardContent className="p-4 flex flex-col items-center">
                                <Heart className="h-8 w-8 text-blue-500 mb-2"/>
                                <div className="text-xs text-muted-foreground">Assistências</div>
                                <div className="text-2xl font-bold">{match.assists}</div>
                            </CardContent>
                        </Card>

                        <Card
                            className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
                            <CardContent className="p-4 flex flex-col items-center">
                                <Coins className="h-8 w-8 text-amber-500 mb-2"/>
                                <div className="text-xs text-muted-foreground">Ouro/Min</div>
                                <div className="text-2xl font-bold">{match.goldPerMinute.toFixed(1)}</div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="gold" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Coins className="h-5 w-5 text-amber-500"/>
                                Linha do Tempo de Acumulação de Ouro
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={goldTimelineData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis
                                        dataKey="minute"
                                        label={{value: "Tempo de Jogo (minutos)", position: "insideBottom", offset: -5}}
                                    />
                                    <YAxis label={{value: "Ouro", angle: -90, position: "insideLeft"}}/>
                                    <RechartsTooltip formatter={(value) => [`${value} ouro`, "Ouro Total"]}/>
                                    <Bar
                                        dataKey="gold"
                                        fill={match.result === "victory" ? "#10b981" : "#ef4444"}
                                        name="Ouro"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="team" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Composição do Time</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                                <div
                                    className={`flex flex-col items-center p-4 rounded-lg ${
                                        match.result === "victory"
                                            ? "bg-emerald-50 dark:bg-emerald-950/40"
                                            : "bg-rose-50 dark:bg-rose-950/40"
                                    }`}
                                >
                                    <div className="relative">
                                        <Avatar className="h-20 w-20 mb-2 border-2 border-background">
                                            <AvatarImage
                                                src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${match.championName}.png`}
                                                alt={match.championName}
                                            />
                                            <AvatarFallback>{match.championName.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <div
                                            className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                            Você
                                        </div>
                                    </div>
                                    <div className="font-medium text-center mt-2">{match.championName}</div>
                                    <div className="text-xs text-muted-foreground">{match.summonerName}</div>
                                    <div className="mt-2 flex items-center gap-1 text-xs">
                                        <Swords className="h-3 w-3"/>
                                        <span>{match.kills}</span>
                                        <span>/</span>
                                        <span>{match.deaths}</span>
                                        <span>/</span>
                                        <span>{match.assists}</span>
                                    </div>
                                </div>
                                {match.teammates.map((teammate) => (
                                    <Link
                                        href={`/summoner/${encodeURIComponent(teammate.summonerName)}%23${encodeURIComponent(teammate.riotTag)}`}
                                        key={teammate.summonerName}>
                                        <div
                                            className="flex flex-col items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                                            <Avatar className="h-20 w-20 mb-2">
                                                <AvatarImage
                                                    src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${teammate.championName}.png`}
                                                    alt={teammate.championName}
                                                />
                                                <AvatarFallback>{teammate.championName.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div className="font-medium text-center">{teammate.championName}</div>
                                            <div className="text-xs text-muted-foreground truncate w-full text-center">
                                                {teammate.summonerName}
                                            </div>
                                            <div
                                                className="text-xs text-muted-foreground truncate w-full text-center">#{teammate.riotTag}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}