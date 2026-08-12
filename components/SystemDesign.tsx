"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio, SystemDesignTopic } from "@/app/data";
import { Cpu, Server, Database, Layers, Radio, ShieldCheck, Activity, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import TiltCard from "@/components/TiltCard";

export default function SystemDesign() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>("event-driven-kafka");

  const activeTopic =
    portfolio.systemDesigns.find((t) => t.id === selectedTopicId) || portfolio.systemDesigns[0];

  return (
    <section id="system-design" className="py-28 px-6 md:px-12 lg:px-20 bg-[#090C14] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFA3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#00FFA3]/30 mb-4">
            <Cpu className="w-4 h-4 text-[#00FFA3] animate-pulse" />
            <span className="text-xs font-mono text-[#00FFA3] uppercase tracking-widest font-semibold">
              04 · Interactive System Design Visualizer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Distributed Systems Architecture
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-mono leading-relaxed">
            Interactive blueprints demonstrating high-throughput event streaming, distributed caching, and microservice ingress routing patterns.
          </p>
        </div>

        {/* System Architecture Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {portfolio.systemDesigns.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`px-5 py-3 rounded-xl border text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-[#00FFA3] text-black border-[#00FFA3] shadow-[0_0_25px_rgba(0,255,163,0.4)] scale-[1.03]"
                    : "bg-white/[0.03] text-gray-300 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <Radio className={`w-4 h-4 ${isSelected ? "text-black animate-pulse" : "text-[#00FFA3]"}`} />
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Architecture Visualizer Container with 3D Card Tilt */}
        <TiltCard glowColor="#00FFA3" tiltMaxAngleX={6} tiltMaxAngleY={6} scaleOnHover={1.01}>
          <div className="glass rounded-3xl border border-white/10 p-6 sm:p-10 relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl shadow-2xl">
            
            {/* Top System Health / Metrics Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/50 border border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#00FFA3]/10 text-[#00FFA3] border border-[#00FFA3]/20">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Throughput</span>
                  <span className="text-sm font-bold text-white font-mono">{activeTopic.throughput}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Target Latency</span>
                  <span className="text-sm font-bold text-white font-mono">{activeTopic.latency}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">Resilience SLA</span>
                  <span className="text-sm font-bold text-white font-mono">{activeTopic.resilience}</span>
                </div>
              </div>

              <div className="flex items-center md:justify-end">
                <span className="px-3.5 py-1.5 rounded-full bg-[#00FFA3]/10 text-[#00FFA3] text-xs font-mono font-semibold border border-[#00FFA3]/30 shadow-[0_0_15px_rgba(0,255,163,0.2)]">
                  ● Live Topology Engine
                </span>
              </div>
            </div>

            {/* Interactive Topology Graph */}
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#090D14] border border-white/10 min-h-[300px] flex flex-col justify-center">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
                Architecture Node Topology ({activeTopic.subtitle})
              </h4>

              {/* Nodes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {activeTopic.nodes.map((node) => (
                  <motion.div
                    key={node.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00FFA3]/40 transition-all flex flex-col justify-between group cursor-default hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#00FFA3] font-bold">
                        [{node.type.toUpperCase()}]
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-ping" />
                    </div>
                    <h5 className="text-sm font-bold text-white font-mono mb-1 group-hover:text-[#00FFA3] transition-colors">
                      {node.name}
                    </h5>
                    <p className="text-[11px] text-gray-400 leading-snug font-mono">
                      {node.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Data Flow Pipeline */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block mb-4">
                  Active Data Flow Sequence:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {activeTopic.flows.map((flow, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="px-3.5 py-2 rounded-xl bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-xs font-mono text-[#00FFA3] flex items-center gap-2 shadow-sm">
                        <span>{flow.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                        <span>{flow.to}</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 italic font-semibold">
                        ({flow.label})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Engineering Principles */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                Architectural Guarantees &amp; Trade-offs
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeTopic.keyHighlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3 hover:border-[#00FFA3]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#00FFA3] shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-300 leading-relaxed font-mono">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </TiltCard>
      </div>
    </section>
  );
}
