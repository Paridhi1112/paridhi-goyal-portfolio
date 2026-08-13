"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Clock, Zap, CheckCircle2, XCircle, ChevronRight, RotateCcw } from "lucide-react";

// ── Questions ─────────────────────────────────────────────────────────────────
interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  fact: string;
  category: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "At Accenture/GE, what tool did Paridhi use to achieve a 50% boost in data pipeline efficiency?",
    options: ["Apache Kafka", "Amazon SQS", "ActiveMQ", "RabbitMQ"],
    correct: "Apache Kafka",
    fact: "Apache Kafka + NiFi combination eliminated multi-hour batch processing bottlenecks, achieving 50K msg/sec.",
    category: "Distributed Systems",
  },
  {
    id: 2,
    question: "What is Paridhi's proficiency level with Apache NiFi?",
    options: ["Expert", "Advanced", "Intermediate", "Beginner"],
    correct: "Expert",
    fact: "Paridhi used Apache NiFi extensively at Accenture/GE for real-time streaming data pipelines across 5 production envs.",
    category: "Backend Engineering",
  },
  {
    id: 3,
    question: "Which encryption standard protects Paridhi's Oracle payment processing workflows?",
    options: ["PGP Encryption", "AES-256-GCM", "RSA-4096", "Triple DES"],
    correct: "PGP Encryption",
    fact: "Custom Java PGP decryption libraries process 100K+ encrypted payment records monthly at 99.9% accuracy.",
    category: "Security",
  },
  {
    id: 4,
    question: "What caching pattern improved Paridhi's Oracle ERP API throughput by 30%?",
    options: ["Cache-Aside with Redis", "Write-Through with Memcached", "Read-Through with Hazelcast", "CQRS with Postgres"],
    correct: "Cache-Aside with Redis",
    fact: "Redis Cache-Aside pattern with async thread pooling and query optimization drove the 30% throughput gain.",
    category: "System Design",
  },
  {
    id: 5,
    question: "Which Kubernetes feature did Paridhi configure to autoscale payment microservices from 3 to 15 pods?",
    options: ["Horizontal Pod Autoscaler", "Vertical Pod Autoscaler", "ReplicaSet scaling", "DaemonSet rollout"],
    correct: "Horizontal Pod Autoscaler",
    fact: "HPA triggered on CPU/memory thresholds during peak payment settlement hours on Oracle Kubernetes Engine (OKE).",
    category: "Cloud & DevOps",
  },
  {
    id: 6,
    question: "What is Paridhi's GPA from her Master's program at Rensselaer Polytechnic Institute?",
    options: ["3.93 / 4.0", "4.0 / 4.0", "3.75 / 4.0", "3.85 / 4.0"],
    correct: "3.93 / 4.0",
    fact: "Paridhi maintained a 3.93 GPA at RPI while serving as Graduate Teaching Assistant for Statistical Methods.",
    category: "Education",
  },
  {
    id: 7,
    question: "What AI orchestration pattern powers Paridhi's multi-agent research assistant?",
    options: ["Async DAG with Redis Pub/Sub", "Synchronous REST chain", "Round-robin LLM dispatch", "Monolithic prompt pipeline"],
    correct: "Async DAG with Redis Pub/Sub",
    fact: "FastAPI + Redis Pub/Sub orchestrates 5 parallel LLM worker agents, cutting research synthesis time by 70%.",
    category: "AI & LLMs",
  },
  {
    id: 8,
    question: "In Apache Kafka, what mechanism ensures exactly-once semantics during consumer group rebalancing?",
    options: ["Consumer Offsets", "Topic Partitions", "Broker Replication", "Schema Registry"],
    correct: "Consumer Offsets",
    fact: "Committed consumer offsets ensure at-least-once delivery — a core design in Paridhi's GE event pipeline.",
    category: "Distributed Systems",
  },
];

// ── Badge config ───────────────────────────────────────────────────────────────
function getBadge(score: number, total: number) {
  const pct = score / total;
  if (pct === 1)   return { label: "Backend Architect", emoji: "🏆", color: "#00FFA3", glow: "rgba(0,255,163,0.4)" };
  if (pct >= 0.75) return { label: "Senior Engineer",   emoji: "⚡", color: "#A78BFA", glow: "rgba(167,139,250,0.4)" };
  if (pct >= 0.5)  return { label: "Mid-Level Engineer", emoji: "💻", color: "#38BDF8", glow: "rgba(56,189,248,0.4)" };
  return              { label: "Apprentice Dev",        emoji: "🔧", color: "#F97316", glow: "rgba(249,115,22,0.4)" };
}

// ── Timer ring ─────────────────────────────────────────────────────────────────
function TimerRing({ timeLeft, max = 12 }: { timeLeft: number; max?: number }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const progress = timeLeft / max;
  const color = timeLeft <= 3 ? "#EF4444" : timeLeft <= 6 ? "#F59E0B" : "#00FFA3";
  return (
    <svg width="60" height="60" className="rotate-[-90deg]">
      <circle cx="30" cy="30" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      <circle
        cx="30" cy="30" r={r} fill="none"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - progress)}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.9s linear, stroke 0.3s" }}
      />
      <text
        x="30" y="30"
        textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize="14" fontWeight="bold" fontFamily="monospace"
        style={{ transform: "rotate(90deg)", transformOrigin: "30px 30px" }}
      >
        {timeLeft}
      </text>
    </svg>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
type Phase = "idle" | "playing" | "answer" | "results";

interface Props { isOpen: boolean; onClose: () => void }

export default function SkillsQuizGame({ isOpen, onClose }: Props) {
  const [phase, setPhase]         = useState<Phase>("idle");
  const [qIndex, setQIndex]       = useState(0);
  const [score, setScore]         = useState(0);
  const [streak, setStreak]       = useState(0);
  const [selected, setSelected]   = useState<string | null>(null);
  const [timeLeft, setTimeLeft]   = useState(12);
  const [shuffledQ, setShuffledQ] = useState<Question[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Shuffle + start ─────────────────────────────────────────────────────────
  const startGame = useCallback(() => {
    const q = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQ(q);
    setQIndex(0);
    setScore(0);
    setStreak(0);
    setSelected(null);
    setTimeLeft(12);
    setPhase("playing");
  }, []);

  // ── Timer ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "playing") {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setPhase("answer");
          setSelected("__timeout__");
          setStreak(0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, qIndex]);

  // ── Answer ──────────────────────────────────────────────────────────────────
  const choose = useCallback((opt: string) => {
    if (phase !== "playing") return;
    if (timerRef.current) clearInterval(timerRef.current);
    setSelected(opt);
    setPhase("answer");
    const q = shuffledQ[qIndex];
    if (opt === q.correct) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  }, [phase, shuffledQ, qIndex]);

  // ── Next ────────────────────────────────────────────────────────────────────
  const next = useCallback(() => {
    const nextIndex = qIndex + 1;
    if (nextIndex >= shuffledQ.length) {
      setPhase("results");
    } else {
      setQIndex(nextIndex);
      setSelected(null);
      setTimeLeft(12);
      setPhase("playing");
    }
  }, [qIndex, shuffledQ.length]);

  const q = shuffledQ[qIndex];
  const badge = getBadge(score, QUESTIONS.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.92, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(145deg, #0D1117 0%, #111827 100%)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-[#00FFA3]" />
                <span className="font-display font-bold text-white text-base">
                  Engineering Knowledge Quiz
                </span>
                {streak >= 2 && phase === "playing" && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold"
                  >
                    🔥 {streak}× streak
                  </motion.span>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-white/30 flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Idle ─────────────────────────────────────────────────────── */}
            {phase === "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-8 py-12 flex flex-col items-center text-center gap-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#00FFA3]/10 border border-[#00FFA3]/30 flex items-center justify-center text-4xl">
                  🧠
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">
                    Think you know backend engineering?
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    8 questions about Paridhi's engineering work, tools, and technical decisions.
                    You have <span className="text-[#00FFA3] font-semibold">12 seconds</span> per question.
                  </p>
                </div>
                <div className="flex gap-4 text-xs font-mono text-gray-500">
                  <span>⏱ 12s / question</span>
                  <span>·</span>
                  <span>8 questions</span>
                  <span>·</span>
                  <span>4 difficulty tiers</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={startGame}
                  className="px-8 py-3.5 bg-[#00FFA3] text-black font-bold text-sm font-mono rounded-2xl shadow-[0_0_30px_rgba(0,255,163,0.35)] hover:shadow-[0_0_40px_rgba(0,255,163,0.55)] transition-all"
                >
                  Start Challenge →
                </motion.button>
              </motion.div>
            )}

            {/* ── Playing / Answer ─────────────────────────────────────────── */}
            {(phase === "playing" || phase === "answer") && q && (
              <div className="p-6 sm:p-8">
                {/* Progress + timer */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex-1 mr-4">
                    <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                      <span>Question {qIndex + 1} of {QUESTIONS.length}</span>
                      <span className="text-[#00FFA3] font-bold">{score} correct</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00FFA3] to-[#38BDF8] rounded-full"
                        animate={{ width: `${((qIndex) / QUESTIONS.length) * 100}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                  <TimerRing timeLeft={timeLeft} max={12} />
                </div>

                {/* Category pill */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8]">
                    {q.category}
                  </span>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={q.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-lg sm:text-xl font-bold text-white leading-snug mb-6 font-sans"
                  >
                    {q.question}
                  </motion.h3>
                </AnimatePresence>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {q.options.map((opt, i) => {
                    const isCorrect = opt === q.correct;
                    const isSelected = opt === selected;
                    let bg = "bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/[0.06] cursor-pointer";
                    if (phase === "answer") {
                      if (isCorrect) bg = "bg-[#00FFA3]/15 border-[#00FFA3]/60 text-[#00FFA3]";
                      else if (isSelected && !isCorrect) bg = "bg-red-500/15 border-red-500/60 text-red-400";
                      else bg = "bg-white/[0.02] border-white/5 text-gray-600";
                    }
                    return (
                      <motion.button
                        key={opt}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        disabled={phase === "answer"}
                        onClick={() => choose(opt)}
                        className={`relative flex items-center gap-3 p-4 rounded-2xl border text-left text-sm font-medium transition-all duration-200 ${bg}`}
                      >
                        <span className="w-6 h-6 rounded-lg border border-current/30 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                        {phase === "answer" && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 ml-auto shrink-0" />
                        )}
                        {phase === "answer" && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 ml-auto shrink-0" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Fact + Next */}
                {phase === "answer" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
                        Engineering Context
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">{q.fact}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      {selected === q.correct ? (
                        <span className="text-[#00FFA3] text-sm font-semibold">✓ Correct! {streak >= 2 ? `🔥 ${streak}× streak!` : ""}</span>
                      ) : selected === "__timeout__" ? (
                        <span className="text-yellow-400 text-sm font-semibold">⏱ Time's up!</span>
                      ) : (
                        <span className="text-red-400 text-sm font-semibold">✗ Not quite.</span>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={next}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#00FFA3] text-black font-bold text-sm font-mono rounded-xl transition-all hover:shadow-[0_0_20px_rgba(0,255,163,0.4)]"
                      >
                        {qIndex + 1 >= QUESTIONS.length ? "See Results" : "Next Question"}
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* ── Results ───────────────────────────────────────────────────── */}
            {phase === "results" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-8 py-10 flex flex-col items-center text-center gap-6"
              >
                <motion.div
                  animate={{ boxShadow: [`0 0 20px ${badge.glow}`, `0 0 60px ${badge.glow}`, `0 0 20px ${badge.glow}`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-3xl border-2 flex items-center justify-center text-5xl"
                  style={{ borderColor: badge.color, background: `${badge.color}15` }}
                >
                  {badge.emoji}
                </motion.div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: badge.color }}>
                    You earned
                  </p>
                  <h3 className="font-display font-bold text-3xl text-white mb-2">{badge.label}</h3>
                  <p className="text-gray-400 text-sm">
                    {score} / {QUESTIONS.length} correct
                  </p>
                </div>

                {/* Score bar */}
                <div className="w-full max-w-xs">
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(score / QUESTIONS.length) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, #00FFA3, ${badge.color})` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs font-mono text-gray-500">
                    <span>0</span>
                    <span>{QUESTIONS.length}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  {score === QUESTIONS.length
                    ? "Perfect score! You know Paridhi's engineering stack inside out. 🚀"
                    : score >= 6
                    ? "Great work! You clearly understand distributed systems and cloud engineering."
                    : score >= 4
                    ? "Good effort! Paridhi's work spans many complex domains — keep exploring."
                    : "Give it another shot! Paridhi's engineering depth runs deep."}
                </p>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={startGame}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] border border-white/15 text-gray-300 font-mono text-sm font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onClose}
                    className="flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-bold rounded-xl transition-all"
                    style={{
                      background: badge.color,
                      color: "#000",
                      boxShadow: `0 0 20px ${badge.glow}`,
                    }}
                  >
                    <Trophy className="w-4 h-4" />
                    Done
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
