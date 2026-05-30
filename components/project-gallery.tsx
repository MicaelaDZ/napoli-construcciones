"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"

type Proyecto = {
  id: number
  titulo: string
  imagenes: string[]
}

type ProjectGalleryProps = {
  title: string
  proyectos: Proyecto[]
}

export function ProjectGallery({ title, proyectos }: ProjectGalleryProps) {
  const galleryImages = useMemo(
    () =>
      proyectos.flatMap((proyecto) =>
        proyecto.imagenes.map((src) => ({
          src,
          alt: proyecto.titulo,
        }))
      ),
    [proyectos]
  )

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null
      return current === 0 ? galleryImages.length - 1 : current - 1
    })
  }, [galleryImages.length])

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null
      return current === galleryImages.length - 1 ? 0 : current + 1
    })
  }, [galleryImages.length])

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-black font-semibold mb-8 hover:text-brand transition-colors"
        >
          <ArrowLeft className="w-5 h-5 m-3" />
          Volver a proyectos
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={`Ver imagen ${index + 1} ampliada`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la imagen"
          onClick={closeLightbox}
        >
          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/90 hover:text-brand transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-brand transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white hover:text-brand transition-colors"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>

            <div className="relative h-[85vh] w-full max-w-6xl px-14 md:px-20">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
