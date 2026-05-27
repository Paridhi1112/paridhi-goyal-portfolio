"use client";

import { useEffect, useRef } from "react";
import { portfolio } from "@/app/data";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".section-reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Email", value: portfolio.email, href: `mailto:${portfolio.email}` },
    { label: "LinkedIn", value: "paridhigoyal11", href: portfolio.linkedin },
    { label: "GitHub", value: "Paridhi1112", href: portfolio.github },
    { label: "LeetCode", value: "paridhi11", href: portfolio.leetcode },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,255,163,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-reveal mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-accent block" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2
              className="section-reveal font-display font-extrabold mb-6"
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
              }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-accent">remarkable.</span>
            </h2>

            <p
              className="section-reveal font-mono text-sm text-muted leading-relaxed mb-10"
              style={{ transitionDelay: "80ms", maxWidth: "420px" }}
            >
              I&apos;m actively looking for full-time Software Engineering and
              Data Engineering roles across the US — onsite, hybrid, or remote.
              Based in Dallas, TX and open to relocation. If you&apos;re working
              on hard problems in distributed systems, AI/ML applications, or
              cloud-native infrastructure — let&apos;s talk.
            </p>

            <a
              className="section-reveal inline-block px-8 py-4 bg-accent text-bg font-mono text-xs uppercase tracking-widest font-medium rounded-sm hover:shadow-[0_0_60px_rgba(0,255,163,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              href={`mailto:${portfolio.email}`}
              style={{ transitionDelay: "160ms" }}
            >
              Send an Email →
            </a>
          </div>

          {/* Right — links */}
          <div className="space-y-3">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="section-reveal flex items-center justify-between p-6 bg-surface border border-white/5 rounded-sm hover:border-accent/30 hover:bg-accent/5 group transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
                data-hover
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted mb-1">
                    {l.label}
                  </div>
                  <div className="font-mono text-sm text-subtle group-hover:text-accent transition-colors duration-300">
                    {l.value}
                  </div>
                </div>
                <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-lg">
                  →
                </span>
              </a>
            ))}

            {/* Location + availability */}
            <div
              className="section-reveal flex items-start gap-3 px-6 py-4 bg-surface border border-white/5 rounded-sm"
              style={{ transitionDelay: "240ms" }}
            >
              <span className="text-accent text-sm mt-0.5">📍</span>
              <div>
                <p className="text-xs font-mono text-subtle">
                  Dallas, TX
                </p>
                <p className="text-xs font-mono text-muted mt-0.5">
                  Available for onsite, hybrid, and remote roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
