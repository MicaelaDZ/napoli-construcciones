import { SectionTitle } from "@/components/section-title"

const skills = [
  { label: "Idea & concepto", value: 95 },
  { label: "Exactitud", value: 85 },
  { label: "Comunicación", value: 74 },
  { label: "Ejecución", value: 90 },
]

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-20 bg-surface-muted">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-6">
          <SectionTitle highlight="POR QUÉ" rest="ELEGIRNOS" className="text-black" />
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Porque sus proyectos son importantes para nosotros. Nos implicamos y comprometemos
          al 100% en la satisfacción del cliente.
        </p>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800 uppercase text-sm tracking-wide">
                  {skill.label}
                </span>
                <span className="font-bold text-brand-red">{skill.value}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-red rounded-full transition-all duration-700"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
