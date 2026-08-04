"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

// ─── Floating node mesh ──────────────────────────────────────────────────────
function NetworkNodes() {
  const meshRef = useRef<THREE.Points>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);
  const { mouse } = useThree();

  // Generate node positions
  const { positions, linePositions } = useMemo(() => {
    const nodeCount = 60;
    const positions = new Float32Array(nodeCount * 3);
    const nodes: [number, number, number][] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodes.push([x, y, z]);
    }

    // Generate connections for close nodes
    const lineVerts: number[] = [];
    const threshold = 3.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < threshold) {
          lineVerts.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    return { positions, linePositions: new Float32Array(lineVerts) };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.04 + mouse.x * 0.15;
      meshRef.current.rotation.x = t * 0.02 + mouse.y * 0.08;
    }
    if (lineRef.current) {
      lineRef.current.rotation.y = t * 0.04 + mouse.x * 0.15;
      lineRef.current.rotation.x = t * 0.02 + mouse.y * 0.08;
    }
  });

  return (
    <>
      {/* Connection lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00FFA3" transparent opacity={0.12} />
      </lineSegments>

      {/* Node dots */}
      <Points ref={meshRef} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#00FFA3"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00FFA3" intensity={0.6} />
      <pointLight position={[-5, -3, -5]} color="#6C63FF" intensity={0.3} />
      <NetworkNodes />
    </Canvas>
  );
}
