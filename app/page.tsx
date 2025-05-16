import "./page.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import TeamSection from "./components/TeamSection/TeamSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import ClienteleSection from "./components/ClienteleSection/ClienteleSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClienteleSection />
      <TeamSection />
      <GetInTouchSection />
    </div>
  )
}
