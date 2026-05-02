"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/app/data";

const categoryAccent: Record<string, string> = {
  Languages: "accent",
  "Cloud & DevOps": "accent3",
  "Data & AI/ML": "accent2",
  "Full-Stack & Databases": "accent",
};

const categoryColor: Record<string, string> = {
  Languages: "#00FFA3",
  "Cloud & DevOps": "#FF6584",
  "Data & AI/ML": "#6C63FF",
  "Full-Stack & Databases": "#00FFA3",
};

export default function Skills() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="skills"
      className="py-28 px-6 md:px-12 lg:px-20 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-reveal mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-accent block" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            Skills
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
          The full stack,
          <br />
          <span className="text-accent">front to infra.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(portfolio.skills).map(([category, items], catIdx) => {
            const color = categoryColor[category] || "#00FFA3";
            return (
              <div
                key={category}
                className="section-reveal p-8 bg-bg border border-white/5 rounded-sm hover:border-white/10 transition-all duration-300"
                style={{ transitionDelay: `${catIdx * 90}ms` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span
                    className="text-xs font-mono uppercase tracking-widest font-medium"
                    style={{ color }}
                  >
                    {category}
                  </span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-subtle bg-white/[0.04] border border-white/5 px-3 py-1.5 rounded-sm hover:border-white/15 hover:text-[#E8E8F2] transition-all duration-200 cursor-default"
                      data-hover
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications full list */}
        <div className="section-reveal mt-8 p-8 bg-bg border border-white/5 rounded-sm" style={{ transitionDelay: "360ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent2" />
            <span className="text-xs font-mono uppercase tracking-widest text-accent2">
              Certifications
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolio.certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-2.5 p-3 bg-white/[0.02] border border-white/5 rounded-sm"
              >
                <span className="text-accent2 mt-0.5 shrink-0">◆</span>
                <span className="text-xs font-mono text-muted leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
