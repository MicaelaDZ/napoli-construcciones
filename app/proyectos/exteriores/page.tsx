import { ProjectGallery } from "@/components/project-gallery"

const proyectos = [
  {
    id: 1,
    titulo: "Piscina y Solarium",
    imagenes: [
      "/images/exteriores/exterior-frente.jpeg",
      "/images/residenciales/patio.jpg",
      "/images/hero-pool.jpg",
    ],
  },
  {
    id: 2,
    titulo: "Jardín Moderno",
    imagenes: [
      "/images/exteriores/exterior2-frente.jpg",
      "/images/locales/terrazas-frente.jpeg",
      "/images/foto-espalda.jpg",
    ],
  },
]

export default function ExterioresPage() {
  return <ProjectGallery title="Espacios Exteriores" proyectos={proyectos} />
}
