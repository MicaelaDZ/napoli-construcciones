"use client";

import Image from "next/image";
import Link from "next/link";

const proyectos = [
  {
    id: 1,
    titulo: "Moka Café",
    imagenes: [
      "/images/moka-frente.jpg",
    ],
  },
  {
    id: 2,
    titulo: "Rock & Feller's",
    imagenes: [
      "/images/locales/ROCK1.jpg",
    ],
  },
  {
    id: 3,
    titulo: "Havanna",
    imagenes: [
      "/images/locales/HAVANNA1.jpg",
    ],
  },
  {
    id: 4,
    titulo: "Freddo",
    imagenes: [
      "/images/locales/FREDDO1.png",
      "/images/freddo.jpg",
      "/images/havanna.jpg"
    ],
  },
  {
    id: 5,
    titulo: "Fabric Sushi",
    imagenes: [
      "/images/locales/FABRIC1.png",
      "/images/freddo.jpg",
      "/images/havanna.jpg"
    ],
  },
  {
    id: 6,
    titulo: "Tienda de Café",
    imagenes: [
      "/images/locales/TIENDA1.jpg",
    ],
  }
];

export default function ComercialesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black mt-12">Obras Comerciales</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          <Link key={proyecto.id} href={`/proyectos/comerciales/${proyecto.id}`} className="block group">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={proyecto.imagenes[0]}
                alt={proyecto.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-semibold text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>{proyecto.titulo}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 