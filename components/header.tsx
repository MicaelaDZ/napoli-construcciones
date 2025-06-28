import { Building2 } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <Building2 className="w-6 h-6 text-yellow-500" />
            Napoli Construcciones
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-yellow-500 transition-colors">
              Inicio
            </Link>
            <Link href="#proyectos" className="text-white hover:text-yellow-500 transition-colors">
              Proyectos
            </Link>
            <Link href="#nosotros" className="text-white hover:text-yellow-500 transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-white hover:text-yellow-500 transition-colors">
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
