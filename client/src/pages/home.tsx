import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CookRegistration from "@/components/cook-registration";
import AppDownloads from "@/components/app-downloads";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CookRegistration />
      <AppDownloads />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
