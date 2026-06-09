"use client";

import Link from "next/link";
import { Home, CloudOff, RefreshCw, Mail } from "lucide-react";

export default function BadGatewayPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-charcoal to-charcoal/95 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-desert/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-sunset/10 rounded-full blur-3xl" />
        {/* Storm effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-32 bg-gradient-to-b from-sunset/30 to-transparent opacity-50 animate-pulse" />
        <div className="absolute top-10 left-1/3 w-1 h-24 bg-gradient-to-b from-sunset/20 to-transparent opacity-30 animate-pulse delay-100" />
        <div className="absolute top-5 right-1/3 w-1.5 h-28 bg-gradient-to-b from-sunset/25 to-transparent opacity-40 animate-pulse delay-200" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Error Code */}
        <div className="relative mb-6">
          <span 
            className="font-serif text-[150px] sm:text-[200px] font-bold text-white/5 select-none leading-none"
            aria-hidden="true"
          >
            502
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-desert/30 to-sunset/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
              <CloudOff className="w-16 h-16 text-desert animate-bounce" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Storm at the Gate
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          A temporary disruption has occurred on our servers, 
          much like an unexpected African storm. Our team is working to restore service.
        </p>

        {/* Storm Animation */}
        <div className="mb-8 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-desert/40 animate-ping"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-desert text-white font-semibold rounded-full hover:bg-desert-dark transition-all duration-300 shadow-lg shadow-desert/30"
          >
            <RefreshCw className="w-5 h-5" />
            Retry Connection
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-md mx-auto">
          <p className="text-sm text-gray-500 mb-3">
            If this problem persists, please contact us:
          </p>
          <a
            href="mailto:clusterleaf@outlook.com"
            className="inline-flex items-center gap-2 text-savanna hover:text-savanna-light transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            clusterleaf@outlook.com
          </a>
          <p className="text-xs text-gray-500 mt-3">
            We appreciate your patience as we restore our services
          </p>
        </div>
      </div>
    </div>
  );
}
