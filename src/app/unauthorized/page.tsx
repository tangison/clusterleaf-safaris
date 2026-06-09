"use client";

import Link from "next/link";
import { Home, Lock, Shield, ArrowLeft } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-charcoal to-charcoal/95 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-savanna/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-sunset/10 rounded-full blur-3xl" />
        {/* Safari pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Error Code */}
        <div className="relative mb-6">
          <span 
            className="font-serif text-[150px] sm:text-[200px] font-bold text-white/5 select-none leading-none"
            aria-hidden="true"
          >
            401
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-savanna/30 to-sunset/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Lock className="w-16 h-16 text-savanna" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Access Restricted
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          This area of the reserve is restricted to authorized personnel. 
          Please sign in or contact us if you believe this is an error.
        </p>

        {/* Shield Icon Animation */}
        <div className="mb-8">
          <Shield className="w-12 h-12 text-savanna/40 mx-auto animate-pulse" strokeWidth={1} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-savanna text-white font-semibold rounded-full hover:bg-savanna-dark transition-all duration-300 shadow-lg shadow-savanna/30"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </div>
    </div>
  );
}
