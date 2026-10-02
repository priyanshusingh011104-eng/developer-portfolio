import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <Hero />

      <TechMarquee />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Services />

      <Process />

      <CTA />

      <Contact />

      <Footer />
    </main>
  );
}