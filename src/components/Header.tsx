import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="relative w-full flex items-center justify-between px-4 py-3 sm:py-0">
                <div>
                    <img src="/assets/Logo-Liga.png" alt="logo-anjoz-productions" className="h-24 sm:h-20" />
                </div>

                <div className="sm:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir Menu">
                        {isMenuOpen ? <X className="w-6 h-6" color="white" /> : <Menu className="w-6 h-6" color="white" />}
                    </button>
                </div>

                <nav
                    className={`${isMenuOpen ? "block" : "hidden"} absolute top-20 left-0 w-full sm:static ${
                        isMenuOpen ? "bg-black p-4 shadow-xl" : ""
                    } sm:flex sm:items-center sm:gap-12 sm:w-auto`}
                >
                    <ul className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <Link to="/" className="text-white text-sm sm:text-xl font-bold transition-transform transform hover:translate-y-[-5px]">
                            Inicio
                        </Link>
                        <Link
                            to="/SobreALiga"
                            className="text-white text-sm sm:text-xl font-bold transition-transform transform hover:translate-y-[-5px]"
                        >
                            Sobre a Liga
                        </Link>
                        <Link
                            to="/Competicoes"
                            className="text-white text-sm sm:text-xl font-bold transition-transform transform hover:translate-y-[-5px]"
                        >
                            Competições
                        </Link>
                        <a href="#ultimos-trabalhos" className="text-white text-sm sm:text-xl font-bold transition-transform transform hover:translate-y-[-5px]">
                            Quadro de Arbitragem
                        </a>
                        <a href="#noticias" className="text-white text-sm sm:text-xl font-bold transition-transform transform hover:translate-y-[-5px]">
                            Notícias
                        </a>
                        <a href="#contato" className="text-white text-sm sm:text-xl font-bold transition-transform transform hover:translate-y-[-5px]">
                            Contato
                        </a>

                        <li>
                            <Button>Fazer login</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
