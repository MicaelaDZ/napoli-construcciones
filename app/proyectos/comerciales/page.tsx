import { ProjectGallery } from "@/components/project-gallery"

const proyectos = [
  {
    id: 1,
    titulo: "Moka Café",
    imagenes: ["/images/locales/moka-frente.jpg", "/images/locales/MOKA1.jpg", "/images/locales/MOKA2.jpg", "/images/locales/MOKA3.jpg"],
  },
  {
    id: 2,
    titulo: "Rock & Feller's",
    imagenes: ["/images/locales/ROCK1.jpg", "/images/locales/rock&fellers.jpg"],
  },
  {
    id: 3,
    titulo: "Havanna",
    imagenes: ["/images/locales/HAVANNA1.jpg", "/images/locales/havanna.jpg"],
  },
  {
    id: 4,
    titulo: "Freddo",
    imagenes: ["/images/locales/FREDDO1.png", "/images/locales/freddo.jpg"],
  },
  {
    id: 5,
    titulo: "Fabric Sushi",
    imagenes: ["/images/locales/FABRIC1.png", "/images/locales/fabric.png"],
  },
  {
    id: 6,
    titulo: "Tienda de Café",
    imagenes: ["/images/locales/TIENDA1.jpg", "/images/locales/tienda.jpg"],
  },
  {
    id: 7,
    titulo: "Terrazas de Ezeiza",
    imagenes: ["/images/locales/terrazas-frente.jpeg"],
  },
]

export default function ComercialesPage() {
  return <ProjectGallery title="Obras Comerciales" proyectos={proyectos} />
}
