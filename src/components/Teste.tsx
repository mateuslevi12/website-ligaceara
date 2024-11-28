import Marquee from "./ui/marquee";
import { patrocinioImages } from "@/data/patrocinios";

export function CarrosselMagicUi() {
    return (
        <div className="max-w-96 sm:max-w-full flex w-full items-center justify-center overflow-hidden rounded-lg ">
            <Marquee pauseOnHover className="[--duration:20s] flex flex-row gap-20">
                {
                    patrocinioImages.map(img => {
                        return (
                            <img className="h-20 w-full" key={img} src={img} alt={img} />
                        )
                    })
                }
            </Marquee>
        </div>
    );
}
