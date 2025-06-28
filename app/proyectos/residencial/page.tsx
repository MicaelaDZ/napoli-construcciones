"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProyectosResidenciales() {
  const [currentCarousel, setCurrentCarousel] = useState(0);

  // Datos de proyectos residenciales
  const proyectos = [
    {
      id: 1,
      titulo: "Casa Familiar Moderna",
      ubicacion: "San Isidro, Buenos Aires",
      descripcion: "Construcción completa de casa familiar de 200m² con diseño moderno y funcional.",
      imagenes: [
        "/images/residencial1-frente.jpg",
        "/images/patio.jpg",
        "/images/moka-frente.jpg"
      ],
      antesDespues: [
        {
          antes: "/images/asphalt-texture.jpg",
          despues: "/images/residencial1-frente.jpg",
          descripcion: "Transformación del frente de la casa"
        }
      ],
      caracteristicas: ["3 dormitorios", "2 baños", "Cocina integrada", "Patio trasero", "Garage"]
    },
    {
      id: 2,
      titulo: "Renovación Completa",
      ubicacion: "Vicente López, Buenos Aires",
      descripcion: "Renovación integral de casa existente, modernizando espacios y optimizando la distribución.",
      imagenes: [
        "/images/bloque-nosotros-1.jpg",
        "/images/bloque-nosotros-2.jpg",
        "/images/foto-espalda.jpg"
      ],
      antesDespues: [
        {
          antes: "/images/asphalt-texture.jpg",
          despues: "/images/bloque-nosotros-1.jpg",
          descripcion: "Renovación del living principal"
        }
      ],
      caracteristicas: ["Renovación completa", "Nuevos materiales", "Mejoras estructurales", "Diseño interior"]
    }
  ];

  const handlePrevCarousel = () => {
    setCurrentCarousel((prev) => (prev === 0 ? proyectos[0].imagenes.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCurrentCarousel((prev) => (prev === proyectos[0].imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header con navegación */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </Link>
            <Link href="/#proyectos" className="text-white hover:text-yellow-500 transition-colors">
              Todos los proyectos
            </Link>
          </nav>
        </div>
      </header>

      {/* Banner principal */}
      <section className="relative pt-20">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl min-h-[400px] flex items-center justify-center mx-4 mt-8">
          <div className="absolute inset-0">
            <img
              src="/images/residencial1-frente.jpg"
              alt="Construcción Residencial"
              className="w-full h-full object-cover blur-sm brightness-75"
              style={{ filter: 'blur(4px) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-[#FFF9E5] opacity-80" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 w-full max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">
              Construcción Residencial
            </h1>
            <p className="text-lg md:text-xl text-black leading-relaxed drop-shadow-md">
              Creamos hogares únicos y funcionales que se adaptan a las necesidades de cada familia
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel principal */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Galería de Proyectos</h2>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={proyectos[0].imagenes[currentCarousel]}
                alt={`Proyecto residencial ${currentCarousel + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Controles del carrusel */}
              <button
                onClick={handlePrevCarousel}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextCarousel}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {proyectos[0].imagenes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCarousel(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentCarousel ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos individuales */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Nuestros Proyectos</h2>
          
          {proyectos.map((proyecto, index) => (
            <div key={proyecto.id} className="mb-20">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Información del proyecto */}
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-black mb-2">{proyecto.titulo}</h3>
                  <p className="text-yellow-600 font-medium mb-4">{proyecto.ubicacion}</p>
                  <p className="text-gray-700 text-lg mb-6">{proyecto.descripcion}</p>
                  
                  {/* Características */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proyecto.caracteristicas.map((caracteristica, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {caracteristica}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grilla de imágenes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 md:p-12 pt-0">
                  {proyecto.imagenes.map((imagen, idx) => (
                    <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={imagen}
                        alt={`${proyecto.titulo} - Imagen ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Comparaciones antes/después */}
                {proyecto.antesDespues && (
                  <div className="p-8 md:p-12 pt-0">
                    <h4 className="text-2xl font-bold text-black mb-6">Antes y Después</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {proyecto.antesDespues.map((comparacion, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                            <Image
                              src={comparacion.antes}
                              alt="Antes"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              ANTES
                            </div>
                          </div>
                          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                            <Image
                              src={comparacion.despues}
                              alt="Después"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              DESPUÉS
                            </div>
                          </div>
                          <p className="text-gray-700 text-center">{comparacion.descripcion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">¿Te gustó nuestro trabajo?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contáctanos para comenzar tu proyecto residencial
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-lg"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </div>
  );
} 