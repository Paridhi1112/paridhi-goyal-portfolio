"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/app/data";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    { icon: "🎓", label: "Education", value: "MS @ RPI — 4.0 GPA" },
    { icon: "🏢", label: "Experience", value: "5+ Years Production Eng" },
    { icon: "📄", label: "Published", value: "Accenture Whitepaper" },
    { icon: "☁️", label: "Certified", value: "AWS · Azure · Oracle" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <div className="section-reveal mb-3 flex items-center gap-3">
        <span className="w-8 h-px bg-accent block" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
          About
        </span>
      </div>

      <h2
        className="section-reveal font-display font-extrabold mb-16"
        style={{
          fontSize: "clamp(36px, 5vw, 64px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        Engineered for{" "}
        <span className="text-accent">scale.</span>
        <br />
        Designed for{" "}
        <span
          style={{
            WebkitTextStroke: "1px rgba(232,232,242,0.3)",
            color: "transparent",
          }}
        >
          impact.
        </span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div className="space-y-6">
          {portfolio.about.map((p, i) => (
            <p
              key={i}
              className="section-reveal font-mono text-sm text-subtle leading-relaxed"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p}
            </p>
          ))}

          {/* Achievements */}
          <div className="section-reveal pt-4 space-y-4" style={{ transitionDelay: "280ms" }}>
            {portfolio.achievements.map((a) => (
              <div
                key={a.title}
                className="flex gap-4 p-4 border border-white/5 rounded-sm bg-surface hover:border-accent/20 transition-colors duration-300"
              >
                <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-mono text-[#E8E8F2] mb-1">{a.title}</p>
                  <p className="text-xs font-mono text-muted leading-relaxed">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className="section-reveal grad-border p-6 bg-surface rounded-sm hover:-translate-y-1 transition-transform duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-hover
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted mb-2">
                {c.label}
              </div>
              <div className="font-display font-bold text-sm text-[#E8E8F2]">
                {c.value}
              </div>
            </div>
          ))}

          {/* Certifications mini-list */}
          <div
            className="section-reveal col-span-2 p-6 bg-surface border border-white/5 rounded-sm"
            style={{ transitionDelay: "320ms" }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
              Certifications
            </div>
            <ul className="space-y-2">
              {portfolio.certifications.slice(0, 4).map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">›</span>
                  <span className="text-xs font-mono text-muted">{cert}</span>
                </li>
              ))}
              {portfolio.certifications.length > 4 && (
                <li className="text-xs font-mono text-accent/60 pl-4">
                  +{portfolio.certifications.length - 4} more
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
