"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/app/data/skills";
import { Cpu, Database, Cloud, Terminal, ShieldCheck, Activity } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const categoryIcons = [Cpu, Activity, Cloud, Terminal, Database, ShieldCheck];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 md:py-36 bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* ── Section Label & Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block w-fit">05 · Technical Competencies</span>
          <h2
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Engineering Stack & <br />
            <span className="text-gradient-multi">Technical Depth</span>
          </h2>
          <p className="text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Battle-tested technologies and frameworks used across enterprise microservices, streaming pipelines, cloud infrastructure, and multi-agent AI.
          </p>
        </motion.div>

        {/* ── 3D Skills Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <TiltCard
                  glowColor={cat.color}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scaleOnHover={1.03}
                  className="h-full"
                >
                  <div className="glass rounded-2xl p-6 border border-[var(--color-border)] flex flex-col justify-between h-full bg-[var(--color-surface)]/70 backdrop-blur-xl group">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: `${cat.color}15`,
                            borderColor: `${cat.color}40`,
                            color: cat.color,
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-[var(--color-text)] group-hover:text-white transition-colors">
                            {cat.category}
                          </h3>
                          <span className="text-[10px] font-mono text-[var(--color-muted)] uppercase tracking-wider">
                            {cat.items.length} Production Technologies
                          </span>
                        </div>
                      </div>

                      {/* Skill Items */}
                      <div className="space-y-3">
                        {cat.items.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ x: 4, scale: 1.01 }}
                            className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-surface2)]/60 border border-[var(--color-border)] hover:border-white/20 transition-all cursor-default"
                          >
                            <span className="text-sm font-medium text-[var(--color-text)] font-sans">{skill.name}</span>
                            <span
                              className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border shadow-sm"
                              style={{
                                backgroundColor: `${cat.color}15`,
                                borderColor: `${cat.color}35`,
                                color: cat.color,
                              }}
                            >
                              {skill.level}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
