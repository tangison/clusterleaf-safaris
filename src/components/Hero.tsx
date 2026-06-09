"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { companyInfo } from "@/lib/content";

const heroVideos = [
  "/assets/videos/okavango-delta-aerial.mp4",
  "/assets/videos/sossusvlei-red-dunes-v2.mp4",
  "/assets/videos/safari-vehicle-sunset-v2.mp4",
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000); // Rotate every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroVideos[currentVideo]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover opacity-60"
          >
            <source src={heroVideos[currentVideo]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sunset font-sans text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-semibold"
          >
            {companyInfo.subTagline}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold mb-6 text-shadow uppercase"
          >
            Africa <span className="text-secondary-sand font-bold">Awaits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Experience the wild heart of Southern Africa with expert guide{" "}
            <span className="text-sunset font-medium">Mr. T</span>. Personalized
            safaris across Namibia, Botswana, Zimbabwe, and Zambia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-sunset hover:bg-sunset-dark text-white uppercase tracking-widest px-10 py-7 text-sm rounded-none border border-sunset transition-all duration-300"
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
          </motion.div>
        </motion.div>
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
    </section>
  );
}
