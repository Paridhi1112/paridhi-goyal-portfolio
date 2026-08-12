"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "#00FFA3" or "#38BDF8"
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scaleOnHover?: number;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "#00FFA3",
  tiltMaxAngleX = 12,
  tiltMaxAngleY = 12,
  scaleOnHover = 1.02,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position inside the card relative to center (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Raw pixel coordinates for the spotlight effect
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  // Smooth springs for 3D rotation
  const springConfig = { stiffness: 300, damping: 22 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltMaxAngleX, -tiltMaxAngleX]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltMaxAngleY, tiltMaxAngleY]), springConfig);
  const scale = useSpring(isHovered ? scaleOnHover : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotX.set(x);
    spotY.set(y);

    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative group cursor-pointer transition-colors duration-300 ${className}`}
    >
      {/* ── Dynamic Mouse Cursor Spotlight ───────────────────────────────── */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${spotX.get()}px ${spotY.get()}px, ${glowColor}25, transparent 70%)`,
          }}
        />
      )}

      {/* ── Hover Border Light Beam ───────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-[#00FFA3]/40 z-20 shadow-[0_0_25px_rgba(0,255,163,0.15)]"
      />

      {/* ── Card Content ──────────────────────────────────────────────────── */}
      <div className="relative z-0 h-full w-full rounded-[inherit]">
        {children}
      </div>
    </motion.div>
  );
}
