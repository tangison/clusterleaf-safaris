import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Server component: the entrance fade is a pure CSS scroll-driven animation
// (.reveal in globals.css), so this section ships no client JavaScript.
export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/gallery/himba-experience.webp"
          alt="Safari Experience"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="reveal max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Ready to Experience Africa?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let us craft your perfect safari adventure. Every journey is
            personalized to your interests, timeline, and budget. Your African
            dream awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-sunset-dark hover:bg-sunset text-white uppercase tracking-widest px-10 py-7 text-sm rounded-lg"
            >
              <Link href="/contact">
                Get a Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal uppercase tracking-widest px-10 py-7 text-sm rounded-lg bg-transparent"
            >
              <Link href="/safaris">Browse All Safaris</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
