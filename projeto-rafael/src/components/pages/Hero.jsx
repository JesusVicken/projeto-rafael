import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroImage from "../../../public/hero.jpg"; 

export default function Hero() {
    return (
        <section className="w-full bg-background py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                {/* Texto */}
                <div className="md:w-2/3 text-center md:text-left space-y-5">
                    {/* Título explicativo acima */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Como funciona o<span className="text-cyan-500"> Chá de Fraldas Online</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mt-2">
                            Explicamos direitinho <span className="text-cyan-500 font-medium">como funciona cada tipo de evento do chá de bebê online</span> – chá de bebê ou chá de fraldas, chá revelação e chá rifa. Além claro, das vantagens e os recursos que oferecemos para as mamães criarem seus chás com a iFraldas.
                        </p>
                    </div>

                    {/* Título principal */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                            O <span className="text-cyan-500">chá de fraldas</span> é o queridinho!
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground mt-2">
                            Ele é o evento mais realizado. Seja com festa ou online, o chá de bebê é especial para comemorar a chegada do bebê e receber o apoio dos amigos e da família.
                        </p>
                    </div>

                    <Button
                        asChild
                        className="rounded-full bg-cyan-500 text-white hover:bg-cyan-600 text-sm md:text-base px-5 py-2.5"
                    >
                        <Link to="/como-funciona">saiba mais</Link>
                    </Button>
                </div>

                {/* Imagem */}
                <div className="md:w-1/3">
                    <img
                        src={HeroImage}
                        alt="Chá de bebê decorado"
                        className="rounded-3xl w-full max-w-xs md:max-w-sm mx-auto shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}
