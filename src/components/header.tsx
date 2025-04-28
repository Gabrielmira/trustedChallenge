"use client";

import {useState} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Header() {
    const [username, setUsername] = useState("");
    const {replace} = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!username.includes("#")) {
            alert("Digite no formato Nome#Tag (ex: Faker#KR1)");
            return;
        }

        const [gameName, tagLine] = username.split("#");

        if (!gameName || !tagLine) {
            alert("Formato inválido. Use Nome#Tag.");
            return;
        }

        replace(`/summoner/${gameName}/${tagLine}`);
    }

    return (
        <div className="py-16 container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Rastreie, Analise e Compare Jogadores de League
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Obtenha estatísticas detalhadas, métricas de desempenho e comparações para qualquer jogador de
                        League of Legends.
                    </p>
                </div>
                <div className="w-full max-w-2xl mx-auto mt-6">
                    <form onSubmit={handleSubmit} className="relative">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"/>
                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Busque por um invocador... (ex: Faker#KR1)"
                            className="pl-10 pr-12 py-6 text-lg rounded-full border-2 border-primary/20 focus-visible:ring-primary"
                        />
                        <Button
                            type="submit"
                            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
                            size="sm"
                        >
                            Buscar
                        </Button>
                    </form>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Tente buscar: Faker#KR1, Caps#EUW, Bjergsen#NA1, ou seu próprio nome de invocador
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div className="flex items-center gap-1 text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>+10M Invocadores Rastreados</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span>Todas as Regiões Suportadas</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span>Atualizações em Tempo Real</span>
                    </div>
                </div>
            </div>
        </div>
    );
}