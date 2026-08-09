import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SafariCard from "@/components/SafariCard";
import { safaris } from "@/lib/content";

// Server component: entrance fades are pure CSS scroll-driven animations
// (.reveal in globals.css), so this section ships no client JavaScript.
export default function FeaturedSafaris() {
  const featuredSafaris = safaris.filter((s) => s.featured);

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="reveal text-center mb-12">
          <span className="text-savanna text-sm uppercase tracking-[0.3em] mb-4 block">
            Our Safaris
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Featured Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular safari adventures, each meticulously crafted to
            deliver unforgettable wildlife encounters and authentic African experiences.
          </p>
        </div>

        {/* Safari Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSafaris.map((safari, index) => (
            <SafariCard key={safari.id} safari={safari} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="reveal text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-2 border-savanna text-savanna hover:bg-savanna hover:text-white uppercase tracking-widest text-sm rounded-lg"
          >
            <Link href="/safaris">
              View All Safaris
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
