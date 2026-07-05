import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
    </main>
  );
}