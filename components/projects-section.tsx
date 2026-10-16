"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SectionTitle } from "@/components/section-title"
import { ChevronLeft, ChevronRight } from "lucide-react"

type AlbumImage = { src: string; alt: string }

export function ProjectsSection({
  particularFromDrive = [],
  commercialFromDrive = [],
}: {
  particularFromDrive?: AlbumImage[]
  commercialFromDrive?: AlbumImage[]
}) {
  const commercialImages = [
    { src: "/images/locales/nucha-frente.jpg", alt: "Nucha Café" },
    { src: "/images/locales/moka-vidriera.jpg", alt: "Moka Café" },
    { src: "/images/locales/moka-frente.jpg", alt: "Moka Café" },
    { src: "/images/locales/terrazas-frente.jpeg", alt: "Terrazas de Ezeiza" },
  ]
  const [currentCommercial, setCurrentCommercial] = useState(0)

  const particularImages = [
    { src: "/images/particulares/particular-0164.jpg", alt: "Interior particular" },
    { src: "/images/particulares/particular-0167.jpg", alt: "Interior particular" },
    { src: "/images/residenciales/residencial1-frente.jpg", alt: "Interior residencial" },
    { src: "/images/residenciales/patio.jpg", alt: "Patio" },
    { src: "/images/exteriores/exterior-frente.jpeg", alt: "Piscina" },
    { src: "/images/exteriores/exterior2-frente.jpg", alt: "Espacio exterior" },
    { src: "/images/hero-pool.jpg", alt: "Piscina" },
    { src: "/images/foto-espalda.jpg", alt: "Obra particular" },
  ]
  const [currentParticular, setCurrentParticular] = useState(0)
  const particularSlides = [...particularFromDrive, ...particularImages]
  const commercialSlides = [...commercialFromDrive, ...commercialImages]

  const projects = [
    {
      title: "Particulares",
      subtitle: "Espacios interiores y exteriores",
      href: "/proyectos/particulares",
      images: particularSlides,
      current: currentParticular,
      onPrev: () =>
        setCurrentParticular((p) => (p === 0 ? particularSlides.length - 1 : p - 1)),
      onNext: () =>
        setCurrentParticular((p) => (p === particularSlides.length - 1 ? 0 : p + 1)),
    },
    {
      title: "Obras Comerciales",
      subtitle: "Locales, oficinas y espacios públicos",
      href: "/proyectos/comerciales",
      images: commercialSlides,
      current: currentCommercial,
      onPrev: () =>
        setCurrentCommercial((p) => (p === 0 ? commercialSlides.length - 1 : p - 1)),
      onNext: () =>
        setCurrentCommercial((p) => (p === commercialSlides.length - 1 ? 0 : p + 1)),
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

        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto">
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
                  unoptimized={img.src.startsWith("http")}
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

  
      </div>
    </section>
  )
}
