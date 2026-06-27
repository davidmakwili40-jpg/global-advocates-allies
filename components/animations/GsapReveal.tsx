"use client";

import gsap from "gsap";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function GsapReveal({ children, className }: { children: ReactNode; className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!rootRef.current || reduceMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }
      );
    }, rootRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <div className={className} ref={rootRef}>
      {children}
    </div>
  );
}
