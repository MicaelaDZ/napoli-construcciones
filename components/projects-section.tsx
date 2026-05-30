"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SectionTitle } from "@/components/section-title"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectsSection() {
  const commercialImages = [
    { src: "/images/moka-frente.jpg", alt: "Moka Café" },
    { src: "/images/terrazas-frente.jpeg", alt: "Terrazas de Ezeiza" },
  ]
  const [currentCommercial, setCurrentCommercial] = useState(0)

  const exteriorImages = [
    { src: "/images/exterior-frente.jpeg", alt: "Espacio Exterior 1" },
    { src: "/images/exterior2-frente.jpg", alt: "Espacio Exterior 2" },
  ]
  const [currentExterior, setCurrentExterior] = useState(0)

  const residencialImages = [
    { src: "/images/residencial1-frente.jpg", alt: "Residencial" },
  ]
  const [currentResidencial] = useState(0)

  const projects = [
    {
      title: "Construcción Residencial",
      subtitle: "Obras en viviendas familiares",
      href: "/proyectos/residencial",
      images: residencialImages,
      current: currentResidencial,
      onPrev: undefined,
      onNext: undefined,
    },
    {
      title: "Espacios Exteriores",
      subtitle: "Piscinas, patios y jardines",
      href: "/proyectos/exteriores",
      images: exteriorImages,
      current: currentExterior,
      onPrev: () =>
        setCurrentExterior((p) => (p === 0 ? exteriorImages.length - 1 : p - 1)),
      onNext: () =>
        setCurrentExterior((p) => (p === exteriorImages.length - 1 ? 0 : p + 1)),
    },
    {
      title: "Obras Comerciales",
      subtitle: "Locales, oficinas y espacios públicos",
      href: "/proyectos/comerciales",
      images: commercialImages,
      current: currentCommercial,
      onPrev: () =>
        setCurrentCommercial((p) => (p === 0 ? commercialImages.length - 1 : p - 1)),
      onNext: () =>
        setCurrentCommercial((p) => (p === commercialImages.length - 1 ? 0 : p + 1)),
    },
  ]

  return (
    <section id="proyectos" className="py-16 md:py-20 bg-surface-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <SectionTitle
            highlight="Nuestros"
            rest="Últimos Proyectos"
            className="text-black"
          />
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Llevamos a cabo distintos tipos de trabajo constructivos: áreas de juego,
          estructuras metálicas, departamentos llave en mano, remodelaciones y mucho más.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => {
            const img = project.images[project.current]
            return (
              <Link
                key={project.title}
                href={project.href}
                className="group block relative aspect-[4/3] overflow-hidden bg-surface-darker"
              >
                {project.onPrev && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      project.onPrev?.()
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-brand text-white rounded-full p-2 transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                {project.onNext && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      project.onNext?.()
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-brand text-white rounded-full p-2 transition-colors"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg uppercase">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.subtitle}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="#proyectos"
            className="inline-block border-2 border-brand text-brand hover:bg-brand hover:text-black font-bold uppercase tracking-wider px-8 py-3 transition-colors"
          >
            Ver Todo
          </Link>
        </div>
      </div>
    </section>
  )
}
