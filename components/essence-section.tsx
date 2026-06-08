import { Heart, Lightbulb, Users, ShieldCheck } from "lucide-react"
import { SectionTitle } from "@/components/section-title"

const values = [
  {
    icon: Heart,
    title: "El cliente es nuestro valor más importante.",
  },
  {
    icon: Lightbulb,
    title: "Pasión, iniciativa y creatividad.",
  },
  {
    icon: Users,
    title: "Profesionalidad y trabajo en equipo.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad y confianza.",
  },
]

export function EssenceSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle highlight="Nuestra" rest="Esencia" className="text-black" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((item) => (
            <div key={item.title} className="text-center px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red/10 mb-4">
                <item.icon className="w-8 h-8 text-brand-red" strokeWidth={2} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
