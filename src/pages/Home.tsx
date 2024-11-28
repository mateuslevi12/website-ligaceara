import { DivMain } from "@/components/DivMain";
import { Header } from "@/components/Header";
import { CarrosselMagicUi } from "@/components/Teste";
import { Button } from "@/components/ui/button";

export function Home() {

    return (
        <>
            <div className="flex flex-col  justify-center  w-full">
                <DivMain>
                    <Header/>
                    <section className="relative flex-col flex  sm:h-[80%] gap-10 ">
                        <div className=" flex flex-col gap-6 sm:gap-12  sm:w-[50%]">
                            <h1 className="font-semibold text-4xl md:text-6xl text-white">Explorando o Universo do Esporte com Paixão e Profissionalismo</h1>
                            <h3 className="text-white text-xl ">Venha fazer parte do universo do esporte cearense! A Liga Desportiva LFA Ceará promove competições com organização, visibilidade e profissionalismo, conectando atletas, equipes e apoiadores em um movimento que transforma o esporte regional e nacional</h3>
                        </div>
                        <div>
                            <Button className="bg-[#D23309]/50">Quero me inscrever</Button>
                        </div>
                    </section>
                </DivMain>
                <div className="  flex  gap-6 justify-center w-full ">
                    <section className="flex sm:flex-row w-full items-center  gap-10 p-10  bg-[#222222] ">
                        <div className="w-full flex flex-col items-center justify-center ">
                            <h2 className="text-white text-2xl">Nossos patrocinadores</h2>
                            <div className="flex flex-col items-center justify-center gap-6 ">
                                {/* <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> */}
                                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 p-4">
                                    <CarrosselMagicUi/>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
