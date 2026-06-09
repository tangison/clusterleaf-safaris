import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  MapPin,
  DollarSign,
  Check,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { safaris, companyInfo } from "@/lib/content";
import CTASection from "@/components/CTASection";
import { createSafariSchema, createBreadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const safari = safaris.find((s) => s.slug === slug);

  if (!safari) {
    return {
      title: "Safari Not Found",
    };
  }

  return {
    title: safari.title,
    description: safari.description,
    alternates: {
      canonical: `https://www.clusterleafsafaris.com/safaris/${safari.slug}`,
    },
    openGraph: {
      title: `${safari.title} | Cluster Leaf Safaris`,
      description: safari.description,
      url: `https://www.clusterleafsafaris.com/safaris/${safari.slug}`,
      images: [safari.image],
    },
  };
}

export async function generateStaticParams() {
  return safaris.map((safari) => ({
    slug: safari.slug,
  }));
}

export default async function SafariDetailPage({ params }: Props) {
  const { slug } = await params;
  const safari = safaris.find((s) => s.slug === slug);

  if (!safari) {
    notFound();
  }

  const safariProductSchema = createSafariSchema({
    name: safari.title,
    description: safari.description,
    duration: safari.duration,
    price: safari.priceFrom,
    currency: "USD",
    countries: safari.countries,
    slug: safari.slug,
    image: safari.image,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Safaris", url: "/safaris" },
    { name: safari.title, url: `/safaris/${safari.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safariProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={safari.image}
            alt={safari.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {safari.countries.map((country) => (
              <span
                key={country}
                className="px-3 py-1 bg-savanna text-white text-sm uppercase tracking-wider"
              >
                {country}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {safari.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{safari.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-white/20 text-sm">
                {safari.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif">
                From ${safari.priceFrom.toLocaleString()}
              </span>
              <span className="text-white/70">per person</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {safari.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {safari.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 p-4 bg-off-white"
                    >
                      <Check className="h-5 w-5 text-savanna flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Day-by-Day Itinerary
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {safari.itinerary.map((day) => (
                    <AccordionItem
                      key={day.day}
                      value={`day-${day.day}`}
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-12 h-12 flex items-center justify-center bg-savanna text-white font-serif text-lg">
                            {day.day}
                          </span>
                          <span className="font-serif text-lg text-charcoal">
                            {day.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pl-16">
                        <p className="text-gray-600 leading-relaxed">
                          {day.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal mb-6">
                    What&apos;s Included
                  </h2>
                  <ul className="space-y-3">
                    {safari.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-savanna flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-charcoal mb-6">
                    What&apos;s Not Included
                  </h2>
                  <ul className="space-y-3">
                    {safari.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-off-white p-8 border border-gray-100">
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-1">Starting from</p>
                  <p className="text-4xl font-serif text-charcoal">
                    ${safari.priceFrom.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">per person</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-savanna" />
                    <span>{safari.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-savanna" />
                    <span>{safari.countries.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-savanna font-medium">Difficulty:</span>
                    <span>{safari.difficulty}</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-sunset hover:bg-sunset-dark text-white uppercase tracking-widest py-6 rounded-lg"
                >
                  <Link href="/contact">Request This Safari</Link>
                </Button>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500 mb-2">Questions?</p>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-savanna hover:text-savanna-dark font-medium"
                  >
                    Call {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
