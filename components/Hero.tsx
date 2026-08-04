"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/index";
import { ArrowUpRight, Mail, MapPin, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* ── Background 3D R3F scene ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* ── Ambient blobs ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #00FFA3 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 w-fit"
          >
            <span className="section-label">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00FFA3]" />
              </span>
              Open to SDE Roles · Distributed Systems & AI
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <p className="text-sm font-mono text-[var(--color-muted)] uppercase tracking-[0.2em] mb-2">
              Hi, I&apos;m
            </p>
            <h1 className="font-display font-bold leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              <span className="text-[var(--color-text)]">Paridhi</span>
              {" "}
              <span className="text-gradient-emerald">Goyal</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[var(--color-subtle)] mb-4"
          >
            Software Development Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-[var(--color-muted)] max-w-xl leading-relaxed mb-10"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 bg-[#00FFA3] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(0,255,163,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore Projects <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md"
            >
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md"
            >
              <Mail className="w-3.5 h-3.5" /> Contact
            </a>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-[var(--color-border)]"
          >
            {[
              { label: "99.9% API Uptime", sub: "Oracle/GE production" },
              { label: "50% Efficiency Gain", sub: "NiFi + Kafka pipelines" },
              { label: "3.93 GPA — RPI", sub: "MS in IT · Graduate TA" },
              { label: "AWS Certified", sub: "Developer Associate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-sm font-bold text-[#00FFA3] font-mono">{stat.label}</div>
                <div className="text-[11px] text-[var(--color-muted)] font-mono uppercase tracking-wider">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-[380px]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#00FFA3]/10 rounded-2xl blur-2xl scale-110" />

            {/* Card */}
            <div className="relative glass rounded-2xl p-6 border border-[var(--color-border)]">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 pb-4 mb-5 border-b border-[var(--color-border)]">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-auto text-[11px] font-mono text-[var(--color-muted)]">profile.sys</span>
              </div>

              {/* Photo */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-5 border border-[var(--color-border)] bg-[var(--color-surface2)]">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={siteConfig.profileImage}
                    alt="Paridhi Goyal"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  // Engineering fallback avatar
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface2)] to-[var(--color-bg)]">
                    <div className="text-5xl mb-3">👩‍💻</div>
                    <p className="text-xs font-mono text-[#00FFA3]">Paridhi Goyal</p>
                    <p className="text-[10px] font-mono text-[var(--color-muted)] mt-0.5">SDE · Backend & AI</p>
                  </div>
                )}
                {/* Overlay tags */}
                <div className="absolute top-2 left-2 glass rounded-lg px-2.5 py-1 text-[10px] font-mono text-[var(--color-text)] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" /> Distributed Systems
                </div>
                <div className="absolute bottom-2 right-2 glass rounded-lg px-2.5 py-1 text-[10px] font-mono text-[var(--color-text)]">
                  ☁ AWS Certified
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-[var(--color-text)] text-xl">Paridhi Goyal</h3>
                <p className="text-xs font-mono text-[#00FFA3]">Software Development Engineer</p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] font-mono">
                  <MapPin className="w-3 h-3" /> {siteConfig.location}
                </div>
                <div className="pt-3 mt-3 border-t border-[var(--color-border)] text-[11px] font-mono text-[var(--color-muted)]">
                  Ex-Tech Mahindra (Oracle) · Ex-Accenture (GE) · MS RPI
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#00FFA3]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
