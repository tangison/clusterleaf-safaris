"use client";

import { useState, useMemo, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface WhatsAppWidgetProps {
  phoneNumber: string;
  defaultMessage?: string;
}

/**
 * WhatsApp Widget - Appears conditionally at "critical moments"
 * 
 * Conditions for showing:
 * 1. User has scrolled past 50% of the page (engagement indicator)
 * 2. Or user has been on the page for 30+ seconds (considering their options)
 * 3. Not on contact page, home page, or legal pages
 * 
 * Position: Left side of the screen (opposite to scroll-to-top)
 */
export default function WhatsAppWidget({
  phoneNumber = "264817378313",
  defaultMessage = "Hi! I'm interested in learning more about your safaris.",
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Check if we should hide on this page
  const hideOnPage = useMemo(() => {
    const hidePaths = ["/", "/contact", "/privacy", "/terms"];
    return hidePaths.some(
      (path) => pathname === path || pathname.startsWith(path + "/")
    );
  }, [pathname]);

  // Critical moment detection
  useEffect(() => {
    if (hideOnPage || dismissed) return;

    // Condition 1: Show after 50% scroll
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent > 50 && !showWidget) {
        setShowWidget(true);
      }
    };

    // Condition 2: Show after 30 seconds on page (user is considering options)
    const timeTimeout = setTimeout(() => {
      if (!showWidget) {
        setShowWidget(true);
      }
    }, 30000);

    // Start listening for scroll
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeTimeout);
    };
  }, [hideOnPage, dismissed, showWidget]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setIsOpen(false);
  };

  // Don't render if hidden or dismissed
  if (hideOnPage || dismissed || !showWidget) return null;

  return (
    <div className="fixed left-4 sm:left-6 bottom-20 sm:bottom-24 z-40">
      {/* Expanded Chat Preview */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-xl shadow-xl w-[240px] sm:w-[280px] animate-in slide-in-from-bottom-2 duration-200 border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-xs">Cluster Leaf Safaris</p>
                <p className="text-[10px] text-white/80">Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>

          {/* Message Content */}
          <div className="p-3 space-y-2">
            <div className="bg-gray-100 rounded-xl rounded-tl-none p-2.5">
              <p className="text-xs text-gray-700">
                Ready to plan your safari?
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2.5 rounded-full text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={14} />
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Floating Button - Smaller */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {/* WhatsApp Icon */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
}
