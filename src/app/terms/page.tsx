import { Metadata } from "next";
import Link from "next/link";
import { FileText, CreditCard, Calendar, Shield, AlertTriangle, Scale, RefreshCw } from "lucide-react";
import { createBreadcrumbSchema } from "@/lib/schema";
import { companyInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Cluster Leaf Safaris terms and conditions. Read our booking terms, cancellation policy, and service agreements before planning your safari.",
  alternates: {
    canonical: 'https://www.clusterleafsafaris.com/terms',
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Terms of Service", url: "/terms" },
]);

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: `By booking a safari or using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.

These terms apply to all visitors, users, and clients of Cluster Leaf Safaris. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any changes.`,
  },
  {
    icon: Calendar,
    title: "Booking & Reservations",
    content: `• A 30% deposit is required to confirm your booking
• Full payment is due 60 days before departure
• Bookings made within 60 days of departure require full payment
• We reserve the right to cancel bookings that are not paid in full by the due date
• All prices are in USD unless otherwise specified
• Prices include VAT where applicable`,
  },
  {
    icon: RefreshCw,
    title: "Cancellation Policy",
    content: `Our cancellation policy is as follows:

• 90+ days before departure: Full refund minus 10% administrative fee
• 60-89 days before departure: 50% refund
• 30-59 days before departure: 25% refund
• Less than 30 days before departure: No refund

We strongly recommend purchasing comprehensive travel insurance that includes trip cancellation coverage. In cases of force majeure (natural disasters, political unrest, pandemics), we will work with you to reschedule your safari.`,
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    content: `We accept the following payment methods:

• Bank transfer (preferred for international bookings)
• Credit cards (Visa, Mastercard) - 3% processing fee may apply
• PayPal - processing fees apply

All payments must be made in full before the safari departure date. We will provide payment confirmation and receipts for all transactions.`,
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    content: `Comprehensive travel insurance is mandatory for all safaris. Your insurance must cover:

• Trip cancellation and interruption
• Medical expenses and emergency evacuation
• Baggage loss and delay
• Personal liability

We can recommend reputable insurance providers upon request. Proof of insurance may be required before departure.`,
  },
  {
    icon: AlertTriangle,
    title: "Liability & Responsibility",
    content: `• Cluster Leaf Safaris acts as an agent for various service providers
• We are not liable for injuries, damages, or losses during your safari
• Participants assume all risks associated with safari activities
• We recommend reasonable precautions for personal safety
• We are not responsible for delays or changes due to circumstances beyond our control
• Our liability is limited to the amount paid for the safari

Guests are responsible for ensuring they have valid passports, visas, and required vaccinations.`,
  },
  {
    icon: Scale,
    title: "Governing Law",
    content: `These Terms of Service are governed by the laws of the Republic of Namibia. Any disputes arising from these terms or your safari booking shall be resolved in the courts of Namibia.

By making a booking, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-sunset/20 to-charcoal" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before booking your safari adventure.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12 p-6 bg-off-white/50 rounded-2xl border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                Welcome to <strong>Cluster Leaf Safaris</strong>. These Terms of Service ("Terms") govern your 
                use of our website and safari services. By booking a safari or using our services, you agree 
                to these terms in full.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 2025
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-sunset/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sunset/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-sunset" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-xl text-charcoal mb-4">
                        {section.title}
                      </h2>
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-12 p-6 md:p-8 bg-savanna/5 rounded-2xl border border-savanna/10">
              <h2 className="font-serif text-xl text-charcoal mb-4">
                Important Notice
              </h2>
              <p className="text-gray-600 mb-4">
                Safari travel involves inherent risks. While we take every precaution to ensure your safety, 
                wildlife and nature can be unpredictable. By booking with us, you acknowledge these risks 
                and agree to follow all safety instructions provided by your guide.
              </p>
              <p className="text-gray-600">
                We are committed to providing you with an unforgettable African adventure. 
                If you have any questions about these terms, please contact us before making your booking.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-8 p-6 bg-charcoal rounded-2xl text-white">
              <h2 className="font-serif text-xl mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-300 mb-4">
                Contact us for clarification on any aspect of our terms and conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Call {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-savanna hover:text-savanna-dark transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
