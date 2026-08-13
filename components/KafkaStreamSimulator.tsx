"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Zap, Activity, AlertTriangle, ChevronRight } from "lucide-react";

// ── Node/Flow definitions ─────────────────────────────────────────────────────
interface NodeDef { x: number; y: number; label: string; type: string; color: string }
interface FlowDef { from: string; to: string; color: string; label: string; errorRate: number }

const NODES: Record<string, NodeDef> = {
  gateway:   { x: 4,  y: 50, label: "API Gateway",       type: "gateway", color: "#38BDF8" },
  producer:  { x: 24, y: 50, label: "Order Service",      type: "service", color: "#00FFA3" },
  kafka:     { x: 50, y: 50, label: "Kafka Event Bus",    type: "queue",   color: "#F59E0B" },
  inventory: { x: 76, y: 22, label: "Inventory Consumer", type: "service", color: "#A78BFA" },
  payment:   { x: 76, y: 78, label: "Payment Consumer",   type: "service", color: "#F97316" },
  db:        { x: 96, y: 50, label: "Events DB",          type: "db",      color: "#34D399" },
};

const FLOWS: FlowDef[] = [
  { from: "gateway",   to: "producer",  color: "#38BDF8", label: "REST Request",  errorRate: 0.02 },
  { from: "producer",  to: "kafka",     color: "#00FFA3", label: "Publish Event", errorRate: 0.03 },
  { from: "kafka",     to: "inventory", color: "#A78BFA", label: "Consume Stream",errorRate: 0.05 },
  { from: "kafka",     to: "payment",   color: "#F97316", label: "Consume Stream",errorRate: 0.05 },
  { from: "inventory", to: "db",        color: "#34D399", label: "Persist State", errorRate: 0.01 },
  { from: "payment",   to: "db",        color: "#FB923C", label: "Persist State", errorRate: 0.01 },
];

const W = 1000;
const H = 320;

function toSVG(pct: { x: number; y: number }) {
  return { x: (pct.x / 100) * W, y: (pct.y / 100) * H };
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface Packet {
  id: number;
  flowIndex: number;
  progress: number;
  isError: boolean;
}

let _pkId = 0;

// ── Main component ────────────────────────────────────────────────────────────
export default function KafkaStreamSimulator() {
  const [isRunning, setIsRunning]   = useState(false);
  const [speed, setSpeed]           = useState(2);
  const [packets, setPackets]       = useState<Packet[]>([]);
  const [stats, setStats]           = useState({ sent: 0, errors: 0, dlq: 0 });
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());

  // Refs to avoid stale closures in the animation loop
  const speedRef     = useRef(speed);
  const isRunRef     = useRef(isRunning);
  const packetsRef   = useRef<Packet[]>([]);
  const statsRef     = useRef({ sent: 0, errors: 0, dlq: 0 });
  const tickRef      = useRef(0);

  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { isRunRef.current = isRunning; }, [isRunning]);

  // ── Animation tick ──────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    if (!isRunRef.current) return;
    tickRef.current += 1;

    const spd  = speedRef.current;
    const step = 0.009 * spd;
    const newPkts: Packet[] = [];
    const newActive = new Set<string>();
    let sent = 0;
    let errs = 0;
    let dlq  = 0;

    for (const p of packetsRef.current) {
      const prog = p.progress + step;
      const flow = FLOWS[p.flowIndex];

      if (prog < 0.45) newActive.add(flow.from);
      if (prog > 0.55) newActive.add(flow.to);

      if (prog >= 1) {
        sent++;
        if (p.isError) { errs++; dlq++; }
      } else {
        newPkts.push({ ...p, progress: prog });
      }
    }

    // Spawn new packet every N ticks (faster at higher speeds)
    if (tickRef.current % Math.max(1, Math.round(12 / spd)) === 0 && newPkts.length < 24) {
      const fi = Math.floor(Math.random() * FLOWS.length);
      newPkts.push({
        id: _pkId++,
        flowIndex: fi,
        progress: 0,
        isError: Math.random() < FLOWS[fi].errorRate,
      });
    }

    packetsRef.current = newPkts;

    if (sent > 0 || errs > 0) {
      statsRef.current = {
        sent:   statsRef.current.sent   + sent,
        errors: statsRef.current.errors + errs,
        dlq:    statsRef.current.dlq    + dlq,
      };
      setStats({ ...statsRef.current });
    }

    setPackets([...newPkts]);
    setActiveNodes(new Set(newActive));
  }, []);

  // ── Interval ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(tick, 33); // ~30fps
    return () => clearInterval(id);
  }, [isRunning, tick]);

  // ── Reset ───────────────────────────────────────────────────────────────────
  const reset = () => {
    setIsRunning(false);
    isRunRef.current = false;
    packetsRef.current = [];
    statsRef.current = { sent: 0, errors: 0, dlq: 0 };
    setPackets([]);
    setStats({ sent: 0, errors: 0, dlq: 0 });
    setActiveNodes(new Set());
    tickRef.current = 0;
  };

  // ── Throughput calc (msgs/sec approximation) ────────────────────────────────
  const throughputApprox = Math.round(stats.sent > 0 ? (stats.sent / Math.max(1, tickRef.current) * 30) : 0);

  return (
    <div className="mt-8 rounded-2xl border border-[#00FFA3]/20 overflow-hidden"
         style={{ background: "rgba(0,0,0,0.55)" }}>

      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <Activity className={`w-4 h-4 ${isRunning ? "text-[#00FFA3] animate-pulse" : "text-gray-500"}`} />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00FFA3]">
            Live Event Stream Simulator
          </span>
          {isRunning && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-2 py-0.5 rounded-full bg-[#00FFA3]/15 border border-[#00FFA3]/40 text-[#00FFA3] text-[10px] font-mono"
            >
              ● LIVE
            </motion.span>
          )}
        </div>
        {/* Stats */}
        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span className="text-[#00FFA3]">✓ <span className="font-bold">{stats.sent}</span> delivered</span>
          <span className="text-red-400">✗ <span className="font-bold">{stats.errors}</span> errors</span>
          <span className="text-yellow-400">⚡ DLQ: <span className="font-bold">{stats.dlq}</span></span>
          {isRunning && (
            <span className="text-[#38BDF8]">~<span className="font-bold">{throughputApprox}</span> msg/s</span>
          )}
        </div>
      </div>

      {/* ── SVG Canvas ─────────────────────────────────────────────────── */}
      <div className="relative w-full bg-[#060912] overflow-hidden" style={{ height: 220 }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connection lines */}
          {FLOWS.map((flow, i) => {
            const f = toSVG(NODES[flow.from]);
            const t = toSVG(NODES[flow.to]);
            return (
              <line
                key={`line-${i}`}
                x1={f.x} y1={f.y}
                x2={t.x} y2={t.y}
                stroke={flow.color}
                strokeWidth="1.5"
                strokeOpacity="0.2"
                strokeDasharray="10 6"
              />
            );
          })}

          {/* Arrow heads */}
          <defs>
            {FLOWS.map((flow, i) => (
              <marker
                key={`arrow-${i}`}
                id={`arrow-${i}`}
                markerWidth="8" markerHeight="8"
                refX="6" refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill={flow.color} fillOpacity="0.4" />
              </marker>
            ))}
          </defs>

          {/* Re-draw lines with arrows */}
          {FLOWS.map((flow, i) => {
            const f = toSVG(NODES[flow.from]);
            const t = toSVG(NODES[flow.to]);
            const dx = t.x - f.x;
            const dy = t.y - f.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const nx = dx / len;
            const ny = dy / len;
            const pad = 44;
            return (
              <line
                key={`arrow-line-${i}`}
                x1={f.x + nx * pad} y1={f.y + ny * pad}
                x2={t.x - nx * pad} y2={t.y - ny * pad}
                stroke={flow.color}
                strokeWidth="1"
                strokeOpacity="0.15"
                markerEnd={`url(#arrow-${i})`}
              />
            );
          })}

          {/* Packets */}
          {packets.map(p => {
            const flow = FLOWS[p.flowIndex];
            const f = toSVG(NODES[flow.from]);
            const t = toSVG(NODES[flow.to]);
            const x = f.x + (t.x - f.x) * p.progress;
            const y = f.y + (t.y - f.y) * p.progress;
            const color = p.isError ? "#EF4444" : flow.color;
            return (
              <g key={p.id}>
                <circle cx={x} cy={y} r="9" fill={color} fillOpacity="0.12" />
                <circle cx={x} cy={y} r="5" fill={color} fillOpacity="0.9" />
                {p.isError && (
                  <text x={x} y={y} textAnchor="middle" dominantBaseline="central"
                        fontSize="6" fill="white">✕</text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {Object.entries(NODES).map(([id, node]) => {
            const pos = toSVG(node);
            const isActive = activeNodes.has(id);
            const nodeW = 80;
            const nodeH = 38;
            return (
              <g key={id}>
                {isActive && (
                  <ellipse
                    cx={pos.x} cy={pos.y}
                    rx="50" ry="28"
                    fill={node.color}
                    fillOpacity="0.08"
                  />
                )}
                <rect
                  x={pos.x - nodeW / 2} y={pos.y - nodeH / 2}
                  width={nodeW} height={nodeH}
                  rx="9"
                  fill="#111827"
                  stroke={isActive ? node.color : `${node.color}35`}
                  strokeWidth={isActive ? "1.8" : "1"}
                />
                <text
                  x={pos.x} y={pos.y - 5}
                  textAnchor="middle"
                  fill={isActive ? node.color : "#9CA3AF"}
                  fontSize="8.5"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="700"
                >
                  {node.label.split(" ").slice(0, 2).join(" ")}
                </text>
                <text
                  x={pos.x} y={pos.y + 9}
                  textAnchor="middle"
                  fill="#4B5563"
                  fontSize="6.5"
                  fontFamily="JetBrains Mono, monospace"
                >
                  [{node.type}]
                </text>
                {/* Pinging dot */}
                {isActive && (
                  <circle cx={pos.x + nodeW / 2 - 8} cy={pos.y - nodeH / 2 + 8} r="3" fill={node.color}>
                    <animate attributeName="r" values="3;5;3" dur="0.8s" repeatCount="indefinite" />
                    <animate attributeName="fillOpacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Idle overlay */}
        {!isRunning && stats.sent === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 text-xs font-mono mb-2">
                Click ▶ Simulate to start the event stream
              </p>
              <ChevronRight className="w-4 h-4 text-gray-700 mx-auto animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* ── Flow legend ─────────────────────────────────────────────────── */}
      <div className="px-5 py-3 border-t border-white/10 flex flex-wrap gap-3">
        {FLOWS.map((flow, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: flow.color }} />
            <span className="text-[10px] font-mono text-gray-500">{flow.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5 ml-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
          <span className="text-[10px] font-mono text-gray-500">Error → DLQ</span>
        </div>
      </div>

      {/* ── Controls ────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsRunning(v => !v)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
              isRunning
                ? "bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                : "bg-[#00FFA3]/20 text-[#00FFA3] border border-[#00FFA3]/40 hover:bg-[#00FFA3]/30 hover:shadow-[0_0_15px_rgba(0,255,163,0.35)]"
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? "Pause Stream" : "▶ Simulate Flow"}
          </motion.button>

          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-gray-400 border border-white/10 hover:border-white/25 hover:text-white transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>

        {/* Speed control */}
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Speed</span>
          <Zap className="w-3 h-3 text-yellow-400" />
          <input
            type="range"
            min="1" max="5" step="1"
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
            className="w-28 h-1.5 rounded-full accent-[#00FFA3]"
            style={{ accentColor: "#00FFA3" }}
          />
          <span className="text-xs font-mono font-bold text-yellow-400 w-6 text-right">
            {speed}×
          </span>
        </div>
      </div>

      {/* ── Error info ──────────────────────────────────────────────────── */}
      {stats.errors > 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="px-5 py-3 border-t border-red-500/20 bg-red-500/5 flex items-center gap-2"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="text-xs font-mono text-red-400">
              {stats.dlq} message{stats.dlq !== 1 ? "s" : ""} routed to Dead-Letter Queue — resilience pattern in action.
            </span>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
