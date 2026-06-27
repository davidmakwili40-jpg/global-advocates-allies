"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function ScenePlaceholder({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current || reduceMotion) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.35) * 0.18;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={1.8} position={[4, 4, 5]} />
      <group ref={groupRef}>
        <mesh position={[0, -0.25, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry args={[1.25, 48, 48]} />
          <meshStandardMaterial color="#d7624c" roughness={0.82} />
        </mesh>
        <mesh position={[-0.85, 0.9, 0]} rotation={[0, 0, -0.45]}>
          <coneGeometry args={[0.34, 0.72, 4]} />
          <meshStandardMaterial color="#31543b" roughness={0.75} />
        </mesh>
        <mesh position={[0.85, 0.9, 0]} rotation={[0, 0, 0.45]}>
          <coneGeometry args={[0.34, 0.72, 4]} />
          <meshStandardMaterial color="#31543b" roughness={0.75} />
        </mesh>
        <mesh position={[0, -1.22, 0.05]}>
          <torusGeometry args={[1.45, 0.045, 16, 80]} />
          <meshStandardMaterial color="#f5e9bf" roughness={0.5} />
        </mesh>
      </group>
    </>
  );
}

export function RescuedDogScene() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div
      aria-label="Abstract three-dimensional placeholder for a rescued companion animal"
      className="absolute inset-0"
      role="img"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ScenePlaceholder reduceMotion={reduceMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
