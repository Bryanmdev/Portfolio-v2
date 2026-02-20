import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";
import { Particles } from "../../components/animations/Particles";
import { ScrollProgress } from "../../components/animations/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative font-sans pt-12 md:pt-0 overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      <Particles />
      <ScrollProgress />
      <div className="relative z-10 flex flex-col w-full h-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
