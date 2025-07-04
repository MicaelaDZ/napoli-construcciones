"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

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

export default function ObraResidencialPage() {
  const params = useParams();
  const id = Number(params.id);
  const proyecto = proyectos.find((p) => p.id === id);
  const [current, setCurrent] = useState(0);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Obra no encontrada</h1>
        <Link href="/proyectos/residencial" className="text-blue-600 underline">Volver</Link>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? proyecto.imagenes.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === proyecto.imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl mx-auto mb-8">
        <Link href="/proyectos/residencial" className="flex items-center gap-2 text-black font-semibold mb-6">
          <ArrowLeft className="w-5 h-5" /> Volver a proyectos
        </Link>
        <h1 className="text-3xl font-bold text-center mb-8">{proyecto.titulo}</h1>
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-[450px]">
          <Image
            src={proyecto.imagenes[current]}
            alt={proyecto.titulo}
            fill
            className="object-cover"
          />
          {/* Controles */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 z-10 shadow"
            aria-label="Anterior"
            type="button"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 z-10 shadow"
            aria-label="Siguiente"
            type="button"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {proyecto.imagenes.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-black' : 'bg-black/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 