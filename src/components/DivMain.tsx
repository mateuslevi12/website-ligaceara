export function DivMain({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative sm:p-14 p-4 h-screen w-full bg-[url('/assets/ORIGINALS-LIGA-CEARA.jpg')] bg-cover bg-center flex flex-col gap-10">
            <div className="absolute inset-0 bg-black/80"></div>
            
                {children}
            
        </div>
    );
}
