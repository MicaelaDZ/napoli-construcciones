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
      imagenes: [
        "/images/residencial1-frente.jpg",
        "/images/patio.jpg",
        "/images/moka-frente.jpg"
      ],
    },
    {
      id: 2,
      titulo: "Renovación Completa",
      imagenes: [
        "/images/bloque-nosotros-1.jpg",
        "/images/bloque-nosotros-2.jpg",
        "/images/foto-espalda.jpg"
      ],
    }
  ];

  const handlePrevCarousel = () => {
    setCurrentCarousel((prev) => (prev === 0 ? proyectos[0].imagenes.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCurrentCarousel((prev) => (prev === proyectos[0].imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12  mt-12 text-black">Nuestros Proyectos Residenciales</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          proyecto.imagenes.map((imagen, idx) => (
            <Link key={proyecto.id + '-' + idx} href={`/proyectos/residencial/${proyecto.id}`} className="block group">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imagen}
                  alt={proyecto.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white font-semibold text-lg">{proyecto.titulo}</span>
                </div>
              </div>
            </Link>
          ))
        ))}
      </div>
    </div>
  );
} 