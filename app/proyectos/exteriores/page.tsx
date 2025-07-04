"use client";

import Image from "next/image";
import Link from "next/link";

const proyectos = [
  {
    id: 1,
    titulo: "Piscina y Solarium",
    imagenes: [
      "/images/exterior-frente.jpeg",
      "/images/patio.jpg",
      "/images/hero-pool.jpg"
    ],
  },
  {
    id: 2,
    titulo: "Jardín Moderno",
    imagenes: [
      "/images/exterior2-frente.jpg",
      "/images/terrazas-frente.jpeg",
      "/images/foto-espalda.jpg"
    ],
  }
];

export default function ExterioresPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black mt-12">Nuestros Espacios Exteriores</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          proyecto.imagenes.map((imagen, idx) => (
            <Link key={proyecto.id + '-' + idx} href={`/proyectos/exteriores/${proyecto.id}`} className="block group">
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