import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Database, Cookie, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cluster Leaf Safaris privacy policy. Learn how we collect, use, and protect your personal information when you book a safari with us.",
};

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, make a booking, or subscribe to our newsletter. This may include:
    
• Personal information (name, email address, phone number, country of residence)
• Booking details (travel dates, number of travelers, special requirements)
• Payment information (processed securely through our payment partners)
• Communication preferences and history`,
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Process and manage your safari bookings
• Send you booking confirmations and travel documents
• Respond to your inquiries and provide customer support
• Send promotional communications (only with your consent)
• Improve our services and website experience
• Comply with legal obligations`,
  },
  {
    icon: Shield,
    title: "Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With service providers who assist in operating our business (lodges, airlines, payment processors)
• When required by law or to protect our rights
• With your explicit consent for specific purposes
• In connection with a business transfer or acquisition`,
  },
  {
    icon: Lock,
    title: "Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information, including:

• SSL/TLS encryption for all data transmissions
• Secure payment processing through trusted providers
• Regular security assessments and updates
• Limited access to personal data on a need-to-know basis

However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    icon: Cookie,
    title: "Cookies and Tracking",
    content: `Our website uses cookies and similar technologies to:

• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Improve website functionality and user experience
• Enable certain features and services

You can control cookies through your browser settings. Disabling cookies may affect some website functionality.`,
  },
  {
    icon: Mail,
    title: "Your Rights",
    content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Opt out of marketing communications at any time
• Lodge a complaint with a supervisory authority

To exercise these rights, please contact us at clusterleaf@outlook.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[35vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-savanna/20 to-charcoal" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                <strong>Cluster Leaf Safaris</strong> ("we", "us", or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our safari services. Please read this policy carefully.
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
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-savanna/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-savanna/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-savanna" />
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

            {/* Contact Section */}
            <div className="mt-12 p-6 md:p-8 bg-savanna/5 rounded-2xl border border-savanna/10">
              <h2 className="font-serif text-xl text-charcoal mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Cluster Leaf Safaris</strong></p>
                <p>12 Klein Hamburg Avis, Windhoek, Namibia</p>
                <p>Email: <a href="mailto:clusterleaf@outlook.com" className="text-savanna hover:underline">clusterleaf@outlook.com</a></p>
                <p>Phone: <a href="tel:+264817378313" className="text-savanna hover:underline">+264 81 737 8313</a></p>
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
