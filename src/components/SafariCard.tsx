import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import type { Safari } from "@/lib/content";

interface SafariCardProps {
  safari: Safari;
  index?: number;
}

// Server component: ships no client JavaScript.
export default function SafariCard({ safari }: SafariCardProps) {
  return (
    <div
      className="group relative bg-white overflow-hidden rounded-3xl neu-card card-hover"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <Image
          src={safari.image}
          alt={safari.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Country Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {safari.countries.map((country) => (
            <span
              key={country}
              className="px-3 py-1 bg-savanna/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded-full"
            >
              {country}
            </span>
          ))}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 glass-strong px-4 py-2 rounded-full">
          <span className="text-sm text-gray-600">From</span>
          <span className="text-xl font-serif font-bold text-charcoal ml-1">
            ${safari.priceFrom.toLocaleString()}
          </span>
          <span className="text-sm text-gray-600">pp</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-charcoal mb-3 group-hover:text-savanna transition-colors">
          {safari.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{safari.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{safari.countries.length} Country</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {safari.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {safari.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1 bg-desert/30 text-charcoal text-xs rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        <Button
          asChild
          className="w-full btn-primary uppercase tracking-wider text-sm"
        >
          <Link href={`/safaris/${safari.slug}`}>
            View Itinerary
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
