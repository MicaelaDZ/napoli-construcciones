import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pool.jpg"
          alt="Construcción de piscina - Napoli Construcciones"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span
              className="block text-white drop-shadow-2xl"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              Construimos tu futuro
            </span>
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed font-medium text-white drop-shadow-lg"
            style={{
              textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            Más de 20 años de experiencia en el sector de la construcción, ofreciendo calidad y excelencia en cada
            proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-200 border-0"
            >
              Solicitar presupuesto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black text-white hover:bg-green-500 hover:text-white hover:border-green-500 px-8 py-4 text-lg font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-200 bg-transparent"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Ver proyectos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
