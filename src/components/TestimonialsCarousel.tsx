"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/content";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-savanna py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover why travelers from around the world choose Cluster Leaf Safaris
            for their African adventure
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-4 left-0 h-12 w-12 text-white/20" />

          {/* Testimonial Content: keyed remount + CSS swap animation replaces
              framer-motion AnimatePresence (see .swap-in in globals.css) */}
          <div
            key={currentIndex}
            className="swap-in text-center px-8 md:px-16"
          >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-sunset fill-sunset"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-serif italic">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mb-2">
                <p className="text-white font-medium text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-white/80 text-sm">
                  {currentTestimonial.country} • {currentTestimonial.date}
                </p>
                <p className="text-desert text-sm mt-1">
                  {currentTestimonial.tour}
                </p>
              </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent rounded-full h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-6 w-6 flex items-center justify-center"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-sunset"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
