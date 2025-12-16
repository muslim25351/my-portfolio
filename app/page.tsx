import Header from "@/components/header";
import Hero from "@/components/hero";
import Persona from "@/components/persona";
import ProjectGrid from "@/components/project-grid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Persona />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
