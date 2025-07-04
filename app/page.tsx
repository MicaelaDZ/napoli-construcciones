import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      
      <ProjectsSection />
      {/* <div className="relative mt-16 w-full rounded-2xl overflow-hidden shadow-xl min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#FFF9E5] opacity-80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 w-full max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 drop-shadow-lg">Creamos espacios únicos para tu hogar</h2>
          <p className="text-lg md:text-xl text-black mb-8 drop-shadow-md">
            Transformamos patios, jardines y exteriores en lugares de encuentro, relax y naturaleza. Descubrí cómo podemos hacer realidad el espacio exterior que soñás.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow transition-colors text-lg">
            Contactanos
          </a>
        </div>
      </div> */}
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
