import Header from "@/components/header";
import Hero from "@/components/hero";
import PortfolioImage from "@/components/portfolio-image";
import Persona from "@/components/persona";
import ProjectGrid from "@/components/project-grid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
