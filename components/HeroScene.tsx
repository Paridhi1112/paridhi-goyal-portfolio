"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// ─── 3D Floating Geometries ──────────────────────────────────────────────────
function FloatingGeometries() {
  const dodecRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  const octaRef = useRef<THREE.Mesh>(null!);
  const icoRef = useRef<THREE.Mesh>(null!);

  const { mouse } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (dodecRef.current) {
      dodecRef.current.rotation.x = t * 0.15 + mouse.y * 0.2;
      dodecRef.current.rotation.y = t * 0.2 + mouse.x * 0.3;
      dodecRef.current.position.y = Math.sin(t * 0.8) * 0.25 + 1.2;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.12 - mouse.y * 0.15;
      torusRef.current.rotation.z = t * 0.18 + mouse.x * 0.25;
      torusRef.current.position.y = Math.cos(t * 0.7) * 0.3 - 1.2;
    }

    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.25;
      octaRef.current.rotation.x = t * 0.15;
      octaRef.current.position.y = Math.sin(t * 1.1) * 0.2 - 0.5;
    }

    if (icoRef.current) {
      icoRef.current.rotation.z = t * 0.2;
      icoRef.current.rotation.y = t * 0.1;
      icoRef.current.position.y = Math.cos(t * 0.9) * 0.25 + 0.8;
    }
  });

  return (
    <>
      {/* Wireframe Glowing Dodecahedron (Top Right) */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={dodecRef} position={[3.8, 1.2, -1]}>
          <dodecahedronGeometry args={[0.95, 0]} />
          <meshStandardMaterial
            color="#00FFA3"
            wireframe
            emissive="#00FFA3"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Glowing Torus Knot (Bottom Left) */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh ref={torusRef} position={[-3.8, -1.2, -1.5]}>
          <torusKnotGeometry args={[0.65, 0.2, 100, 16]} />
          <meshStandardMaterial
            color="#38BDF8"
            wireframe
            emissive="#38BDF8"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Floating Octahedron (Far Right) */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh ref={octaRef} position={[4.5, -1.8, -2]}>
          <octahedronGeometry args={[0.75, 0]} />
          <meshStandardMaterial
            color="#6C63FF"
            wireframe
            emissive="#6C63FF"
            emissiveIntensity={0.25}
          />
        </mesh>
      </Float>

      {/* Floating Icosahedron (Top Left) */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh ref={icoRef} position={[-4.2, 1.8, -2.2]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#00FFA3"
            wireframe
            emissive="#00FFA3"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </>
  );
}

// ─── 3D Network Particle Node Constellation ──────────────────────────────────
function NetworkNodes() {
  const meshRef = useRef<THREE.Points>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);
  const { mouse } = useThree();

  const { positions, linePositions } = useMemo(() => {
    const nodeCount = 80;
    const positions = new Float32Array(nodeCount * 3);
    const nodes: [number, number, number][] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 9;
      const z = (Math.random() - 0.5) * 7;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodes.push([x, y, z]);
    }

    const lineVerts: number[] = [];
    const threshold = 3.6;
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
    const rx = t * 0.03 + mouse.y * 0.1;
    const ry = t * 0.05 + mouse.x * 0.15;

    if (meshRef.current) {
      meshRef.current.rotation.y = ry;
      meshRef.current.rotation.x = rx;
    }
    if (lineRef.current) {
      lineRef.current.rotation.y = ry;
      lineRef.current.rotation.x = rx;
    }
  });

  return (
    <>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00FFA3" transparent opacity={0.14} />
      </lineSegments>

      <Points ref={meshRef} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#00FFA3"
          size={0.065}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </>
  );
}

// ─── Mouse Interactive Light Source ─────────────────────────────────────────
function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  const { mouse } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 6;
      lightRef.current.position.y = mouse.y * 4;
      lightRef.current.position.z = 3;
    }
  });

  return <pointLight ref={lightRef} color="#00FFA3" intensity={1.5} distance={10} />;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#00FFA3" intensity={0.8} />
      <pointLight position={[-5, -4, -5]} color="#6C63FF" intensity={0.5} />
      <pointLight position={[0, -5, 2]} color="#38BDF8" intensity={0.4} />
      <MouseLight />
      <FloatingGeometries />
      <NetworkNodes />
    </Canvas>
  );
}
