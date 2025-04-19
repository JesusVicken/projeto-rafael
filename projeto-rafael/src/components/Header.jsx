import { Button } from "@/components/ui/button"
import HeroImage1 from "../../public/logo1.png"

import ThemeToggle from "./ThemeToggle"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="w-full border-b bg-background">
            <div className="flex items-center justify-between py-3 px-4">
                {/* Logo como imagem */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={HeroImage1}
                        alt="Logo Chá de Fraldas Online"
                        className="h-14 w-auto"
                    />
                </Link>


                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link
                        to="/exemplos"
                        className="hover:bg-cyan-500 hover:text-white transition-all px-4 py-2 rounded-full"
                    >
                        como funciona
                    </Link>
                    <Link
                        to="/planos"
                        className="hover:bg-cyan-500 hover:text-white transition-all px-4 py-2 rounded-full"
                    >
                        planos
                    </Link>
                    <Link
                        to="/recursos"
                        className="hover:bg-cyan-500 hover:text-white transition-all px-4 py-2 rounded-full"
                    >
                        ajuda
                    </Link>
                </nav>

                {/* Ações Desktop */}
                <div className="hidden md:flex items-center gap-2">
                    <Button
                        variant="ghost"
                        className="hover:bg-cyan-500 hover:text-white transition-all px-4 py-2 rounded-full"
                    >
                        meu chá
                    </Button>
                    <Button className="hover:bg-cyan-500 hover:text-white transition-all px-4 py-2 rounded-full">
                        começar agora
                    </Button>
                    <ThemeToggle />
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem asChild>
                                <Link to="/exemplos">Como Funciona</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/planos">Planos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/recursos">Ajuda</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button variant="ghost" className="w-full justify-start">
                                    meu chá
                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button className="w-full justify-start">começar agora</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
