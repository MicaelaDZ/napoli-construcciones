import Link from "next/link"
import { Instagram, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-surface-darker text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>Buenos Aires, Argentina</span>
              </li>
              <li>
                <a
                  href="tel:+5491169904752"
                  className="flex items-center gap-2 text-white/80 hover:text-brand transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand" />
                  +54 9 11 6990-4752
                </a>
              </li>
              <li>
                <a
                  href="mailto:napolidaniel@hotmail.com"
                  className="flex items-center gap-2 text-white/80 hover:text-brand transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand shrink-0" />
                  napolidaniel@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4 text-brand">
              Páginas
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#nosotros" className="hover:text-brand transition-colors">
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-brand transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-brand transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4 text-brand">
              Seguinos
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white/80 hover:text-brand transition-colors text-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            Copyright ©{new Date().getFullYear()} Napoli Construcciones. Todos los
            derechos reservados.
          </p>
          <p className="text-xs mt-2 text-brand font-medium uppercase tracking-wider">
            Diseño y Construcciones.
          </p>
        </div>
      </div>
    </footer>
  )
}
