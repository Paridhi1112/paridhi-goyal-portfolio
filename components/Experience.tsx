"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experience, education } from "@/app/data/experience";
import { ChevronDown, MapPin, Briefcase, GraduationCap, Award, Sparkles } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-28 md:py-36 bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00FFA3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* ── Section Label & Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block w-fit">02 · Career & Track Record</span>
          <h2
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Enterprise Scale & <br />
            <span className="text-gradient-emerald">Production Systems</span>
          </h2>
          <p className="text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
            A track record of engineering backend microservices, real-time data pipelines, and distributed cloud integrations across Fortune 500 enterprises.
          </p>
        </motion.div>

        {/* ── Grid Layout: Experience Timeline + Education ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-6 relative">
            {/* Animated Glowing Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#00FFA3] via-[#38BDF8] to-[#6C63FF] hidden md:block opacity-75 shadow-[0_0_12px_#00FFA3]" />

            {experience.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <motion.div
                  key={`${item.company}-${item.role}-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative md:pl-14"
                >
                  {/* Timeline Badge Dot */}
                  <div
                    className="absolute left-3.5 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[var(--color-bg)] flex items-center justify-center hidden md:flex shadow-[0_0_15px_rgba(0,255,163,0.5)] z-20"
                    style={{ backgroundColor: item.logoColor }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                  </div>

                  {/* 3D Tilt Card Container */}
                  <TiltCard
                    glowColor={item.logoColor}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    scaleOnHover={1.01}
                    onClick={() => toggleExpand(idx)}
                  >
                    <div className="glass rounded-2xl p-6 border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl group transition-all duration-300">
                      {/* Top Row: Role, Company, Period */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-mono font-bold text-base shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: item.logoColor }}
                          >
                            {item.logo}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-[var(--color-text)] text-lg sm:text-xl leading-snug group-hover:text-[#00FFA3] transition-colors">
                              {item.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--color-subtle)] mt-0.5">
                              <span className="font-semibold text-[var(--color-text)]">{item.company}</span>
                              {item.client && (
                                <>
                                  <span>•</span>
                                  <span className="text-[#00FFA3] font-semibold">Client: {item.client}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Right Meta (Location, Period, Toggle) */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-[var(--color-muted)]">
                          <div className="text-left sm:text-right">
                            <div className="text-[var(--color-text)] font-semibold">{item.period}</div>
                            <div className="flex items-center sm:justify-end gap-1 mt-0.5">
                              <MapPin className="w-3.5 h-3.5 text-[#00FFA3]" />
                              {item.location}
                            </div>
                          </div>
                          <div className="p-2 rounded-xl border border-[var(--color-border)] text-[var(--color-subtle)] group-hover:border-[#00FFA3]/40 group-hover:text-[#00FFA3] transition-colors">
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-[#00FFA3]" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[var(--color-surface2)] text-[var(--color-subtle)] border border-[var(--color-border)] group-hover:border-white/20 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Content (Highlights) */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-[var(--color-border)] space-y-2.5">
                              {item.highlights.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[var(--color-subtle)] leading-relaxed">
                                  <span className="text-[#00FFA3] font-mono mt-0.5 text-xs">▹</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Education & Academic Honors */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TiltCard glowColor="#38BDF8" tiltMaxAngleX={8} tiltMaxAngleY={8} scaleOnHover={1.02}>
                <div className="glass rounded-2xl p-6 border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl space-y-6">
                  <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[var(--color-text)] text-lg">Education</h3>
                      <p className="text-xs font-mono text-[var(--color-muted)]">Academic Excellence & Leadership</p>
                    </div>
                  </div>

                  {education.map((edu, idx) => (
                    <div key={idx} className="space-y-2.5 border-b border-[var(--color-border)] last:border-0 pb-5 last:pb-0">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#00FFA3]/15 text-[#00FFA3] font-bold border border-[#00FFA3]/30 shadow-sm">
                          GPA: {edu.gpa}
                        </span>
                        <span className="text-xs font-mono text-[var(--color-muted)]">{edu.period}</span>
                      </div>

                      <h4 className="font-display font-bold text-[var(--color-text)] text-base leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-[var(--color-subtle)] font-semibold">{edu.institution}</p>
                      <p className="text-xs font-mono text-[var(--color-muted)]">{edu.specialization}</p>

                      {edu.honors && (
                        <div className="flex items-start gap-1.5 pt-2 text-xs text-[#38BDF8] font-mono">
                          <Award className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{edu.honors}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
