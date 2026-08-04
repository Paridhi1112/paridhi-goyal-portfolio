"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about, siteConfig } from "@/app/data/index";
import { Cpu, Eye, Bot, MapPin } from "lucide-react";

const philosophyIcons = [Cpu, Eye, Bot];

const stagger = { container: { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-36 bg-[var(--color-bg)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="section-label mb-6 block w-fit">
            01 · About
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Engineering at the
            <br />
            <span className="text-gradient-multi">intersection of scale & intelligence</span>
          </motion.h2>
        </motion.div>

        {/* ── Two-column: Narrative + Card ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">

          {/* Left: Paragraphs */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3 space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base md:text-lg text-[var(--color-subtle)] leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: MapPin, label: siteConfig.location },
                { icon: Cpu, label: "MS IT · RPI · 3.93 GPA" },
                { icon: Bot, label: "AWS Certified Developer" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-subtle)]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00FFA3]" /> {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Engineering DNA card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 glass rounded-2xl p-6 border border-[var(--color-border)]"
          >
            <p className="section-label mb-4 block w-fit">Engineering DNA</p>

            {[
              { layer: "AI Applications", value: "Multi-Agent LLM Systems", color: "#A78BFA" },
              { layer: "Distributed Systems", value: "Kafka · NiFi · Event Streaming", color: "#38BDF8" },
              { layer: "Cloud Infrastructure", value: "AWS · K8s · OIC · Docker", color: "#F97316" },
              { layer: "Backend Services", value: "Java · Spring Boot · Python", color: "#00FFA3" },
              { layer: "Data Platforms", value: "SQL Server · Redis · Supabase", color: "#34D399" },
            ].map((row, i) => (
              <div key={row.layer} className="flex items-start gap-3 py-3 border-b border-[var(--color-border)] last:border-0">
                <div
                  className="mt-1 w-1 h-12 rounded-full flex-shrink-0 opacity-70"
                  style={{ background: row.color }}
                />
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-muted)] mb-0.5">
                    {row.layer}
                  </div>
                  <div className="text-sm font-medium text-[var(--color-text)]">
                    {row.value}
                  </div>
                </div>
                <div
                  className="ml-auto text-lg font-mono font-bold"
                  style={{ color: row.color }}
                >
                  L{i + 1}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Engineering Philosophy ─────────────────────────────────────── */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <h3 className="font-display font-bold text-[var(--color-text)] text-2xl md:text-3xl">
              Engineering Philosophy
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {about.philosophy.map((item, i) => {
              const Icon = philosophyIcons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="card-hover glass rounded-2xl p-6 border border-[var(--color-border)] cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00FFA3]/10 border border-[#00FFA3]/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00FFA3]" />
                  </div>
                  <h4 className="font-display font-bold text-[var(--color-text)] text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
