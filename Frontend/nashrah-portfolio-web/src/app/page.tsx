import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
    </main>
  );
}