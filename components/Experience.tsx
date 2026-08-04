"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experience, education } from "@/app/data/experience";
import { ChevronDown, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-28 md:py-36 bg-[var(--color-bg)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
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
          <p className="text-base text-[var(--color-muted)] max-w-2xl">
            A track record of engineering backend microservices, real-time data pipelines, and distributed cloud integrations across Fortune 500 enterprises.
          </p>
        </motion.div>

        {/* ── Grid Layout: Experience Timeline + Education ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#00FFA3] via-[#38BDF8] to-[var(--color-border)] hidden md:block" />

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
                    className="absolute left-3.5 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[var(--color-bg)] flex items-center justify-center hidden md:flex"
                    style={{ backgroundColor: item.logoColor }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Card Container */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="card-hover glass rounded-2xl p-6 border border-[var(--color-border)] cursor-pointer transition-all duration-300"
                  >
                    {/* Top Row: Role, Company, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-bold text-sm shrink-0"
                          style={{ backgroundColor: item.logoColor }}
                        >
                          {item.logo}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-[var(--color-text)] text-lg sm:text-xl leading-snug">
                            {item.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--color-subtle)] mt-0.5">
                            <span className="font-semibold text-[var(--color-text)]">{item.company}</span>
                            {item.client && (
                              <>
                                <span>•</span>
                                <span className="text-[#00FFA3]">Client: {item.client}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Meta (Location, Period, Toggle) */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-[var(--color-muted)]">
                        <div className="text-left sm:text-right">
                          <div>{item.period}</div>
                          <div className="flex items-center sm:justify-end gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-[var(--color-subtle)]" />
                            {item.location}
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-subtle)]">
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
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--color-surface2)] text-[var(--color-subtle)] border border-[var(--color-border)]"
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
                                <span className="text-[#00FFA3] font-mono mt-1 text-xs">▹</span>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Education & Academic Leadership */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-6 border border-[var(--color-border)] space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--color-text)] text-lg">Education</h3>
                  <p className="text-xs font-mono text-[var(--color-muted)]">Academic Excellence & Leadership</p>
                </div>
              </div>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2 border-b border-[var(--color-border)] last:border-0 pb-5 last:pb-0">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#00FFA3]/10 text-[#00FFA3] font-semibold border border-[#00FFA3]/20">
                      GPA: {edu.gpa}
                    </span>
                    <span className="text-xs font-mono text-[var(--color-muted)]">{edu.period}</span>
                  </div>

                  <h4 className="font-display font-bold text-[var(--color-text)] text-base leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[var(--color-subtle)] font-medium">{edu.institution}</p>
                  <p className="text-xs font-mono text-[var(--color-muted)]">{edu.specialization}</p>

                  {edu.honors && (
                    <div className="flex items-start gap-1.5 pt-2 text-xs text-[#38BDF8] font-mono">
                      <Award className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{edu.honors}</span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
