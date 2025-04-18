import { Button } from "@/components/ui/button"
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
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-blue-300 hover:text-blue-500 transition-colors">
                    iFraudas
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link to="/exemplos" className="hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-full">
                        como funciona
                    </Link>
                    <Link to="/planos" className="hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-full">
                        planos
                    </Link>
                    <Link to="/recursos" className="hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-full">
                        ajuda
                    </Link>

                </nav>

                {/* Ações Desktop */}
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" className="hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-full">
                        meu iFraudas
                    </Button>
                    <Button className="hover:bg-blue-500 hover:text-white transition-all px-4 py-2 rounded-full">
                        Entrar
                    </Button>

                    {/* Botão de Troca de Tema no final */}
                    <ThemeToggle />
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-gray-200 transition-colors">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem asChild>
                                <Link to="/exemplos" className="hover:text-primary transition-colors">Exemplos Reais</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/planos" className="hover:text-primary transition-colors">Planos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to="/recursos" className="hover:text-primary transition-colors">Recursos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button variant="ghost" className="w-full justify-start hover:bg-gray-200 transition-colors">
                                    Entrar
                                </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button className="w-full justify-start hover:bg-gray-200 transition-colors">
                                    Criar site grátis
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>

    )
}
