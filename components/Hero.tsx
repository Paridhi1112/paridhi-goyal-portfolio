"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/data/index";
import { ArrowUpRight, Mail, MapPin, FileText, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import TiltCard from "@/components/TiltCard";
import FloatingBadges from "@/components/FloatingBadges";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* ── Background 3D R3F Canvas ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* ── Floating Tech Stack Badges ───────────────────────────────────── */}
      <FloatingBadges />

      {/* ── Ambient Glow Blobs ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-20 animate-pulse"
          style={{ background: "radial-gradient(circle, #00FFA3 0%, transparent 70%)", filter: "blur(90px)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[550px] h-[550px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)", filter: "blur(110px)" }}
        />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col">

          {/* Floating Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 w-fit"
          >
            <span className="section-label group hover:border-[#00FFA3] transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]" />
              </span>
              Open to SDE Roles · Distributed Systems & AI
            </span>
          </motion.div>

          {/* Name Header with 3D Depth Hover */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <p className="text-sm font-mono text-[var(--color-muted)] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00FFA3]" /> Hi, I&apos;m
            </p>
            <h1 className="font-display font-extrabold leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              <span className="text-[var(--color-text)]">Paridhi</span>{" "}
              <span className="text-gradient-emerald hover:brightness-125 transition-all">Goyal</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-[var(--color-subtle)] mb-4 flex items-center gap-2"
          >
            Software Development Engineer
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00FFA3]/10 text-[#00FFA3] font-mono border border-[#00FFA3]/30">
              MS RPI &apos;24
            </span>
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

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#00FFA3] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_35px_rgba(0,255,163,0.5)] transition-all"
            >
              Explore Projects <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,163,0.15)]"
            >
              <FileText className="w-4 h-4" /> Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,163,0.15)]"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,163,0.15)]"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 px-5 py-3.5 border border-[var(--color-border)] text-[var(--color-subtle)] hover:text-[#00FFA3] hover:border-[#00FFA3]/40 font-mono text-xs uppercase tracking-widest rounded-xl transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,255,163,0.15)]"
            >
              <Mail className="w-4 h-4" /> Contact
            </motion.a>
          </motion.div>

          {/* Quick Facts Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-[var(--color-border)]"
          >
            {[
              { label: "99.9% API Uptime", sub: "Oracle/GE production" },
              { label: "50% Efficiency Gain", sub: "NiFi + Kafka pipelines" },
              { label: "3.93 GPA — RPI", sub: "MS in IT · Graduate TA" },
              { label: "AWS Certified", sub: "Developer Associate" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-2 rounded-xl hover:bg-white/[0.03] transition-all cursor-default"
              >
                <div className="text-sm font-bold text-[#00FFA3] font-mono">{stat.label}</div>
                <div className="text-[11px] text-[var(--color-muted)] font-mono uppercase tracking-wider">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <TiltCard
            glowColor="#00FFA3"
            tiltMaxAngleX={16}
            tiltMaxAngleY={16}
            scaleOnHover={1.03}
            className="w-full max-w-[400px] rounded-3xl"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00FFA3]/20 via-[#38BDF8]/10 to-[#6C63FF]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

            {/* Inner Glass Card */}
            <div className="relative glass rounded-3xl p-6 border border-[var(--color-border)] bg-[var(--color-surface)]/80 shadow-2xl overflow-hidden">

              {/* Terminal Window Header */}
              <div className="flex items-center gap-2 pb-4 mb-5 border-b border-[var(--color-border)]">
                <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
                <span className="ml-auto text-[11px] font-mono text-[var(--color-muted)] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#00FFA3] animate-pulse" /> profile.sys
                </span>
              </div>

              {/* Photo Frame with 3D Pop Out */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 border border-[var(--color-border)] bg-[var(--color-surface2)] group/img shadow-inner">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={siteConfig.profileImage}
                    alt="Paridhi Goyal"
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  // Engineering Fallback Avatar
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface2)] to-[var(--color-bg)]">
                    <div className="text-6xl mb-3 animate-bounce">👩‍💻</div>
                    <p className="text-sm font-mono text-[#00FFA3] font-bold">Paridhi Goyal</p>
                    <p className="text-xs font-mono text-[var(--color-muted)] mt-1">SDE · Distributed Systems</p>
                  </div>
                )}

                {/* Floating Overlay 3D Tags */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-3 left-3 glass rounded-xl px-3 py-1.5 text-[10px] font-mono text-[var(--color-text)] flex items-center gap-1.5 border border-white/10 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-ping" />
                  Distributed Systems
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-3 right-3 glass rounded-xl px-3 py-1.5 text-[10px] font-mono text-[var(--color-text)] border border-white/10 shadow-lg"
                >
                  ☁ AWS Certified
                </motion.div>
              </div>

              {/* Info Details */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-[var(--color-text)] text-2xl">Paridhi Goyal</h3>
                  <span className="text-xs font-mono text-[#00FFA3] font-semibold px-2.5 py-0.5 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/30">
                    SDE
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--color-subtle)]">Software Development Engineer</p>
                <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#00FFA3]" /> {siteConfig.location}
                </div>
                <div className="pt-3 mt-3 border-t border-[var(--color-border)] text-[11px] font-mono text-[var(--color-muted)] flex items-center justify-between">
                  <span>Ex-Tech Mahindra (Oracle)</span>
                  <span className="text-[#38BDF8]">MS RPI</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

      </div>

      {/* 3D Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)] group-hover:text-[#00FFA3] transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-0.5 h-10 bg-gradient-to-b from-[#00FFA3] via-[#38BDF8] to-transparent rounded-full shadow-[0_0_10px_#00FFA3]"
        />
      </motion.div>
    </section>
  );
}
