"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { companyInfo } from "@/lib/content";

const heroVideos = [
  "/assets/videos/okavango-delta-aerial.mp4",
  "/assets/videos/sossusvlei-red-dunes-v2.mp4",
  "/assets/videos/safari-vehicle-sunset-v2.mp4",
];

const heroPosters = [
  "/assets/images/hero/hero-delta.jpg",
  "/assets/images/hero/hero-dunes.jpg",
  "/assets/images/hero/hero-silhouette.jpg",
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Poster-first LCP: upgrade to the video carousel only on tablet/desktop viewports
    if (window.matchMedia("(min-width: 768px)").matches) {
      setShowVideo(true);
    }
  }, []);

  useEffect(() => {
    if (!showVideo) return;
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000); // Rotate every 8 seconds
    return () => clearInterval(timer);
  }, [showVideo]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background: static poster image on mobile (LCP friendly), video
          carousel on >=768px. Plain CSS fade only; no JS animation library on
          the critical path. The container remounts per video for the fade. */}
      <div
        key={showVideo ? heroVideos[currentVideo] : "poster"}
        className="absolute inset-0 hero-bg-fade"
      >
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroPosters[currentVideo]}
            aria-hidden="true"
            className="w-full h-full object-cover opacity-60"
          >
            <source src={heroVideos[currentVideo]} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={heroPosters[currentVideo]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content: rendered statically with full opacity in SSR HTML so the hero
          text is the LCP element painted at first paint, not gated behind JS
          hydration and timed entrance animations (was: +3.1s render delay). */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sunset font-sans text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-semibold">
            {companyInfo.subTagline}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold mb-6 text-shadow uppercase">
            Africa <span className="text-secondary-sand font-bold">Awaits</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the wild heart of Southern Africa with expert guide{" "}
            <span className="text-sunset font-medium">Mr. T</span>. Personalized
            safaris across Namibia, Botswana, Zimbabwe, and Zambia.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-sunset-dark hover:bg-sunset text-white uppercase tracking-widest px-10 py-7 text-sm rounded-none border border-sunset-dark transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center">
                Plan Your Safari
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 uppercase tracking-widest px-10 py-7 text-sm rounded-none backdrop-blur-sm"
            >
              <Link href="/safaris" className="flex items-center">
                Explore Safaris
                <Play className="ml-2 h-4 w-4 fill-current" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentVideo(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentVideo ? "w-10 bg-sunset" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Plain CSS keyframes: replaces the framer-motion crossfade so the
          animation library stays out of the initial JS bundle entirely. */}
      <style jsx>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .hero-bg-fade {
          animation: heroFadeIn 1.2s ease-out both;
        }
      `}</style>
    </section>
  );
}
