import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { founderInfo, companyInfo } from "@/lib/content";

// Server component: entrance animations are pure CSS scroll-driven
// animations (.reveal-left/.reveal-right in globals.css), so this section
// ships no client JavaScript.
export default function AboutSnippet() {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src={founderInfo.image}
                alt={founderInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-savanna/20 -z-10" />
          </div>

          {/* Content */}
          <div className="reveal-right">
            <span className="text-savanna text-sm uppercase tracking-[0.3em] mb-4 block">
              Your Guide
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Born from a Love of the Wild
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in {companyInfo.founded} by {founderInfo.name}, known to guests
              as &ldquo;{founderInfo.nickname},&rdquo; Cluster Leaf Safaris delivers
              personalized, conservation-focused adventures across Southern Africa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              A commercial pilot by training, born in Zambia, raised in Zimbabwe, and
              now calling Namibia home, {founderInfo.nickname} brings a unique
              perspective to African safari guiding. His philosophy of &ldquo;Bush
              HDTV&rdquo; delivers real, immersive nature experiences with expert
              storytelling.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {founderInfo.credentials.map((credential) => (
                <span
                  key={credential}
                  className="px-4 py-2 bg-desert/30 text-charcoal text-sm"
                >
                  {credential}
                </span>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="border-2 border-savanna text-savanna hover:bg-savanna hover:text-white uppercase tracking-widest text-sm rounded-lg"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
