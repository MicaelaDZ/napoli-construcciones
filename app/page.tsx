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
import { DRIVE_FOLDERS, listDriveImages } from "@/lib/drive-albums"

export const revalidate = 300

export default async function HomePage() {
  const [particularFromDrive, commercialFromDrive] = await Promise.all([
    listDriveImages(DRIVE_FOLDERS.particulares),
    listDriveImages(DRIVE_FOLDERS.comerciales),
  ])

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BudgetCtaSection />
      <AboutSection />
      <EssenceSection />
      <WhyUsSection />
      <ServicesSection />
      <ProjectsSection
        particularFromDrive={particularFromDrive}
        commercialFromDrive={commercialFromDrive}
      />
      <ClientsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
