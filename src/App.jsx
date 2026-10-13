import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import TechStackSection from "./components/TechStackSection";
import DesignSection from "./components/DesignSection";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-paper text-pure-ink font-mono antialiased selection:bg-pure-ink selection:text-cream-paper">
      <main className="max-w-[1440px] mx-auto px-6 pt-5 pb-32">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <DesignSection />
        <TechStackSection />
        <Footer />
      </main>
    </div>
  );
}
