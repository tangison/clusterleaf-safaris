import Link from "next/link";
import { Home, Compass, Search, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-savanna/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-sunset/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-desert/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Error Code */}
        <div className="relative mb-6">
          <span 
            className="font-serif text-[180px] sm:text-[220px] font-bold text-savanna/10 select-none leading-none"
            aria-hidden="true"
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-savanna/20 to-sunset/20 flex items-center justify-center backdrop-blur-sm">
              <Compass className="w-14 h-14 text-savanna animate-pulse" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
          Trail Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The path you&apos;re looking for seems to have wandered off into the African bush. 
          Let&apos;s get you back on the right trail.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-savanna text-white font-semibold rounded-full hover:bg-savanna-dark transition-all duration-300 shadow-lg shadow-savanna/20"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            href="/safaris"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-savanna text-savanna font-semibold rounded-full hover:bg-savanna hover:text-white transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Explore Safaris
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-4 font-medium">Popular Destinations:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/destinations" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-off-white rounded-full text-sm text-charcoal hover:bg-savanna/10 hover:text-savanna transition-colors"
            >
              <MapPin className="w-4 h-4" />
              All Destinations
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-off-white rounded-full text-sm text-charcoal hover:bg-savanna/10 hover:text-savanna transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-off-white rounded-full text-sm text-charcoal hover:bg-savanna/10 hover:text-savanna transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
