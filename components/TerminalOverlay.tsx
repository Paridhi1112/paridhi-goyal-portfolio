"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, ChevronRight } from "lucide-react";
import { siteConfig } from "@/app/data";

// ── Types ──────────────────────────────────────────────────────────────────────
type LineType = "input" | "output" | "success" | "error" | "info" | "dim";
interface OutputLine { text: string; type: LineType }

// ── Static response data ───────────────────────────────────────────────────────
const WELCOME: OutputLine[] = [
  { text: "  ╔══════════════════════════════════════════════════════════════╗", type: "info" },
  { text: "  ║    PARIDHI GOYAL  —  PORTFOLIO CLI  v2.0                   ║", type: "info" },
  { text: "  ║    Senior Backend Engineer · Distributed Systems & AI       ║", type: "info" },
  { text: "  ╚══════════════════════════════════════════════════════════════╝", type: "info" },
  { text: "", type: "output" },
  { text: "  Welcome. Type  help  to list available commands.", type: "dim" },
  { text: "  Press  Esc  or  Ctrl+K  to close the terminal.", type: "dim" },
  { text: "", type: "output" },
];

const COMMANDS: Record<string, OutputLine[]> = {
  help: [
    { text: "  ┌─────────────────────────────────────────────────────────────┐", type: "info" },
    { text: "  │  AVAILABLE COMMANDS                                         │", type: "info" },
    { text: "  ├─────────────────────────────────────────────────────────────┤", type: "info" },
    { text: "  │  whoami              →  About Paridhi                       │", type: "output" },
    { text: "  │  ls                  →  List portfolio sections             │", type: "output" },
    { text: "  │  ls projects         →  Browse all projects                 │", type: "output" },
    { text: "  │  cat skills.txt      →  Full engineering tech stack         │", type: "output" },
    { text: "  │  cat experience.json →  Work history (JSON format)         │", type: "output" },
    { text: "  │  ping paridhi        →  Network diagnostics test           │", type: "output" },
    { text: "  │  open resume         →  Download resume PDF                 │", type: "output" },
    { text: "  │  open github         →  Open GitHub profile                 │", type: "output" },
    { text: "  │  open linkedin       →  Open LinkedIn profile               │", type: "output" },
    { text: "  │  clear               →  Clear terminal                     │", type: "output" },
    { text: "  │  exit                →  Close terminal                     │", type: "output" },
    { text: "  └─────────────────────────────────────────────────────────────┘", type: "info" },
  ],

  whoami: [
    { text: "  ╭─────────────────────────────────────────╮", type: "success" },
    { text: "  │  Paridhi Goyal                          │", type: "success" },
    { text: "  ╰─────────────────────────────────────────╯", type: "success" },
    { text: "  Role:      Senior Backend Software Engineer", type: "output" },
    { text: "  Location:  Dallas, TX", type: "output" },
    { text: "  Email:     paridhi.goyal1112@gmail.com", type: "output" },
    { text: "  GitHub:    github.com/Paridhi1112", type: "output" },
    { text: "  LinkedIn:  linkedin.com/in/paridhigoyal11", type: "output" },
    { text: "", type: "output" },
    { text: "  Specializes in distributed systems, event-driven pipelines,", type: "dim" },
    { text: "  cloud-native microservices, and AI/LLM infrastructure.", type: "dim" },
  ],

  ls: [
    { text: "  Portfolio sections:", type: "info" },
    { text: "  drwxr-xr-x  hero/", type: "output" },
    { text: "  drwxr-xr-x  about/", type: "output" },
    { text: "  drwxr-xr-x  experience/", type: "output" },
    { text: "  drwxr-xr-x  projects/", type: "output" },
    { text: "  drwxr-xr-x  system-design/", type: "output" },
    { text: "  drwxr-xr-x  github-stats/", type: "output" },
    { text: "  drwxr-xr-x  skills/", type: "output" },
    { text: "  drwxr-xr-x  certifications/", type: "output" },
    { text: "  drwxr-xr-x  recommendations/", type: "output" },
    { text: "  drwxr-xr-x  contact/", type: "output" },
    { text: "", type: "output" },
    { text: "  Run  ls projects  to browse engineering projects.", type: "dim" },
  ],

  "ls projects": [
    { text: "  projects/ (4 items)", type: "info" },
    { text: "", type: "output" },
    { text: "  01  ClaimArmor AI                  [AI & LLMs]", type: "success" },
    { text: "      Autonomous multi-agent insurance claims auditing system", type: "dim" },
    { text: "      Stack: Google ADK · MCP · Gemini 2.5 · FastAPI", type: "dim" },
    { text: "", type: "output" },
    { text: "  02  MAARS Enterprise                [AI & LLMs]", type: "success" },
    { text: "      Multi-agent AI research paper generator (IEEE format)", type: "dim" },
    { text: "      Stack: Next.js · FastAPI · LangChain · Supabase", type: "dim" },
    { text: "", type: "output" },
    { text: "  03  Real-Time Event Pipeline        [Data Engineering]", type: "success" },
    { text: "      Apache NiFi + Kafka streaming pipeline for GE/Accenture", type: "dim" },
    { text: "      Stack: Apache Kafka · NiFi · ELK · Grafana", type: "dim" },
    { text: "", type: "output" },
    { text: "  04  BikeStore Data Warehouse        [Data Engineering]", type: "success" },
    { text: "      Star schema DW with T-SQL ETL pipelines & BI dashboards", type: "dim" },
    { text: "      Stack: T-SQL · SSMS · Star Schema · Power BI", type: "dim" },
  ],

  "cat skills.txt": [
    { text: "  skills.txt", type: "info" },
    { text: "  ─────────────────────────────────────", type: "dim" },
    { text: "  [Backend Engineering]", type: "success" },
    { text: "    Java · Spring Boot · Python · FastAPI · Django · REST APIs · gRPC", type: "output" },
    { text: "", type: "output" },
    { text: "  [Distributed Systems]", type: "success" },
    { text: "    Apache Kafka · Apache NiFi · Redis/Pub-Sub · Event-Driven Arch", type: "output" },
    { text: "", type: "output" },
    { text: "  [Cloud & DevOps]", type: "success" },
    { text: "    AWS (EC2, S3, Lambda) · Docker · Kubernetes · Oracle OIC · Terraform", type: "output" },
    { text: "", type: "output" },
    { text: "  [AI & Machine Learning]", type: "success" },
    { text: "    LLMs · Multi-Agent Systems · LangChain · RAG · Google ADK · MCP", type: "output" },
    { text: "", type: "output" },
    { text: "  [Databases]", type: "success" },
    { text: "    PostgreSQL · Oracle DB · MySQL · Redis · MongoDB · Supabase (pgvector)", type: "output" },
    { text: "", type: "output" },
    { text: "  [Observability & Tooling]", type: "success" },
    { text: "    ELK Stack · Grafana/Prometheus · Git · GitHub Actions · OpenTelemetry", type: "output" },
  ],

  "cat experience.json": [
    { text: "  experience.json", type: "info" },
    { text: "  ─────────────────────────────────────", type: "dim" },
    { text: "  {", type: "output" },
    { text: '    "current": {', type: "output" },
    { text: '      "company": "Tech Mahindra",', type: "success" },
    { text: '      "client": "Oracle",', type: "output" },
    { text: '      "role": "Senior Software Engineer",', type: "output" },
    { text: '      "period": "Aug 2024 – Aug 2025",', type: "dim" },
    { text: '      "highlight": "100K+ encrypted payments/month · 30% API throughput boost"', type: "dim" },
    { text: "    },", type: "output" },
    { text: '    "previous": [', type: "output" },
    { text: '      { "company": "Accenture", "client": "GE",', type: "output" },
    { text: '        "period": "Jun 2022 – Jul 2024",', type: "dim" },
    { text: '        "highlight": "50% pipeline efficiency · 99.99% uptime · Whitepaper author" },', type: "dim" },
    { text: '      { "company": "BestPeers", "role": "Trainee Developer",', type: "output" },
    { text: '        "period": "Jan 2020 – Feb 2021",', type: "dim" },
    { text: '        "highlight": "Django + React full-stack applications" }', type: "dim" },
    { text: "    ],", type: "output" },
    { text: '    "education": {', type: "output" },
    { text: '      "degree": "MS Information Technology (Data Science)",', type: "success" },
    { text: '      "institution": "Rensselaer Polytechnic Institute",', type: "output" },
    { text: '      "gpa": "3.93 / 4.0",', type: "output" },
    { text: '      "ta": "Statistical Methods & Managing IT Resources"', type: "dim" },
    { text: "    }", type: "output" },
    { text: "  }", type: "output" },
  ],
};

const PING_LINES: OutputLine[] = [
  { text: "  PING paridhi.goyal (dallas.tx.us): 56 data bytes", type: "output" },
  { text: "  64 bytes from paridhi.goyal: icmp_seq=0 ttl=64 time=0.8 ms", type: "success" },
  { text: "  64 bytes from paridhi.goyal: icmp_seq=1 ttl=64 time=1.1 ms", type: "success" },
  { text: "  64 bytes from paridhi.goyal: icmp_seq=2 ttl=64 time=0.9 ms", type: "success" },
  { text: "  64 bytes from paridhi.goyal: icmp_seq=3 ttl=64 time=1.4 ms", type: "success" },
  { text: "", type: "output" },
  { text: "  --- paridhi.goyal ping statistics ---", type: "info" },
  { text: "  4 packets transmitted, 4 received, 0% packet loss", type: "output" },
  { text: "  round-trip min/avg/max = 0.8/1.05/1.4 ms", type: "dim" },
  { text: "", type: "output" },
  { text: "  ✅  Connection established. Available to collaborate!", type: "success" },
  { text: "  📧  paridhi.goyal1112@gmail.com", type: "success" },
];

// ── Command processor ──────────────────────────────────────────────────────────
type Action = "clear" | "exit" | "open-resume" | "open-github" | "open-linkedin" | null;

function processCmd(raw: string): { lines: OutputLine[]; action: Action } {
  const input = raw.trim().toLowerCase();
  if (!input) return { lines: [], action: null };

  if (COMMANDS[input]) return { lines: COMMANDS[input], action: null };
  if (input === "ping paridhi") return { lines: PING_LINES, action: null };

  if (input === "clear") return { lines: [], action: "clear" };
  if (input === "exit" || input === "quit" || input === "q")
    return { lines: [], action: "exit" };

  if (input.startsWith("open")) {
    const target = input.replace("open", "").trim();
    if (target === "resume")
      return { lines: [{ text: "  ↗  Opening resume PDF…", type: "success" }], action: "open-resume" };
    if (target === "github")
      return { lines: [{ text: "  ↗  Opening github.com/Paridhi1112…", type: "success" }], action: "open-github" };
    if (target === "linkedin")
      return { lines: [{ text: "  ↗  Opening linkedin.com/in/paridhigoyal11…", type: "success" }], action: "open-linkedin" };
    return { lines: [{ text: `  open: unknown target '${target}'. Try: resume | github | linkedin`, type: "error" }], action: null };
  }

  return {
    lines: [{ text: `  command not found: ${input}. Type  help  for available commands.`, type: "error" }],
    action: null,
  };
}

// ── Line colour map ────────────────────────────────────────────────────────────
const lineColors: Record<LineType, string> = {
  input:   "text-[#00FFA3]",
  output:  "text-gray-300",
  success: "text-[#00FFA3]",
  error:   "text-red-400",
  info:    "text-[#38BDF8]",
  dim:     "text-gray-500",
};

// ══════════════════════════════════════════════════════════════════════════════
export default function TerminalOverlay() {
  const [isOpen, setIsOpen]     = useState(false);
  const [lines, setLines]       = useState<OutputLine[]>(WELCOME);
  const [input, setInput]       = useState("");
  const [history, setHistory]   = useState<string[]>([]);
  const [histIdx, setHistIdx]   = useState(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // ── Open/close via Ctrl+K and custom event ─────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); setIsOpen(v => !v); }
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    const onEvent = () => setIsOpen(true);
    document.addEventListener("keydown", onKey);
    document.addEventListener("open-terminal", onEvent);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("open-terminal", onEvent);
    };
  }, [isOpen]);

  // ── Auto-scroll & focus ────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // ── Submit command ─────────────────────────────────────────────────────────
  const submit = useCallback(() => {
    const cmd = input.trim();
    if (!cmd) return;

    const inputLine: OutputLine = { text: `  $ ${cmd}`, type: "input" };
    const { lines: out, action } = processCmd(cmd);

    if (action === "clear") {
      setLines(WELCOME);
      setInput("");
      return;
    }
    if (action === "exit") { setIsOpen(false); setInput(""); return; }
    if (action === "open-resume")   window.open(siteConfig.resumeUrl, "_blank");
    if (action === "open-github")   window.open(siteConfig.github, "_blank");
    if (action === "open-linkedin") window.open(siteConfig.linkedin, "_blank");

    setLines(prev => [...prev, inputLine, ...out, { text: "", type: "output" }]);
    setHistory(prev => [cmd, ...prev.slice(0, 49)]);
    setHistIdx(-1);
    setInput("");
  }, [input]);

  // ── Key handling ───────────────────────────────────────────────────────────
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); submit(); return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = histIdx - 1;
      if (next < 0) { setHistIdx(-1); setInput(""); }
      else { setHistIdx(next); setInput(history[next] ?? ""); }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="terminal"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Terminal window */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col rounded-2xl border border-[#00FFA3]/30 shadow-[0_0_80px_rgba(0,255,163,0.15)] overflow-hidden"
            style={{ background: "#080B12" }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#0D1117]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                  <Terminal className="w-3.5 h-3.5 text-[#00FFA3]" />
                  <span className="text-xs font-mono text-gray-400 tracking-widest">
                    paridhi@portfolio:~
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:block text-[10px] font-mono text-gray-600 tracking-widest uppercase">
                  Ctrl+K to toggle
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg border border-white/10 text-gray-500 hover:text-red-400 hover:border-red-500/40 flex items-center justify-center transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Output area */}
            <div
              className="flex-1 overflow-y-auto px-2 py-4 font-mono text-sm"
              style={{ minHeight: 0 }}
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.12, delay: Math.min(i * 0.01, 0.3) }}
                  className={`leading-6 whitespace-pre-wrap break-words text-[13px] ${lineColors[line.type]}`}
                >
                  {line.text || "\u00A0"}
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className="flex items-center gap-3 px-5 py-3 border-t border-white/10 bg-[#0D1117]">
              <div className="flex items-center gap-2 text-[#00FFA3] font-mono text-sm shrink-0">
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-500">$</span>
              </div>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent outline-none font-mono text-[13px] text-[#00FFA3] placeholder-gray-700 caret-[#00FFA3]"
                placeholder="type a command…"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              <span className="w-2 h-4 bg-[#00FFA3] animate-pulse rounded-sm shrink-0" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
