"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#contacto", label: "Contacto" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Quienes Somos" },
  { href: "#servicios", label: "Servicios" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-stretch min-h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-3 bg-surface-darker px-5 md:px-8 shrink-0"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
            <Image
              src="/logo.ico"
              alt="Napoli Construcciones"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="block text-white font-extrabold text-lg md:text-xl tracking-wider">
              NAPOLI
            </span>
            <span className="block text-brand font-semibold text-xs md:text-sm tracking-widest uppercase">
              Construcciones
            </span>
          </div>
        </Link>

        <div className="flex-1 flex items-center justify-end bg-surface-dark/95 backdrop-blur-sm px-4 md:px-8">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-bold text-sm uppercase tracking-wide hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-surface-darker border-t border-white/10 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white font-bold uppercase tracking-wide hover:text-brand transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
