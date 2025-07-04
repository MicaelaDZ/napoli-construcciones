"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";


//CARRUSEL SUB PAGINA
const proyectos = [
  {
    id: 1,
    titulo: "Moka Café",
    imagenes: [
      "/images/moka-frente.jpg",
      "/images/locales/MOKA1.jpg",
      "/images/locales/MOKA2.jpg",
      "/images/locales/MOKA3.jpg",
    ],
    "descripcion": "Hola hice moka"
  },
  {
    id: 2,
    titulo: "Rock & Feller's",
    imagenes: [
      "/images/locales/ROCK1.jpg",
    ],
    "descripcion": ""

  },
  {
    id: 3,
    titulo: "Havanna",
    imagenes: [
      "/images/locales/HAVANNA1.jpg",
    ],
    "descripcion": "Hola hice moka"

  },
  {
    id: 4,
    titulo: "Freddo",
    imagenes: [
      "/images/locales/FREDDO1.png",
    ],
    "descripcion": "Hola hice moka"

  },
  {
    id: 5,
    titulo: "Fabric Sushi",
    imagenes: [
      "/images/locales/FABRIC1.png",
    ],
    "descripcion": "Hola hice moka"

  },
  {
    id: 6,
    titulo: "Tienda de Café",
    imagenes: [
      "/images/locales/TIENDA1.jpg",
    ],
    "descripcion": "Hola hice moka"

  }
];

export default function ObraComercialPage() {
  const params = useParams();
  const id = Number(params.id);
  const proyecto = proyectos.find((p) => p.id === id);
  const [current, setCurrent] = useState(0);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Obra no encontrada</h1>
        <Link href="/proyectos/comerciales" className="text-blue-600 underline">Volver</Link>
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-18 px-4">
      <div className="w-full max-w-5xl mx-auto mb-8">
    
        <h1 className="text-3xl font-bold text-center mb-8">{proyecto.titulo}</h1>
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-[550px]">
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
          <div className="w-full max-w-3x1 mt-4">
              <h1 className="text-1xl ">
                {/* {proyecto.descripcion} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum perferendis, labore assumenda quidem, velit ex fugiat ipsum dicta ab accusantium sit sapiente porro eligendi perspiciatis dolores hic dolore. Aspernatur.
                </h1>
          </div>
      </div>
      <Link href="/proyectos/comerciales" className="flex items-center gap-2 text-black font-semibold mb-6">
          <ArrowLeft className="w-5 h-5" /> Volver a proyectos
        </Link>
    </div>
  );
} 