import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BudgetCtaSection } from "@/components/budget-cta-section"
import { AboutSection } from "@/components/about-section"
import { EssenceSection } from "@/components/essence-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BudgetCtaSection />
      <AboutSection />
      <EssenceSection />
      <WhyUsSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
