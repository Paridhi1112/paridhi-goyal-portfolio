"use client";

/**
 * ParticleNetwork — Interactive canvas-based neural network particle field.
 * No new dependencies needed. Pure canvas + requestAnimationFrame.
 *
 * Features:
 * - Floating particles connected by glowing lines when close
 * - Mouse causes repulsion burst + bright highlight connections
 * - Responsive: fewer particles on mobile
 * - GPU-friendly: uses globalCompositeOperation for glow
 * - Auto-cleanup on unmount
 */

import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Settings — tweak these to adjust density / feel
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 45 : 90;
    const CONNECT_DIST = isMobile ? 100 : 130;
    const MOUSE_RADIUS = 170;
    const BASE_SPEED = 0.35;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        size: Math.random() * 1.6 + 0.5,
        opacity: Math.random() * 0.4 + 0.3,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    initParticles();

    const handleResize = () => { resize(); initParticles(); };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const ps = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // --- Update each particle ---
      ps.forEach((p) => {
        // Mouse repulsion
        const dxm = p.x - mx;
        const dym = p.y - my;
        const distM = Math.hypot(dxm, dym);
        if (distM < MOUSE_RADIUS && distM > 0) {
          const strength = ((MOUSE_RADIUS - distM) / MOUSE_RADIUS) * 0.045;
          p.vx += (dxm / distM) * strength;
          p.vy += (dym / distM) * strength;
        }

        // Velocity damping + speed cap
        p.vx *= 0.985;
        p.vy *= 0.985;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 1.8) { p.vx = (p.vx / spd) * 1.8; p.vy = (p.vy / spd) * 1.8; }
        // Min speed to keep things drifting
        if (spd < 0.1) { p.vx += (Math.random() - 0.5) * 0.05; p.vy += (Math.random() - 0.5) * 0.05; }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      // --- Draw inter-particle connections ---
      ctx.save();
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(0, 255, 163, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // --- Draw particles ---
      ps.forEach((p) => {
        ctx.save();
        // Glow effect
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(0, 255, 163, 0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 163, ${p.opacity})`;
        ctx.fill();
        ctx.restore();
      });

      // --- Mouse highlight connections (brighter, thicker) ---
      ctx.save();
      ps.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS) {
          const alpha = (1 - dist / MOUSE_RADIUS) * 0.75;
          const grad = ctx.createLinearGradient(p.x, p.y, mx, my);
          grad.addColorStop(0, `rgba(0, 255, 163, ${alpha})`);
          grad.addColorStop(1, `rgba(0, 255, 163, 0)`);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      // Draw mouse cursor dot
      if (mx > 0 && mx < W) {
        ctx.beginPath();
        ctx.arc(mx, my, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 163, 0.4)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(0, 255, 163, 1)";
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.65 }}
    />
  );
}
