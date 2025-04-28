import {BarChart2, TrendingUp, Users} from "lucide-react";

export default function Features() {
    return (

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tudo que você precisa para
                            melhorar</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Ferramentas completas para analisar seu desempenho e acompanhar seu progresso no League of
                            Legends.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-primary/10 p-3">
                            <BarChart2 className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-xl font-bold text-center">Estatísticas Detalhadas</h3>
                        <p className="text-center text-muted-foreground">
                            Obtenha estatísticas detalhadas sobre seu desempenho, incluindo KDA, CS, pontuação de visão
                            e mais.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-primary/10 p-3">
                            <TrendingUp className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-xl font-bold text-center">Tendências de Desempenho</h3>
                        <p className="text-center text-muted-foreground">
                            Acompanhe sua evolução ao longo do tempo com gráficos visuais e indicadores de desempenho.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-primary/10 p-3">
                            <Users className="h-6 w-6 text-primary"/>
                        </div>
                        <h3 className="text-xl font-bold text-center">Comparação entre Jogadores</h3>
                        <p className="text-center text-muted-foreground">
                            Compare suas estatísticas com amigos ou jogadores profissionais para ver onde você se
                            posiciona.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}