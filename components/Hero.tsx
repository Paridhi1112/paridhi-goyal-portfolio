"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/app/data";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("hero-loaded"), 100);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-20 overflow-hidden"
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-70"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,163,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)",
          filter: "blur(100px)",
          animation: "float 14s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Status tag */}
        <div
          className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.22em] text-accent">
            Open to full-time SWE &amp; DE opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold leading-none mb-6 opacity-0 animate-fade-up"
          style={{
            fontSize: "clamp(52px, 9vw, 130px)",
            letterSpacing: "-0.035em",
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
        >
          <span className="block text-[#E8E8F2]">Paridhi</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: "1px rgba(232,232,242,0.22)",
              color: "transparent",
            }}
          >
            Goyal
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic text-subtle mb-4 opacity-0 animate-fade-up"
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            animationDelay: "0.35s",
            animationFillMode: "forwards",
            maxWidth: "680px",
          }}
        >
          &ldquo;{portfolio.tagline}&rdquo;
        </p>

        {/* Sub-headline */}
        <p
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
        >
          {portfolio.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 mb-20 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="px-7 py-3.5 bg-accent text-bg font-mono text-xs uppercase tracking-widest font-medium rounded-sm hover:shadow-[0_0_40px_rgba(0,255,163,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-white/10 text-subtle font-mono text-xs uppercase tracking-widest rounded-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border border-white/10 text-subtle font-mono text-xs uppercase tracking-widest rounded-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
        >
          {portfolio.stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display font-extrabold text-accent glow-text"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono tracking-widest text-muted uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  );
}
