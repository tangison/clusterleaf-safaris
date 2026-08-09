import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import FeaturedSafaris from "@/components/FeaturedSafaris";
import AboutSnippet from "@/components/AboutSnippet";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import SocialProofSection from "@/components/SocialProofSection";
import { createBreadcrumbSchema } from "@/lib/schema";

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
      <link
        rel="preload"
        as="image"
        href="/assets/images/gallery/landscape-delta-aerial.webp"
        type="image/webp"
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
