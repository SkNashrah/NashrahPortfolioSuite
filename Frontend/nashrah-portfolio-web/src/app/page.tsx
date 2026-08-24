import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
    </main>
  );
}