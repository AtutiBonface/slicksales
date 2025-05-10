import Image from "next/image";
import "./page.module.css";
import TopBar from "./components/TopBar/TopBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import TeamSection from "./components/TeamSection/TeamSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import SocialMediaSection from "./components/SocialMediaSection/SocialMediaSection";
import FooterSection from "./components/FooterSection/FooterSection";

export default function Home() {
  return (
    <div>
      <TopBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <GetInTouchSection />
      <SocialMediaSection />
      <FooterSection />
    </div>
  )
}
