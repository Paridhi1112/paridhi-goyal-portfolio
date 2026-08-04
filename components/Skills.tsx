"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/app/data/skills";
import { Cpu, Database, Cloud, Terminal, ShieldCheck, Activity } from "lucide-react";

const categoryIcons = [Cpu, Activity, Cloud, Terminal, Database, ShieldCheck];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 md:py-36 bg-[var(--color-bg)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">

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
          <p className="text-base text-[var(--color-muted)] max-w-2xl">
            Battle-tested technologies and frameworks used across enterprise microservices, streaming pipelines, cloud infrastructure, and multi-agent AI.
          </p>
        </motion.div>

        {/* ── Skills Grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card-hover glass rounded-2xl p-6 border border-[var(--color-border)] flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border)]">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${cat.color}15`,
                        borderColor: `${cat.color}30`,
                        color: cat.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[var(--color-text)]">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-3">
                    {cat.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--color-surface2)]/50 border border-[var(--color-border)]"
                      >
                        <span className="text-sm font-medium text-[var(--color-text)]">{skill.name}</span>
                        <span
                          className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: `${cat.color}10`,
                            borderColor: `${cat.color}30`,
                            color: cat.color,
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
