import { DivMain } from "@/components/DivMain";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

// Função para converter para o padrão desejado (Title Case com exclusões)
function toTitleCase(text: string): string {
    const excludedWords = ["de", "da", "do", "e"];
    return text
        .toLowerCase()
        .split(" ")
        .map((word, index) =>
            excludedWords.includes(word) && index !== 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");
}

export function Competicoes() {
    return (
        <>
            <div className="flex flex-col justify-center w-full">
                <DivMain>
                    <Header />
                    <section className="relative flex-col flex sm:h-[80%] gap-10">
                        <div className="flex flex-col gap-6 sm:gap-10 sm:w-[50%]">
                            <h1 className="font-semibold text-4xl md:text-6xl text-white">Nossas competições</h1>
                            <h3 className="text-white text-xl">
                                Levamos o esporte a outro nível com torneios de destaque regional e nacional. Confira as principais competições organizadas pela Liga Desportiva LFA Ceará
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[100%] overflow-y-auto sm:overflow-hidden sm:h-[40%]">
                            <Card className="relative f bg-[url('/assets/futsal.jpg')] bg-cover bg-center p-4 text-white rounded-xl">
                                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                                <div className="relative z-10 flex flex-col gap-4 justify-between h-full">
                                    <h2>{toTitleCase("Estadual liga ceará de futsal 2024")}</h2>
                                    <h2 className="sm:text-end">Regulamento Geral</h2>
                                </div>
                            </Card>
                            <Card className="relative f bg-[url('/assets/campeonato.png')] bg-cover bg-center p-4 text-white rounded-xl">
                                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                                <div className="relative z-10 flex flex-col gap-4 justify-between h-full">
                                    <h2>{toTitleCase("LIGA CEARÁ DE FUTeboL 2024")}</h2>
                                    <h2 className="sm:text-end">Regulamento Geral</h2>
                                </div>
                            </Card>
                            <Card className="relative f bg-[url('/assets/fut7.jpg')] bg-cover bg-center p-4 text-white rounded-xl">
                                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                                <div className="relative z-10 flex flex-col gap-4 justify-between h-full">
                                    <h2>{toTitleCase("LIGA CEARÁ DE FUT7 academy 2024")}</h2>
                                    <h2 className="sm:text-end">Regulamento Geral</h2>
                                </div>
                            </Card>
                            <Card className="relative f bg-[url('/assets/fut7-2.webp')] bg-cover bg-center p-4 text-white rounded-xl">
                                <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
                                <div className="relative z-10 flex flex-col gap-4 justify-between h-full">
                                    <h2>{toTitleCase("estadual LIGA CEARÁ DE FUT7 2024")}</h2>
                                    <h2 className="sm:text-end">Regulamento Geral</h2>
                                </div>
                            </Card>
                        </div>


                    </section>
                </DivMain>
            </div>
        </>
    );
}
