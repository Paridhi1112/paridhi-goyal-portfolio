"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { githubStats, siteConfig } from "@/app/data/index";
import { ExternalLink, GitCommit, Flame, Code, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function GithubStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="py-28 md:py-36 bg-[var(--color-bg)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* ── Section Label & Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block w-fit">04 · Code Telemetry</span>
          <h2
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Open Source & <br />
            <span className="text-gradient-emerald">GitHub Activity</span>
          </h2>
          <p className="text-base text-[var(--color-muted)] max-w-2xl">
            Real-time open source contributions, repository activity, and engineering commit patterns.
          </p>
        </motion.div>

        {/* ── GitHub Dashboard Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Stats Cards */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6 border border-[var(--color-border)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00FFA3]/10 border border-[#00FFA3]/20 flex items-center justify-center text-[#00FFA3]">
                  <GitCommit className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--color-text)]">{githubStats.totalContributions}</div>
                  <div className="text-xs font-mono text-[var(--color-muted)]">Total Yearly Contributions</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 border border-[var(--color-border)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--color-text)]">{githubStats.currentStreak}</div>
                  <div className="text-xs font-mono text-[var(--color-muted)]">Active Commit Streak</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-6 border border-[var(--color-border)] flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[var(--color-text)]">{githubStats.publicRepos}</div>
                  <div className="text-xs font-mono text-[var(--color-muted)]">Public Repositories</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right GitHub Graph & Languages */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-7 border border-[var(--color-border)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-[#00FFA3]" />
                  <h3 className="font-display font-bold text-lg text-[var(--color-text)]">
                    @{githubStats.username}
                  </h3>
                </div>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#00FFA3] hover:underline"
                >
                  View Profile <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Language Distribution Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-mono text-[var(--color-muted)] mb-2">
                  <span>Language Distribution</span>
                  <span>Primary Stack</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[var(--color-surface2)] overflow-hidden flex">
                  {githubStats.topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      className="h-full transition-all duration-500"
                      title={`${lang.name}: ${lang.percentage}%`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-3">
                  {githubStats.topLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-subtle)]">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span>{lang.name}</span>
                      <span className="text-[var(--color-muted)]">({lang.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contribution Activity Grid Image (fallback/styled element) */}
              <div className="p-4 rounded-xl bg-[var(--color-surface2)]/50 border border-[var(--color-border)] overflow-x-auto">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-muted)] mb-3 min-w-[500px]">
                  <span>Contribution Matrix</span>
                  <span>Active Shipping Calendar</span>
                </div>
                {/* Simulated Heatmap Blocks */}
                <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[500px] h-28">
                  {Array.from({ length: 364 }).map((_, i) => {
                    const intensity = (i * 7 + (i % 5)) % 4;
                    const colors = [
                      "bg-[var(--color-surface2)]",
                      "bg-[#00FFA3]/20",
                      "bg-[#00FFA3]/50",
                      "bg-[#00FFA3]",
                    ];
                    return (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-sm ${colors[intensity]} transition-colors`}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
