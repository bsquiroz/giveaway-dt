import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Counter } from "@/components/Counter/Counter"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

import { Info } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <section className="grid gap-4">
            <div className='w-full'>
                <div className='w-full h-full max-w-96 md:w-96 md:h-96 overflow-hidden mx-auto max-sm:pt-20 pt-40'>
                    <img src="logo.png" alt="logo" className='w-full h-full object-cover' width={350} />
                </div>
            </div>

            <div className='mb-10'>
                <div className='text-5xl font-semibold'>
                    <div className='flex gap-4 justify-center'>
                        <span className='font-extrabold'><Counter start={0} end={7842} duration={4} style='text-5xl font-bold' /></span> <span>Sorteos realizados</span>
                    </div>
                </div>
            </div>

            <div className='mb-10'>
                <div className='relative py-6 after:absolute after:bg-[linear-gradient(270deg,rgba(124,58,237,0),#7c3aed_50%,rgba(124,58,237,0))] after:h-[2px] after:top-0 after:left-2/4 after:w-2/4 after:translate-x-[-50%]'>
                    <h1 className='text-6xl font-semibold text-primary text-center'>Sorteos Mensuales</h1>
                    <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(124,58,237,0),#7c3aed35,rgba(124,58,237,0))] z-0'></div>
                </div>
                <div className='relative py-6 after:absolute after:bg-[linear-gradient(270deg,rgba(124,58,237,0),#7c3aed_50%,rgba(124,58,237,0))] after:h-[2px] after:bottom-0 after:left-2/4 after:w-2/4 after:translate-x-[-50%]'>
                    <p className='text-3xl text-center'>¡Ganar un regalo nunca ha sido tan fácil!</p>
                </div>
            </div>


            <h2>
                ¡Participa en nuestros emocionantes sorteos mensuales con{" "}
                <span>Devtalles</span>!
            </h2>

            <p>
                En Devtalles, estamos emocionados de ofrecerte la oportunidad de
                ganar premios increíbles en nuestros sorteos mensuales. Nuestros
                sorteos están diseñados para premiar a nuestra increíble
                comunidad y brindarte la oportunidad de llevarte a casa premios
                exclusivos. ¿Quieres unirte a la diversión? ¡Sigue leyendo para
                descubrir cómo participar!
            </p>

            <h3>"Participa en 3 sencillos pasos"</h3>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        1. Únete a nuestro servidor de Discord:
                    </AccordionTrigger>
                    <AccordionContent>
                        Lo primero que necesitas hacer es unirte a nuestro
                        servidor de Discord. Es aquí donde organizamos nuestros
                        sorteos, anunciamos a los ganadores y mantenemos a
                        nuestra comunidad actualizada sobre todas las novedades.
                        Si aún no tienes una cuenta de Discord, ¡no te
                        preocupes! Es fácil y rápido de crear.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        2. Inicia sesión en tu cuenta de Discord:
                    </AccordionTrigger>
                    <AccordionContent>
                        Una vez que hayas unido a nuestro servidor, asegúrate de
                        iniciar sesión en tu cuenta de Discord. Esto es
                        necesario para poder participar en nuestros sorteos. Tu
                        cuenta de Discord actuará como tu identificación durante
                        los sorteos, asegurando que solo los miembros de nuestra
                        comunidad puedan optar a los premios.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        3. Participa en nuestros sorteos mensuales:
                    </AccordionTrigger>
                    <AccordionContent>
                        ¡Ya estás listo para participar en nuestros sorteos
                        mensuales! Cada mes, anunciamos nuevos sorteos con
                        premios emocionantes. Simplemente sigue las
                        instrucciones proporcionadas en nuestro servidor de
                        Discord para entrar en el sorteo y aumentar tus
                        posibilidades de ganar.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Button onClick={() => navigate("/giveaways")}>
                Mirar los sorteos disponibles
            </Button>
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>
                    "La importancia de tener una cuenta de Discord"
                </AlertTitle>
                <AlertDescription>
                    Tener una cuenta de Discord es fundamental para participar
                    en nuestros sorteos. Esto nos permite mantener un ambiente
                    seguro y exclusivo para nuestra comunidad, asegurando que
                    solo nuestros miembros puedan optar a los premios. Además,
                    Discord nos brinda una plataforma interactiva donde podemos
                    mantenernos en contacto contigo, compartir noticias
                    emocionantes y proporcionar actualizaciones en tiempo real
                    sobre nuestros sorteos y eventos especiales.
                </AlertDescription>
            </Alert>

            <Button variant={"ghost"} onClick={() => navigate("/login")}>
                Zona admin
            </Button>
        </section>
    )
}
