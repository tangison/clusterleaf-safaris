"use client";

import FAQSection from "@/components/sections/FAQSection";
import { faqItems } from "@/lib/faqData";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { createFAQSchema, createBreadcrumbSchema } from "@/lib/schema";

const faqSchema = createFAQSchema(faqItems.map(item => ({ question: item.question, answer: item.answer })));
const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "FAQ", url: "/faq" },
]);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-savanna">
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about planning your African safari adventure
          </p>
        </div>
      </section>

      {/* Full FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FAQSection
            items={faqItems}
            showSearch={true}
            showCategories={true}
            defaultOpenItems={2}
          />
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-off-white/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is here to help you plan the perfect safari. Reach out and we will respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-savanna text-white rounded-full font-semibold hover:bg-savanna/90 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/264817378313"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#128C7E] transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
