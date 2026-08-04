import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GithubStats />
        <Skills />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </SmoothScroll>
  );
}
