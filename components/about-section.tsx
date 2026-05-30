import { SectionTitle } from "@/components/section-title"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <SectionTitle highlight="Sobre" rest="nosotros" className="text-black mb-8" />
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Somos una empresa apasionada por crear, dar servicio y construir los sueños de
          nuestros clientes. Materializamos cada proyecto con equipos técnicos de
          construcción: planificamos, gestionamos, coordinamos y lideramos todos los rubros
          involucrados. Con más de 20 años de experiencia, brindamos soluciones en
          instalaciones, mantenimientos y obras llave en mano, siempre con calidad,
          transparencia y compromiso.
        </p>
      </div>
    </section>
  )
}
