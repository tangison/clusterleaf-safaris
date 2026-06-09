"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Section Reveal Animation Component
 *
 * Reveals content with directional animation when scrolled into view.
 * Creates engaging entrance effects for sections.
 *
 * Directions:
 * - up: Content slides up from below (default, most common)
 * - down: Content slides down from above
 * - left: Content slides in from the right
 * - right: Content slides in from the left
 */
export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: SectionRevealProps) {
  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 },
  };

  const animateVariant = {
    y: 0,
    x: 0,
    opacity: 1,
  };

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={animateVariant}
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
