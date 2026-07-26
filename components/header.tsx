"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#nosotros", label: "Quiénes Somos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const solid = !isHome || scrolled || menuOpen

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-visible">
      {/* Capa de fondo aparte: evita que backdrop-blur recorte el halo del logo en mobile */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
          solid
            ? "bg-surface-darker/95 backdrop-blur-md border-white/10"
            : "bg-transparent border-transparent"
        }`}
      />

      <div className="relative flex items-center justify-between gap-4 min-h-[72px] md:min-h-[80px] px-4 sm:px-6 md:px-10">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" aria-hidden />

        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 min-w-0 group"
          onClick={() => setMenuOpen(false)}
        >
          <div className="logo-mark relative shrink-0">
            <span
              aria-hidden
              className="logo-mark-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="relative h-12 w-9 overflow-hidden rounded-lg md:h-14 md:w-10 md:rounded-xl">
              <Image
                src="/images/logo.jpg"
                alt="Napoli Construcciones"
                fill
                className="object-cover"
                priority
                sizes="56px"
              />
            </div>
          </div>
          <div className="leading-tight min-w-0">
            <span className="block text-brand font-extrabold text-base sm:text-lg md:text-xl tracking-[0.14em]">
              NAPOLI
            </span>
            <span className="block text-white/75 font-semibold text-[9px] sm:text-[10px] md:text-xs tracking-[0.28em] uppercase">
              Construcciones Integrales
            </span>
          </div>
        </Link>

        <div className="flex items-center justify-end gap-6 lg:gap-8 shrink-0">
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/80 font-semibold text-[11px] lg:text-xs uppercase tracking-[0.18em] transition-colors hover:text-brand after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contacto"
            className="hidden md:inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-surface-darker font-bold uppercase tracking-[0.14em] text-[11px] px-5 py-2.5 transition-colors"
          >
            Presupuesto
          </Link>

          <button
            type="button"
            className="md:hidden text-white p-2 -mr-1"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="bg-surface-darker/98 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 font-semibold uppercase tracking-[0.18em] text-sm py-3 border-b border-white/10 last:border-0 hover:text-brand transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contacto"
            className="mt-4 inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-surface-darker font-bold uppercase tracking-[0.14em] text-sm px-5 py-3.5 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pedí tu presupuesto
          </Link>
        </nav>
      </div>
    </header>
  )
}
