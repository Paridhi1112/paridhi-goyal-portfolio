"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { githubStats, siteConfig } from "@/app/data/index";
import { ExternalLink, GitCommit, Flame, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";

export default function GithubStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="py-28 md:py-36 bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#00FFA3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

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
          <p className="text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Real-time open source contributions, repository activity, and engineering commit patterns.
          </p>
        </motion.div>

        {/* ── 3D GitHub Dashboard Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column Stats Cards */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TiltCard glowColor="#00FFA3" tiltMaxAngleX={10} tiltMaxAngleY={10} scaleOnHover={1.03}>
                <div className="glass rounded-2xl p-6 border border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]/80 backdrop-blur-xl group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00FFA3]/15 border border-[#00FFA3]/30 flex items-center justify-center text-[#00FFA3] shadow-md group-hover:scale-110 transition-transform">
                      <GitCommit className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-[var(--color-text)] group-hover:text-[#00FFA3] transition-colors">
                        {githubStats.totalContributions}
                      </div>
                      <div className="text-xs font-mono text-[var(--color-muted)]">Total Yearly Contributions</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TiltCard glowColor="#F59E0B" tiltMaxAngleX={10} tiltMaxAngleY={10} scaleOnHover={1.03}>
                <div className="glass rounded-2xl p-6 border border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]/80 backdrop-blur-xl group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-110 transition-transform">
                      <Flame className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-[var(--color-text)] group-hover:text-amber-400 transition-colors">
                        {githubStats.currentStreak}
                      </div>
                      <div className="text-xs font-mono text-[var(--color-muted)]">Active Commit Streak</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TiltCard glowColor="#38BDF8" tiltMaxAngleX={10} tiltMaxAngleY={10} scaleOnHover={1.03}>
                <div className="glass rounded-2xl p-6 border border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]/80 backdrop-blur-xl group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shadow-md group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-mono text-[var(--color-text)] group-hover:text-[#38BDF8] transition-colors">
                        {githubStats.publicRepos}
                      </div>
                      <div className="text-xs font-mono text-[var(--color-muted)]">Public Repositories</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Right Column GitHub Matrix & Languages */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TiltCard glowColor="#00FFA3" tiltMaxAngleX={8} tiltMaxAngleY={8} scaleOnHover={1.01}>
                <div className="glass rounded-3xl p-7 border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-6 h-6 text-[#00FFA3]" />
                      <h3 className="font-display font-bold text-xl text-[var(--color-text)]">
                        @{githubStats.username}
                      </h3>
                    </div>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-mono font-bold text-[#00FFA3] hover:underline uppercase tracking-wider"
                    >
                      View Profile <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Language Stack */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-mono text-[var(--color-muted)] mb-2">
                      <span>Language Distribution</span>
                      <span>Primary Stack</span>
                    </div>
                    <div className="h-3.5 w-full rounded-full bg-[var(--color-surface2)] overflow-hidden flex shadow-inner">
                      {githubStats.topLanguages.map((lang) => (
                        <div
                          key={lang.name}
                          style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                          className="h-full transition-all duration-500 hover:brightness-125"
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

                  {/* Contribution Matrix Grid */}
                  <div className="p-4 rounded-2xl bg-[var(--color-surface2)]/60 border border-[var(--color-border)] overflow-x-auto">
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--color-muted)] mb-3 min-w-[500px]">
                      <span>Contribution Matrix</span>
                      <span>Active Shipping Calendar</span>
                    </div>
                    <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[500px] h-28">
                      {Array.from({ length: 364 }).map((_, i) => {
                        const intensity = (i * 7 + (i % 5)) % 4;
                        const colors = [
                          "bg-[var(--color-surface2)]",
                          "bg-[#00FFA3]/25 hover:bg-[#00FFA3]/40",
                          "bg-[#00FFA3]/60 hover:bg-[#00FFA3]/80",
                          "bg-[#00FFA3] hover:brightness-125",
                        ];
                        return (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.5, zIndex: 10 }}
                            className={`w-2.5 h-2.5 rounded-sm ${colors[intensity]} transition-all cursor-pointer`}
                          />
                        );
                      })}
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
