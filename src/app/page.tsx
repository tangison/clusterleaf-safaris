import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import FeaturedSafaris from "@/components/FeaturedSafaris";
import AboutSnippet from "@/components/AboutSnippet";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import { createBreadcrumbSchema } from "@/lib/schema";

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

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
