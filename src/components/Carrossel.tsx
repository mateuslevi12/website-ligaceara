import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import AutoPlay from 'embla-carousel-autoplay'

interface ICarrossel {
    membros: {
        url: string
        nome: string
        descricao: string
    }[]
}

export function Carrossel({ membros }: ICarrossel) {

    return (
        <Carousel className="w-full max-w-xs sm:max-w-full"  plugins={[
            AutoPlay({
                delay: 2000,
            }),
        ]} opts={{
            loop: true,
            align: 'start',
            active: true,
        }}>
            <CarouselContent>
                {membros.map((vd, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/5 ">
                        <div className="flex flex-col bg-[#4B4B4B]/50 h-full">
                            <img src={vd.url} alt="" />
                            <div className="p-4">
                                <h2 className="font-bold text-white">{vd.nome}</h2>
                                <p className="text-white">{vd.descricao}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
