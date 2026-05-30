import { ProjectGallery } from "@/components/project-gallery"

const proyectos = [
  {
    id: 1,
    titulo: "Casa Familiar Moderna",
    imagenes: [
      "/images/residenciales/residencial1-frente.jpg",
      "/images/residenciales/patio.jpg",
      "/images/locales/moka-frente.jpg",
    ],
  },
  {
    id: 2,
    titulo: "Renovación Completa",
    imagenes: [
      "/images/bloque-nosotros-1.jpg",
      "/images/bloque-nosotros-2.jpg",
      "/images/foto-espalda.jpg",
    ],
  },
]

export default function ProyectosResidenciales() {
  return (
    <ProjectGallery title="Construcción Residencial" proyectos={proyectos} />
  )
}
