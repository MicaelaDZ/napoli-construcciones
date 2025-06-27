"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function ProjectsSection() {
  // Carrusel para Obras Comerciales
  const commercialImages = [
    {
      src: "/images/moka-frente.jpg",
      alt: "Moka Café - Frente",
    },
    {
      src: "/images/terrazas-frente.jpeg",
      alt: "Terrazas de Ezeiza - Frente",
    },
  ];
  const [currentCommercial, setCurrentCommercial] = useState(0);

  const handlePrevCommercial = () => {
    setCurrentCommercial((prev) => (prev === 0 ? commercialImages.length - 1 : prev - 1));
  };
  const handleNextCommercial = () => {
    setCurrentCommercial((prev) => (prev === commercialImages.length - 1 ? 0 : prev + 1));
  };

  // Carrusel para Espacios Exteriores
  const exteriorImages = [
    {
      src: "/images/exterior-frente.jpeg",
      alt: "Espacio Exterior 1",
    },
    {
      src: "/images/exterior2-frente.jpg",
      alt: "Espacio Exterior 2",
    },
  ];
  const [currentExterior, setCurrentExterior] = useState(0);

  const handlePrevExterior = () => {
    setCurrentExterior((prev) => (prev === 0 ? exteriorImages.length - 1 : prev - 1));
  };
  const handleNextExterior = () => {
    setCurrentExterior((prev) => (prev === exteriorImages.length - 1 ? 0 : prev + 1));
  };

  // Carrusel para Residencial
  const residencialImages = [
    {
      src: "/images/residencial1-frente.jpg",
      alt: "Residencial 1",
    },
  ];
  const [currentResidencial, setCurrentResidencial] = useState(0);

  return (
    <section
      id="proyectos"
      className="py-40 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Descubre nuestras obras más destacadas y la calidad de nuestro trabajo.
          </p>
        </div>
        {/* Projects Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Construcción Residencial con carrusel */}
          <Link href="/proyectos/residencial" className="group cursor-pointer block">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-white">
              <Image
                src={residencialImages[currentResidencial].src}
                alt={residencialImages[currentResidencial].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                style={{objectPosition: 'center'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-black">
                <h3 className="text-2xl font-semibold mb-2">Construcción Residencial</h3>
                <p className="text-sm text-gray-800">Obras en viviendas familiares</p>
              </div>
            </div>
          </Link>
          {/* Espacios Exteriores con carrusel */}
          <Link href="/proyectos/exteriores" className="group cursor-pointer block">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-white">
              {/* Carrusel */}
              <button
                onClick={(e) => { e.preventDefault(); handlePrevExterior(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 text-black rounded-full p-2 z-20 hover:bg-black/30"
                aria-label="Anterior"
                type="button"
              >
                &#8592;
              </button>
              <Image
                src={exteriorImages[currentExterior].src}
                alt={exteriorImages[currentExterior].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                style={{objectPosition: 'center'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-black">
                <h3 className="text-2xl font-semibold mb-2">Espacios Exteriores</h3>
                <p className="text-sm text-gray-800">Piscinas, patios y jardines</p>
              </div>
              <button
                onClick={(e) => { e.preventDefault(); handleNextExterior(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 text-black rounded-full p-2 z-20 hover:bg-black/30"
                aria-label="Siguiente"
                type="button"
              >
                &#8594;
              </button>
              {/* Indicadores */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {exteriorImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentExterior ? 'bg-black' : 'bg-black/20'}`}
                  />
                ))}
              </div>
            </div>
          </Link>
          {/* Obras Comerciales con carrusel */}
          <Link href="/proyectos/comerciales" className="group cursor-pointer block">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-white">
              {/* Carrusel */}
              <button
                onClick={(e) => { e.preventDefault(); handlePrevCommercial(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/10 text-black rounded-full p-2 z-20 hover:bg-black/30"
                aria-label="Anterior"
                type="button"
              >
                &#8592;
              </button>
              <Image
                src={commercialImages[currentCommercial].src}
                alt={commercialImages[currentCommercial].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                style={{objectPosition: 'center'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-black">
                <h3 className="text-2xl font-semibold mb-2">Obras Comerciales</h3>
                <p className="text-sm text-gray-800">Locales, oficinas y espacios públicos</p>
              </div>
              <button
                onClick={(e) => { e.preventDefault(); handleNextCommercial(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/10 text-black rounded-full p-2 z-20 hover:bg-black/30"
                aria-label="Siguiente"
                type="button"
              >
                &#8594;
              </button>
              {/* Indicadores */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {commercialImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentCommercial ? 'bg-black' : 'bg-black/20'}`}
                  />
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
