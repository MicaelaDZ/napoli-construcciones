import { ProjectGallery } from "@/components/project-gallery"
import { DRIVE_FOLDERS, listDriveImages } from "@/lib/drive-albums"

export const revalidate = 300

const locales = [
  "/images/particulares/particular-0164.jpg",
  "/images/particulares/particular-0167.jpg",
  "/images/residenciales/residencial1-frente.jpg",
  "/images/residenciales/patio.jpg",
  "/images/exteriores/exterior-frente.jpeg",
  "/images/exteriores/exterior2-frente.jpg",
  "/images/hero-pool.jpg",
  "/images/foto-espalda.jpg",
]

export default async function ParticularesPage() {
  const drive = await listDriveImages(DRIVE_FOLDERS.particulares)
  const imagenes = [...drive.map((image) => image.src), ...locales]

  return (
    <ProjectGallery
      title="Particulares"
      proyectos={[{ id: 1, titulo: "Particulares", imagenes }]}
    />
  )
}
