import { AboutSection } from "@/components/about-section"
import { AnimatedBackground } from "@/components/animated-background"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import RainingLetters from "@/components/raining"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <RainingLetters />
      {/* <HeroSection /> */}
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
