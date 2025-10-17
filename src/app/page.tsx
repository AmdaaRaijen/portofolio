import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="font-sans h-screen overflow-y-scroll no-scrollbar">
      <HeroSection />

      <ProjectSection />
    </div>
  );
}
