import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section
    id="nosotros"
      className="py-20 relative"
      style={{
        backgroundImage: `url('/images/asphalt-texture.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sobre Napoli Construcciones</h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Fundada en 2003, Napoli Construcciones se ha convertido en un referente en el sector de la construcción,
                ofreciendo soluciones integrales para proyectos residenciales, comerciales e industriales.
              </p>

              <p className="text-gray-300">
                Nuestro equipo de profesionales altamente cualificados trabaja con dedicación y compromiso para
                garantizar la máxima calidad en cada proyecto, cumpliendo siempre con los plazos y presupuestos
                establecidos.
              </p>
            </div>

            <div className="mt-8">
              <a href="#contacto">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                Contáctanos
              </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/foto-espalda.jpg"
                alt="Trabajador de Napoli Construcciones"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </section>
  )
}
