"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/app/data";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 80);
          });
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = portfolio.experience;

  return (
    <section
      ref={ref}
      id="experience"
      className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <div className="section-reveal mb-3 flex items-center gap-3">
        <span className="w-8 h-px bg-accent block" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
          Experience
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
        Where I&apos;ve
        <br />
        <span
          style={{
            WebkitTextStroke: "1px rgba(232,232,242,0.3)",
            color: "transparent",
          }}
        >
          shipped
        </span>{" "}
        <span className="text-accent">production code.</span>
      </h2>

      <div className="grid lg:grid-cols-[280px_1fr] gap-12">
        {/* Company tabs */}
        <div className="section-reveal flex lg:flex-col gap-2">
          {exp.map((e, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group text-left px-4 py-4 rounded-sm border transition-all duration-200 ${
                active === i
                  ? "border-accent/40 bg-accent/5 text-accent"
                  : "border-white/5 text-muted hover:border-white/15 hover:text-subtle"
              }`}
            >
              <div className="font-display font-bold text-sm mb-0.5">{e.company}</div>
              {e.client && (
                <div className="text-xs font-mono text-muted">→ {e.client}</div>
              )}
              <div className={`text-[10px] font-mono mt-1 ${active === i ? "text-accent/60" : "text-muted/60"}`}>
                {e.period}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="section-reveal" style={{ transitionDelay: "80ms" }}>
          {exp[active] && (
            <div key={active} className="animate-fade-in">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-display font-extrabold text-2xl text-[#E8E8F2]" style={{ letterSpacing: "-0.01em" }}>
                    {exp[active].title}
                  </h3>
                  <span className="text-xs font-mono text-muted border border-white/10 px-2 py-0.5 rounded-sm">
                    {exp[active].type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-muted">
                  <span className="text-accent">{exp[active].company}</span>
                  {exp[active].client && <span>Client: {exp[active].client}</span>}
                  <span>{exp[active].location}</span>
                  <span>{exp[active].period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-4 mb-8">
                {exp[active].highlights.map((h, i) => (
                  <li key={i} className="flex gap-4 group/item">
                    <span className="text-accent mt-1 shrink-0 text-sm">›</span>
                    <p className="font-mono text-sm text-subtle leading-relaxed group-hover/item:text-[#E8E8F2] transition-colors duration-200">
                      {h}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="pt-6 border-t border-white/5">
                <div className="text-xs font-mono uppercase tracking-widest text-muted mb-3">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {exp[active].tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wide text-accent bg-accent/5 border border-accent/15 px-3 py-1.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Education timeline */}
      <div className="section-reveal mt-20 pt-16 border-t border-white/5">
        <div className="mb-6 flex items-center gap-3">
          <span className="w-6 h-px bg-accent2 block" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent2">
            Education
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.education.map((ed) => (
            <div
              key={ed.school}
              className="p-6 bg-surface border border-white/5 rounded-sm hover:border-accent2/25 transition-colors duration-300"
            >
              <div className="text-xs font-mono text-accent2 mb-3 uppercase tracking-widest">
                {ed.period}
              </div>
              <h4 className="font-display font-bold text-base text-[#E8E8F2] mb-1" style={{ letterSpacing: "-0.01em" }}>
                {ed.degree}
              </h4>
              {ed.focus && (
                <p className="text-xs font-mono text-muted mb-2">Focus: {ed.focus}</p>
              )}
              <p className="text-sm font-mono text-subtle mb-2">{ed.school}</p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-accent font-medium">GPA: {ed.gpa}</span>
                {ed.note && (
                  <span className="text-xs font-mono text-muted">· {ed.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
