"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/app/data/index";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" },
  { name: "Skills", href: "#skills" },
  { name: "Recommendations", href: "#recommendations" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      const offset = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= offset) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Brand */}
          <a href="#hero" className="group flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg border border-[#00FFA3]/30 bg-[#00FFA3]/10 flex items-center justify-center text-[#00FFA3] font-mono font-bold text-sm group-hover:bg-[#00FFA3] group-hover:text-black transition-all duration-200">
              PG
            </span>
            <span className="font-display font-bold text-[var(--color-text)] text-base group-hover:text-[#00FFA3] transition-colors hidden sm:block">
              Paridhi Goyal
            </span>
            <span className="hidden md:block text-[var(--color-muted)] text-xs font-mono ml-1 pl-3 border-l border-[var(--color-border)]">
              SDE · Distributed Systems
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[var(--color-surface)]/60 border border-[var(--color-border)] rounded-2xl px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const active = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-xl transition-colors duration-200 ${
                    active ? "text-[#00FFA3]" : "text-[var(--color-subtle)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#00FFA3]/10 border border-[#00FFA3]/25 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2">
            {/* Terminal button */}
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-terminal"))}
              title="Open Terminal (Ctrl+K)"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 hover:bg-[#00FFA3]/5 transition-all text-xs font-mono font-bold"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden lg:block">Ctrl+K</span>
            </button>
            <ThemeToggle />
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-[#00FFA3] text-black text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] hover:scale-[1.02] transition-all"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl border border-[var(--color-border)] text-[var(--color-subtle)]"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-border)]">
          <div
            className="h-full bg-gradient-to-r from-[#00FFA3] via-[#38BDF8] to-[#6C63FF] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[62px] z-30 glass-nav border-b border-[var(--color-border)] px-6 py-8 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-[var(--color-text)] hover:text-[#00FFA3] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[var(--color-border)]">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-3 text-center bg-[#00FFA3] text-black font-mono font-bold uppercase tracking-widest text-xs rounded-xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
