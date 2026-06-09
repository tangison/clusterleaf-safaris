"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RefreshCw, Home, Mail, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-sunset/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-savanna/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-desert/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Error Code */}
        <div className="relative mb-6">
          <span 
            className="font-serif text-[180px] sm:text-[220px] font-bold text-sunset/10 select-none leading-none"
            aria-hidden="true"
          >
            500
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sunset/20 to-savanna/20 flex items-center justify-center backdrop-blur-sm">
              <AlertTriangle className="w-14 h-14 text-sunset animate-pulse" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
          Unexpected Conditions
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Our safari camp has encountered some unexpected conditions. 
          Our team has been notified and is working to resolve this. Please try again shortly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button 
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sunset text-white font-semibold rounded-full hover:bg-sunset-dark transition-all duration-300 shadow-lg shadow-sunset/20"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="px-8 py-4 rounded-full border-2 border-savanna text-savanna hover:bg-savanna hover:text-white transition-all duration-300"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 max-w-md mx-auto">
          <p className="text-sm text-gray-500 mb-3">
            If the problem persists, contact us at:
          </p>
          <a
            href="mailto:clusterleaf@outlook.com"
            className="inline-flex items-center gap-2 text-savanna hover:text-savanna-dark transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            clusterleaf@outlook.com
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Reference: {error.digest || "No error reference available"}
          </p>
        </div>
      </div>
    </div>
  );
}
