"use client";

import { ReactNode } from "react";
import ReverseParallax from "./ReverseParallax";

interface Layer {
  content: ReactNode;
  speed: number;
  direction?: "up" | "down" | "reverse";
  className?: string;
}

interface LayeredParallaxProps {
  layers: Layer[];
  className?: string;
}

/**
 * Layered Parallax Effect Component
 *
 * Creates multi-layer parallax effects for hero sections or featured areas.
 * Each layer moves at a different speed, creating depth and visual interest.
 *
 * Example usage:
 * ```tsx
 * <LayeredParallax
 *   layers={[
 *     { content: <BackgroundImage />, speed: 0.2, direction: 'reverse' },
 *     { content: <MidgroundElements />, speed: 0.5, direction: 'up' },
 *     { content: <ForegroundContent />, speed: 0.8, direction: 'up' },
 *   ]}
 * />
 * ```
 */
export default function LayeredParallax({
  layers,
  className = "",
}: LayeredParallaxProps) {
  return (
    <div className={`relative ${className}`}>
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{ zIndex: index }}
        >
          <ReverseParallax
            speed={layer.speed}
            direction={layer.direction || "up"}
            className={`w-full h-full ${layer.className || ""}`}
          >
            {layer.content}
          </ReverseParallax>
        </div>
      ))}
    </div>
  );
}
