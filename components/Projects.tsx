"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/app/data";

const typeColors: Record<string, string> = {
  "AI / Full-Stack": "text-accent border-accent/30 bg-accent/5",
  "Data Engineering": "text-accent2 border-accent2/30 bg-accent2/5",
  "Cloud / DevOps": "text-accent3 border-accent3/30 bg-accent3/5",
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 120);
          });
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-28 px-6 md:px-12 lg:px-20 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-reveal mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-accent block" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            Featured Projects
          </span>
        </div>

        <h2
          className="section-reveal font-display font-extrabold mb-4"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Built to solve
          <br />
          <span className="text-accent">real problems.</span>
        </h2>
        <p className="section-reveal font-mono text-sm text-muted mb-16 max-w-xl">
          Three flagship projects spanning AI orchestration, data engineering, and cloud infrastructure.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {portfolio.projects.map((project, idx) => (
            <div
              key={project.title}
              className="section-reveal relative flex flex-col p-8 bg-bg border border-white/5 rounded-sm hover:border-accent/25 transition-all duration-400 group hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 100}ms` }}
              data-hover
            >
              {/* Number */}
              <div
                className="absolute top-6 right-8 font-display font-extrabold text-white/[0.04] select-none"
                style={{ fontSize: "80px", lineHeight: 1 }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Type badge */}
              <div className="mb-6">
                <span
                  className={`inline-block text-[10px] font-mono uppercase tracking-widest px-3 py-1 border rounded-sm ${
                    typeColors[project.type] || "text-muted border-white/10"
                  }`}
                >
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-[#E8E8F2] mb-4 group-hover:text-accent transition-colors duration-300" style={{ letterSpacing: "-0.01em" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs text-muted leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Impact callout */}
              <div className="mb-6 p-3 border-l-2 border-accent/40 bg-accent/5">
                <p className="text-xs font-mono text-accent/80 italic">{project.impact}</p>
              </div>

              {/* Metrics */}
              <ul className="space-y-1.5 mb-6">
                {project.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="text-accent">✓</span>
                    {m}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wide text-muted bg-white/[0.04] px-2.5 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
