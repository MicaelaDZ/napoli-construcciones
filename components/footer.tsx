import { Building2, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#181818f0] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Napoli Construcciones. Todos los derechos reservados.</p>
        <p className="text-xs mt-2 text-yellow-400">Hecho con pasión y dedicación.</p>
      </div>
    </footer>
  )
}
