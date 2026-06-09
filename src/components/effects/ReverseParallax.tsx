"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ReverseParallaxProps {
  children: ReactNode;
  speed?: number; // 0.5 = half speed, -0.5 = reverse half speed
  className?: string;
  direction?: "up" | "down" | "reverse";
}

/**
 * Reverse Parallax Effect Component
 *
 * Creates a unique "ascension" feeling where:
 * - Foreground content scrolls normally
 * - Mid/background elements move at different speeds
 * - Reverse direction creates depth illusion
 *
 * Speed guide:
 * - 0.5 = half speed (slower than scroll)
 * - 1.0 = normal scroll speed
 * - -0.5 = reverse direction at half speed
 */
export default function ReverseParallax({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
}: ReverseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Apply different speeds based on direction
  const speedMultiplier = direction === "reverse" ? -speed : speed;
  const y = useTransform(scrollYProgress, [0, 1], [0, speedMultiplier * 300]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}
