"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Zap, ShieldCheck, Database, Layers, Radio, Sparkles } from "lucide-react";

interface FloatingBadge {
  id: string;
  label: string;
  icon: React.ElementType;
  position: string; // Tailwind absolute position class
  color: string;
  delay: number;
  duration: number;
}

const BADGES: FloatingBadge[] = [
  {
    id: "kafka",
    label: "Event Streaming · Kafka",
    icon: Radio,
    position: "top-[15%] left-[2%] hidden xl:flex",
    color: "#00FFA3",
    delay: 0,
    duration: 5,
  },
  {
    id: "aws",
    label: "AWS Certified Developer",
    icon: Cloud,
    position: "top-[28%] right-[3%] hidden lg:flex",
    color: "#38BDF8",
    delay: 1,
    duration: 6,
  },
  {
    id: "microservices",
    label: "99.9% Production SLA",
    icon: ShieldCheck,
    position: "bottom-[22%] left-[4%] hidden lg:flex",
    color: "#00FFA3",
    delay: 2,
    duration: 5.5,
  },
  {
    id: "spring",
    label: "Spring Boot Microservices",
    icon: Cpu,
    position: "bottom-[14%] right-[2%] hidden xl:flex",
    color: "#6C63FF",
    delay: 1.5,
    duration: 6.5,
  },
  {
    id: "ai",
    label: "Multi-Agent AI Systems",
    icon: Sparkles,
    position: "top-[65%] right-[6%] hidden xl:flex",
    color: "#F43F5E",
    delay: 0.8,
    duration: 7,
  },
];

export default function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {BADGES.map((badge) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.75, 1, 0.75],
              y: [0, -14, 0],
              rotate: [-2, 2, -2],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: badge.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: badge.delay,
            }}
            whileHover={{ scale: 1.15, opacity: 1 }}
            className={`absolute pointer-events-auto cursor-pointer items-center gap-2 px-3.5 py-2 rounded-2xl glass border border-white/10 backdrop-blur-xl shadow-xl transition-all hover:border-[#00FFA3]/60 hover:shadow-[0_0_25px_rgba(0,255,163,0.3)] ${badge.position}`}
          >
            <div
              className="p-1.5 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: `${badge.color}20`,
                color: badge.color,
              }}
            >
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-mono font-semibold text-white tracking-wide">
              {badge.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
