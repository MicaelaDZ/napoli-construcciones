import Image from "next/image"
import { SectionTitle } from "@/components/section-title"
import { PenTool, Hammer, RefreshCw, Wrench } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Diseño",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Hammer,
    title: "Construcción",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: RefreshCw,
    title: "Remodelación",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-20 bg-surface-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <SectionTitle highlight="Nuestros" rest="SERVICIOS" className="text-white" />
        </div>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          Como empresa constructora nos enfocamos en todas las áreas de cada requerimiento.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-sm bg-surface-darker aspect-[4/5]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <service.icon className="w-8 h-8 text-brand mx-auto mb-3" />
                <h3 className="text-white font-bold text-xl uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
