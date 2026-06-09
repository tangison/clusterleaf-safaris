import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations, safaris } from "@/lib/content";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore the stunning destinations of Southern Africa - Namibia, Botswana, Zimbabwe, and Zambia. From the Namib Desert to Victoria Falls.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-savanna">
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
            Destinations
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore the wild wonders of Southern Africa
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination) => {
              const relatedSafaris = safaris.filter((s) =>
                s.countries.includes(destination.country)
              );

              return (
                <div
                  key={destination.id}
                  className="bg-white overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="font-serif text-3xl text-white mb-2">
                        {destination.name}
                      </h2>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{destination.country}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {destination.description}
                    </p>

                    {/* Why Visit */}
                    <div className="mb-6">
                      <h3 className="font-serif text-lg text-charcoal mb-3">
                        Why Visit
                      </h3>
                      <ul className="space-y-2">
                        {destination.whyVisit.slice(0, 3).map((reason) => (
                          <li
                            key={reason}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-savanna mt-1">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Time to Visit */}
                    <div className="mb-6 p-4 bg-off-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-savanna" />
                        <span className="font-medium text-charcoal text-sm">
                          Best Time to Visit
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {destination.bestTimeToVisit}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="font-serif text-lg text-charcoal mb-3">
                        Highlights
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-desert/30 text-charcoal text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Related Safaris */}
                    {relatedSafaris.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-3">
                          {relatedSafaris.length} safari
                          {relatedSafaris.length > 1 ? "s" : ""} available
                        </p>
                        <Button
                          asChild
                          className="w-full bg-savanna hover:bg-savanna-dark text-white uppercase tracking-wider text-sm rounded-lg"
                        >
                          <Link href={`/safaris`}>
                            View Safaris
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
