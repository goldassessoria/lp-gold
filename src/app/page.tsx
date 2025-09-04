import { AboutUsSection } from "@/components/about-us-section";
import { BenefitHighlightingSection } from "@/components/benefit-highlighting-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MissionDisplaySection } from "@/components/mission-display-section";
import { ServicePresentationSection } from "@/components/service-presentation-section";
import { TrustedBySection } from "@/components/trusted-by-section";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicePresentationSection />
        <BenefitHighlightingSection />
        <MissionDisplaySection />
        <TrustedBySection />
        <AboutUsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
