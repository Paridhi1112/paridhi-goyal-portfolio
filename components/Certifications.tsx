"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/app/data/index";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="py-24 md:py-32 bg-[var(--color-bg)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-6 block w-fit">06 · Verified Expertise</span>
          <h2
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Professional <br />
            <span className="text-gradient-emerald">Certifications</span>
          </h2>
        </motion.div>

        {/* ── Grid ────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-hover glass rounded-2xl p-6 border border-[var(--color-border)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${cert.badgeColor}15`,
                      borderColor: `${cert.badgeColor}30`,
                      color: cert.badgeColor,
                    }}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[var(--color-muted)]">{cert.issueDate}</span>
                </div>

                <h3 className="font-display font-bold text-[var(--color-text)] text-lg mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[#00FFA3] mb-4">{cert.issuer}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--color-surface2)] text-[var(--color-subtle)] border border-[var(--color-border)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between pt-4 border-t border-[var(--color-border)] text-xs font-mono text-[var(--color-subtle)] hover:text-[#00FFA3] transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
