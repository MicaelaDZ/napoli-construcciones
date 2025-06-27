import { Building2, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4 md:mb-0">
            <Building2 className="w-6 h-6 text-yellow-500" />
            Napoli Construcciones
          </Link>

          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Napoli Construcciones. Todos los derechos reservados.
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
