import { ProjectGallery } from "@/components/project-gallery"
import { DRIVE_FOLDERS, listDriveImages } from "@/lib/drive-albums"

export const revalidate = 300

const proyectos = [
  {
    id: 1,
    titulo: "Nucha Café",
    imagenes: ["/images/locales/nucha-frente.jpg", "/images/locales/nucha-interior.jpg"],
  },
  {
    id: 2,
    titulo: "Moka Café",
    imagenes: [
      "/images/locales/moka-frente.jpg",
      "/images/locales/moka-vidriera.jpg",
      "/images/locales/moka-interior.jpg",
      // "/images/locales/MOKA1.jpg",
      // "/images/locales/MOKA2.jpg",
      // "/images/locales/MOKA3.jpg",
    ],
  },
  // {
  //   id: 3,
  //   titulo: "Rock & Feller's",
  //   imagenes: ["/images/locales/ROCK1.jpg", "/images/locales/rock&fellers.jpg"],
  // },
  {
    id: 4,
    titulo: "Havanna",
    imagenes: ["/images/locales/HAVANNA1.jpg"],
  },
  {
    id: 5,
    titulo: "Freddo",
    imagenes: ["/images/locales/FREDDO1.png"],
  },
  {
    id: 6,
    titulo: "Fabric Sushi",
    imagenes: ["/images/locales/FABRIC1.png"],
  },
  {
    id: 7,
    titulo: "Tienda de Café",
    imagenes: ["/images/locales/TIENDA1.jpg"],
  },
  {
    id: 8,
    titulo: "Terrazas de Ezeiza",
    imagenes: ["/images/locales/terrazas-frente.jpeg"],
  },
]

export default async function ComercialesPage() {
  const drive = await listDriveImages(DRIVE_FOLDERS.comerciales)
  const obras = drive.length
    ? [{ id: 0, titulo: "Comerciales", imagenes: drive.map((image) => image.src) }, ...proyectos]
    : proyectos

  return (
    <ProjectGallery
      title="Obras Comerciales"
      subtitle="Algunas de nuestras obras"
      proyectos={obras}
    />
  )
}
