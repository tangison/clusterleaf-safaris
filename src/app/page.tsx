import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { createBreadcrumbSchema } from "@/lib/schema";

// Below-fold sections hydrate lazily: their HTML is still server-rendered for
// SEO and content visibility, but their JS (incl. framer-motion) stays out of
// the initial bundle so script evaluation no longer blocks first paint/LCP.
const TrustSignals = dynamic(() => import("@/components/TrustSignals"));
const FeaturedSafaris = dynamic(() => import("@/components/FeaturedSafaris"));
const AboutSnippet = dynamic(() => import("@/components/AboutSnippet"));
const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel")
);
const SocialProofSection = dynamic(
  () => import("@/components/SocialProofSection")
);
const CTASection = dynamic(() => import("@/components/CTASection"));

export const metadata: Metadata = {
  title: "Cluster Leaf Safaris | Premium African Safari Experiences",
  description:
    "Owner-operated safaris across Namibia, Botswana, Zimbabwe & Zambia. Personalized adventures crafted by expert guide Taedza Mtambanengwe. Book your dream safari today.",
  keywords: [
    "Cluster Leaf Safaris",
    "Namibia safari",
    "Botswana safari",
    "Zimbabwe safari",
    "Zambia safari",
    "African safari",
    "guided tours",
    "Etosha National Park",
    "Okavango Delta",
    "Victoria Falls",
    "custom safari",
    "luxury safari",
    "Mr. T",
    "Taedza Mtambanengwe",
    "African safari booking",
    "personalized safari",
  ],
  openGraph: {
    title: "Cluster Leaf Safaris | Premium African Safari Experiences",
    description:
      "Owner-operated safaris across Namibia, Botswana, Zimbabwe & Zambia. Personalized adventures crafted by expert guide Taedza Mtambanengwe.",
    url: "https://www.clusterleafsafaris.com",
    siteName: "Cluster Leaf Safaris",
    type: "website",
    locale: "en_NA",
    images: [
      {
        url: "/assets/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Oryx at the red dunes of Sossusvlei, Cluster Leaf Safaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cluster Leaf Safaris | Premium African Safari Experiences",
    description:
      "Owner-operated safaris across Namibia, Botswana, Zimbabwe & Zambia. Personalized adventures crafted by expert guide Taedza Mtambanengwe.",
    images: ["/assets/images/og/og-default.jpg"],
  },
  alternates: {
    canonical: "https://www.clusterleafsafaris.com",
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Featured Safaris */}
      <FeaturedSafaris />

      {/* About Snippet */}
      <AboutSnippet />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Social Proof: SafariBookings, Social Follow, NTB Badge */}
      <SocialProofSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
