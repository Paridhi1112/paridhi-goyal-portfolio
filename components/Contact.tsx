"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/app/data/index";
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";
import TiltCard from "@/components/TiltCard";
import ParticleNetwork from "@/components/ParticleNetwork";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* Interactive Particle Network Canvas */}
      <ParticleNetwork />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* ── Section Label & Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block w-fit">08 · Get In Touch</span>
          <h2
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Let&apos;s Build <br />
            <span className="text-gradient-emerald">Something Impactful</span>
          </h2>
          <p className="text-base text-[var(--color-muted)] max-w-xl leading-relaxed">
            Currently open to Software Development Engineer (SDE-1) roles in Backend Engineering, Distributed Systems, and AI Applications.
          </p>
        </motion.div>

        {/* ── Two Column Layout ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Info & Copy Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Copy Card */}
            <TiltCard glowColor="#00FFA3" tiltMaxAngleX={8} tiltMaxAngleY={8} scaleOnHover={1.02}>
              <div className="glass rounded-2xl p-7 border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl">
                <span className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-wider block mb-3">
                  Direct Email Channel
                </span>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] mb-4">
                  <span className="font-mono text-sm font-semibold text-[#00FFA3] truncate">
                    {siteConfig.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#00FFA3]/15 text-[#00FFA3] hover:bg-[#00FFA3] hover:text-black transition-all shrink-0 font-mono text-xs"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-[var(--color-muted)] font-mono">
                  {copied ? "✓ Copied to clipboard!" : "Click button to copy email address directly"}
                </p>
              </div>
            </TiltCard>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <TiltCard glowColor="#00FFA3" tiltMaxAngleX={10} tiltMaxAngleY={10} scaleOnHover={1.03}>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-5 border border-[var(--color-border)] flex flex-col justify-between h-full bg-[var(--color-surface)]/80 backdrop-blur-xl group block"
                >
                  <LinkedinIcon className="w-7 h-7 text-[#00FFA3] mb-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text)] group-hover:text-[#00FFA3] transition-colors">LinkedIn</div>
                    <div className="text-xs font-mono text-[var(--color-muted)] flex items-center gap-1 mt-0.5">
                      Connect <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </TiltCard>

              <TiltCard glowColor="#38BDF8" tiltMaxAngleX={10} tiltMaxAngleY={10} scaleOnHover={1.03}>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-5 border border-[var(--color-border)] flex flex-col justify-between h-full bg-[var(--color-surface)]/80 backdrop-blur-xl group block"
                >
                  <GithubIcon className="w-7 h-7 text-[#38BDF8] mb-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text)] group-hover:text-[#38BDF8] transition-colors">GitHub</div>
                    <div className="text-xs font-mono text-[var(--color-muted)] flex items-center gap-1 mt-0.5">
                      Explore Code <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </TiltCard>
            </div>

            {/* Location & Status */}
            <div className="glass rounded-2xl p-6 border border-[var(--color-border)] space-y-3 bg-[var(--color-surface)]/80 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-subtle)]">
                <MapPin className="w-4 h-4 text-[#00FFA3]" /> {siteConfig.location}
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-subtle)]">
                <Phone className="w-4 h-4 text-[#00FFA3]" /> {siteConfig.phone}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <TiltCard glowColor="#00FFA3" tiltMaxAngleX={6} tiltMaxAngleY={6} scaleOnHover={1.01}>
              <div className="glass rounded-3xl p-8 border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#00FFA3]/15 border border-[#00FFA3]/30 text-[#00FFA3] flex items-center justify-center mx-auto text-3xl font-bold shadow-[0_0_25px_rgba(0,255,163,0.3)]">
                      ✓
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[var(--color-text)]">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. I will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-[var(--color-surface2)] text-xs font-mono text-[#00FFA3] border border-[var(--color-border)] hover:bg-[#00FFA3] hover:text-black transition-all shadow-md font-bold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-[var(--color-subtle)] uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Ada Lovelace"
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[#00FFA3] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-[var(--color-subtle)] uppercase tracking-wider mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="ada@example.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[#00FFA3] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--color-subtle)] uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="SDE Opportunity / Technical Inquiry"
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[#00FFA3] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--color-subtle)] uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Hi Paridhi, I saw your work on ClaimArmor AI and would love to chat..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--color-surface2)] border border-[var(--color-border)] text-sm text-[var(--color-text)] focus:outline-none focus:border-[#00FFA3] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#00FFA3] text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,163,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
