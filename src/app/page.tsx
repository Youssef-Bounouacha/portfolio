import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <FeaturedProject />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
