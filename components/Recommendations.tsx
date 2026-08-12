"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { recommendations } from "@/app/data/index";
import { Quote, Star, UserCheck } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function Recommendations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="recommendations" className="py-28 md:py-36 bg-[var(--color-bg)] relative overflow-hidden" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00FFA3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">

        {/* ── Section Label & Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-6 block w-fit">07 · Social Proof</span>
          <h2
            className="font-display font-bold text-[var(--color-text)] leading-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Recommendations & <br />
            <span className="text-gradient-emerald">Peer Endorsements</span>
          </h2>
          <p className="text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Testimonials from engineering managers, enterprise cloud architects, and university faculty.
          </p>
        </motion.div>

        {/* ── 3D Recommendations Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard glowColor="#00FFA3" tiltMaxAngleX={10} tiltMaxAngleY={10} scaleOnHover={1.03} className="h-full">
                <div className="glass rounded-2xl p-7 border border-[var(--color-border)] flex flex-col justify-between h-full bg-[var(--color-surface)]/70 backdrop-blur-xl group">
                  <div>
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[#00FFA3]/15 border border-[#00FFA3]/30 flex items-center justify-center text-[#00FFA3] shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Quote className="w-5 h-5 fill-current" />
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm text-[var(--color-subtle)] leading-relaxed italic mb-8">
                      &ldquo;{rec.text}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-surface2)] border border-[var(--color-border)] flex items-center justify-center text-[#00FFA3] shadow-inner">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[var(--color-text)] group-hover:text-[#00FFA3] transition-colors">
                        {rec.name}
                      </h4>
                      <p className="text-xs font-mono text-[#00FFA3] font-semibold">{rec.title}</p>
                      <p className="text-[11px] font-mono text-[var(--color-muted)]">{rec.company}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
