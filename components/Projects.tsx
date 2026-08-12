"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/app/data/projects";
import { ExternalLink, Play, Layers, X, CheckCircle2, ArrowRight, ShieldAlert, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & LLMs", "Data Engineering"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 md:py-36 bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00FFA3]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* ── Section Label & Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-label mb-6 block w-fit">03 · Featured Engineering Projects</span>
            <h2
              className="font-display font-bold text-[var(--color-text)] leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Systems, Agents & <br />
              <span className="text-gradient-multi">Data Architecture</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] p-1.5 rounded-2xl w-fit backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#00FFA3] text-black font-bold shadow-[0_0_20px_rgba(0,255,163,0.4)] scale-[1.03]"
                    : "text-[var(--color-subtle)] hover:text-[var(--color-text)] hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── 3D Interactive Projects Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard
                glowColor={project.category === "AI & LLMs" ? "#38BDF8" : "#00FFA3"}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scaleOnHover={1.02}
                className="h-full"
              >
                <div className="glass rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col justify-between h-full bg-[var(--color-surface)]/70 backdrop-blur-xl group">
                  <div className="p-7">
                    {/* Header Badge & Action Icons */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--color-surface2)] text-[#00FFA3] border border-[var(--color-border)] font-semibold shadow-sm">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                            title="Watch Video Demo"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-[var(--color-surface2)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:bg-white/[0.05] transition-colors"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-display font-bold text-[var(--color-text)] text-2xl mb-2 group-hover:text-[#00FFA3] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[var(--color-subtle)] mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-xl bg-[var(--color-surface2)]/80 border border-[var(--color-border)] text-center group-hover:border-[#00FFA3]/30 transition-colors"
                        >
                          <div className="text-xs font-bold font-mono text-[#00FFA3] truncate">{m.value}</div>
                          <div className="text-[10px] font-mono text-[var(--color-muted)] truncate mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[var(--color-bg)] text-[var(--color-subtle)] border border-[var(--color-border)] group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="px-7 py-4 border-t border-[var(--color-border)] bg-[var(--color-surface2)]/40 flex items-center justify-between group-hover:bg-[#00FFA3]/10 transition-colors cursor-pointer"
                  >
                    <button className="flex items-center gap-2 text-xs font-mono font-bold text-[#00FFA3] uppercase tracking-wider">
                      <Layers className="w-4 h-4" /> Architecture Case Study
                    </button>
                    <ArrowRight className="w-4 h-4 text-[#00FFA3] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ── IMMERSIVE ARCHITECTURE CASE STUDY MODAL ───────────────────── */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-xl"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] glass rounded-3xl border border-[#00FFA3]/30 bg-[var(--color-bg)] overflow-y-auto z-10 shadow-[0_0_50px_rgba(0,255,163,0.15)] p-6 sm:p-10 text-[var(--color-text)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-[var(--color-surface2)] text-[var(--color-subtle)] hover:text-white hover:bg-red-500/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="section-label">{selectedProject.category}</span>
                    <span className="text-xs font-mono text-[var(--color-muted)]">• Deep Architecture Inspection</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--color-text)] mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-base text-[var(--color-subtle)]">{selectedProject.subtitle}</p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#00FFA3] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_25px_rgba(0,255,163,0.4)] hover:scale-105 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" /> View Source Code
                    </a>
                    {selectedProject.videoUrl && (
                      <a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 border border-red-500/40 text-red-400 font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-red-500/10 transition-colors"
                      >
                        <Play className="w-4 h-4 fill-current" /> Watch Video Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                    <div className="flex items-center gap-2 text-red-400 font-mono font-bold text-xs uppercase tracking-wider mb-3">
                      <ShieldAlert className="w-4 h-4" /> Problem Statement
                    </div>
                    <p className="text-sm text-[var(--color-subtle)] leading-relaxed">{selectedProject.problem}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-2 text-[#00FFA3] font-mono font-bold text-xs uppercase tracking-wider mb-3">
                      <CheckCircle2 className="w-4 h-4" /> Engineered Solution
                    </div>
                    <p className="text-sm text-[var(--color-subtle)] leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* System Architecture DAG Flow */}
                <div className="mb-10 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#00FFA3]" /> System Architecture DAG & Control Flow
                  </h4>
                  <p className="text-xs text-[var(--color-muted)] font-mono mb-6">
                    {selectedProject.architectureDescription}
                  </p>

                  {/* Flow Nodes */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {selectedProject.architectureNodes.map((node, nIdx) => (
                      <div key={nIdx} className="flex items-center gap-3">
                        <div className="px-4 py-2.5 rounded-xl bg-[var(--color-surface2)] border border-[#00FFA3]/30 font-mono text-xs font-semibold text-[#00FFA3] shadow-md">
                          {node}
                        </div>
                        {nIdx < selectedProject.architectureNodes.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-[#38BDF8] shrink-0 animate-pulse" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Challenges & Solutions */}
                <div className="mb-10">
                  <h4 className="font-display font-bold text-xl mb-4">Engineering Challenges & Solutions</h4>
                  <div className="space-y-4">
                    {selectedProject.challenges.map((c, cIdx) => (
                      <div key={cIdx} className="p-5 rounded-2xl glass border border-[var(--color-border)] space-y-2">
                        <div className="text-xs font-mono font-bold text-red-400">Challenge #{cIdx + 1}: {c.problem}</div>
                        <div className="text-sm text-[var(--color-subtle)]">
                          <span className="text-[#00FFA3] font-mono font-bold">Solution: </span> {c.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="p-6 rounded-2xl bg-[var(--color-surface2)] border border-[var(--color-border)]">
                  <h4 className="font-display font-bold text-lg mb-3">Architectural Takeaways</h4>
                  <ul className="space-y-2">
                    {selectedProject.lessonsLearned.map((l, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-sm text-[var(--color-subtle)]">
                        <span className="text-[#00FFA3] font-mono font-bold">✓</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
