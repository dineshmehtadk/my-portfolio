import { Hero } from "@/components/ui/Hero";
import { Quote } from "./Quote";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HeroSeparator } from "./HeroSeprator";

export function HeroSection04() {
  return (
    <>
      <Hero />
      <Quote />
      <section className="mt-16 mb-24 px-4">
        <HeroSeparator title="projects" viewAllLink="/projects" />

        <Projects />
      </section>

      <section className="mt-16 mb-24 px-4">
        <HeroSeparator title="skills" viewAllLink="/about-me" />

        <Skills />
      </section>

      <section className="mt-16 mb-24 px-4">
        <HeroSeparator title="about-me" viewAllLink="/about-me" />

        <About />
      </section>

         <section className="mt-16 mb-24 px-4">
        <HeroSeparator title="contacts" viewAllLink="/contacts" />

        <Contact />
      </section>
     <Footer />
    </>
  );
}
