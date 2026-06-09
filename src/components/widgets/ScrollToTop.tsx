"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Scroll to Top Widget
 * 
 * Position: Right side of the screen (opposite to WhatsApp)
 * Size: Small, unobtrusive
 * Show condition: After scrolling 400px
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40
        w-10 h-10 sm:w-11 sm:h-11
        bg-white border border-gray-200
        rounded-full shadow-md hover:shadow-lg
        flex items-center justify-center
        transition-all duration-300
        hover:bg-savanna hover:border-savanna
        animate-in fade-in slide-in-from-bottom-4 duration-300
        group
      "
      aria-label="Scroll to top"
    >
      <ArrowUp
        size={18}
        className="text-gray-500 group-hover:text-white transition-colors"
      />
    </button>
  );
}
