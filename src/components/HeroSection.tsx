
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5] text-white px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Adeyinka Hassan Adebowale
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-purple-200">
          Software Engineering Manager, Best use of Technology
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          8+ years of expertise in designing and developing software systems. Specializing in technical leadership, cloud architecture, and delivering high-impact solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Button variant="secondary" className="gap-2">
            <Mail className="w-4 h-4" />
            adebowalehassan@yahoo.com
          </Button>
          <Button variant="secondary" className="gap-2">
            <Phone className="w-4 h-4" />
            +234 813 775 7470
          </Button>
          <Button variant="secondary" className="gap-2" asChild>
            <a href="https://www.linkedin.com/in/adeyinka-adebowale-124a3aa6/" target="_blank" rel="noopener">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="secondary" className="gap-2" asChild>
            <a href="https://github.com/my1companion" target="_blank" rel="noopener">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
