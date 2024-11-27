import { Carrossel } from "@/components/Carrossel";
import { DivMain } from "@/components/DivMain";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { membros } from "@/data/time";

export function SobreALiga() {



    return (
        <>
            <div className="flex flex-col justify-center w-full">
                <DivMain>
                    <Header />
                    <section className="relative flex flex-col sm:flex-row sm:h-[80%] gap-10 ">
                        <div className="flex flex-col gap-6 sm:gap-12 sm:w-[50%]">
                            <div className="flex gap-2 items-center">
                                <h1 className="font-semibold text-4xl md:text-6xl text-white">Nossa missão</h1>
                                <Separator className="border-1 bg-white w-[40%]"></Separator>
                            </div>
                            <p className="text-white sm:text-xl leading-relaxed font-semibold">
                                A Liga Desportiva LFA Ceará, fundada em abril de 2016, nasceu para elevar a qualidade dos eventos esportivos no estado, promovendo competições de Futsal com organização, seriedade e visibilidade. Desde 2019, filiada à Associação Brasileira de Ligas de Futsal, representa o Ceará em competições nacionais e regionais, como o Campeonato Brasileiro de Seleções de Ligas e a Liga Nordeste de Clubes. Reconhecida local e nacionalmente, a Liga foi premiada em 2018 e 2019 na Noite das Personalidades do Futsal, consolidando-se como referência em profissionalismo e estrutura na gestão do esporte.
                            </p>
                        </div>
                    </section>
                </DivMain>

                {/* Faixa de Destaque */}
                {/* <div className="relative w-full bg-[#3B3B3B]">
                    <img
                        src="/assets/faixa-liga.png"
                        alt="Faixa Liga Ceará"
                        className="w-full h-auto object-cover"
                    />
                </div> */}

                {/* Seção "Nosso Time" */}
                <div className="bg-[#3B3B3B] sm:p-14 p-4 w-full flex flex-col gap-10">
                    <section className="relative flex flex-col sm:flex-row sm:h-[80%] gap-10 items-start">
                        <div className="flex flex-col gap-6  ">
                            <div className="flex gap-2 items-center">
                                <h1 className="font-semibold text-4xl md:text-6xl text-white">Nosso <span className="text-[#B12B08]">time</span></h1>
                            </div>
                            <h3 className="text-white text-xl leading-relaxed">
                                Aqui está o time que trabalha com dedicação, profissionalismo e paixão para fazer do esporte uma experiência única.
                            </h3>
                            <Carrossel membros={membros} />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
