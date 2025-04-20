
import { HeroSection } from "@/components/HeroSection";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <Experience />
      <Skills />
    </div>
  );
};

export default Index;
