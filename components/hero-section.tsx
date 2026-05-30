import Image from "next/image"
import { SectionTitle } from "@/components/section-title"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-pool.jpg"
          alt="Construcción - Napoli Construcciones"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <SectionTitle
            highlight="Construir"
            rest="tu futuro"
            className="text-white mb-8"
          />

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
            En cada ladrillo colocamos tu sueño, en cada cimiento depositamos tus esperanzas.
            La construcción es un acto de creación y confianza en un futuro mejor. Cada paso
            que damos es la materialización de tus metas. Con más de 20 años de dedicación y
            experiencia, levantamos espacios que protegerán tus momentos más preciados.
            Permítenos ser parte de tu camino: juntos construiremos un futuro sólido y lleno
            de posibilidades.
          </p>

          <div className="border-l-4 border-brand pl-6">
            <p className="text-brand font-bold text-lg">Napoli Construcciones</p>
            <p className="text-white/70 text-sm uppercase tracking-wider">
              Construcción y diseño
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
