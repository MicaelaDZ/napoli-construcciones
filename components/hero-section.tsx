import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-kenburns">
          <Image
            src="/images/hero-modern.jpg"
            alt="Arquitectura contemporánea — Napoli Construcciones"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface-darker/92 via-surface-darker/60 to-surface-darker/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/85 via-transparent to-surface-darker/40" />
        <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-brand hero-accent-bar" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-10 w-full">
        <div className="max-w-3xl">
          <div className="hero-reveal hero-reveal-1 mb-5 md:mb-7">
            <p className="font-extrabold text-brand text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[0.14em] leading-none">
              NAPOLI
            </p>
            <p className="mt-2 md:mt-3 text-white/65 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.38em]">
              Construcciones Integrales
            </p>
          </div>

          <div className="hero-reveal hero-reveal-2 mb-6 md:mb-8 h-1 w-20 md:w-28 bg-brand origin-left hero-line" />

          <h1 className="hero-reveal hero-reveal-3 text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.15] mb-4 md:mb-5">
            Construimos espacios que perduran
          </h1>

          <p className="hero-reveal hero-reveal-4 text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8 md:mb-10">
            Más de 20 años levantando obras con precisión, compromiso y una mirada puesta en el futuro.
          </p>

          <div className="hero-reveal hero-reveal-5 flex flex-wrap gap-3 md:gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-hover text-surface-darker font-bold uppercase tracking-wider px-7 md:px-9 py-3.5 md:py-4 text-sm transition-colors"
            >
              Pedí tu presupuesto
            </Link>
            <Link
              href="#proyectos"
              className="inline-flex items-center justify-center border border-white/35 hover:border-brand hover:text-brand text-white font-bold uppercase tracking-wider px-7 md:px-9 py-3.5 md:py-4 text-sm transition-colors"
            >
              Ver proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
