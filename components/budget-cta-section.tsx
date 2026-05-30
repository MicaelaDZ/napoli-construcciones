import Link from "next/link"
import { SectionTitle } from "@/components/section-title"

export function BudgetCtaSection() {
  return (
    <section className="bg-brand py-14 md:py-16">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle
          highlight="Pedí"
          rest="tu presupuesto"
          className="text-black mb-6"
        />
        <Link
          href="#contacto"
          className="inline-block bg-surface-darker hover:bg-black text-white font-bold uppercase tracking-wider px-10 py-4 text-lg transition-colors"
        >
          ¡¡Click Aquí!!
        </Link>
      </div>
    </section>
  )
}
