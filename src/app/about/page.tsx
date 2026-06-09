import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Users, Leaf, Compass, Download, FileText } from "lucide-react";
import { founderInfo, companyInfo } from "@/lib/content";
import CTASection from "@/components/CTASection";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cluster Leaf Safaris and our founder Taedza Mtambanengwe (Mr. T). Owner-operated safaris delivering authentic African experiences since 2015.",
  alternates: {
    canonical: 'https://www.clusterleafsafaris.com/about',
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
]);

const philosophyPoints = [
  {
    icon: Compass,
    title: "Bespoke Itineraries",
    description:
      "No cookie-cutter tours. Every safari is tailored to your interests, pace, and bucket list dreams.",
  },
  {
    icon: Leaf,
    title: "Conservation Focus",
    description:
      "We support local communities and wildlife preservation, ensuring tourism benefits both people and nature.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description:
      "Every safari is owner-operated – you travel with Mr. T, not a stranger. Your guide is your host.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/gallery/with-chiara.webp"
            alt="Cluster Leaf Safaris"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Born from a love of the wild, driven by a passion for authentic
            African experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-savanna text-sm uppercase tracking-[0.3em] mb-4 block">
                Since {companyInfo.founded}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                Born from a Love of the Wild
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6 leading-relaxed">
                Cluster Leaf Safaris was established in {companyInfo.founded} by{" "}
                {founderInfo.name}, known to guests as &ldquo;{founderInfo.nickname}
                .&rdquo; What started as a passion for sharing the wonders of
                Southern Africa has grown into a premier safari operation
                specializing in personalized, conservation-focused adventures.
              </p>
              <p className="mb-6 leading-relaxed">
                With over {companyInfo.yearsExperience} years of experience and{" "}
                {companyInfo.toursCompleted}+ successful tours, we&apos;ve had the
                privilege of introducing countless travelers to the magic of
                Africa. From the towering dunes of Namibia to the wildlife-rich
                plains of Botswana, from the thundering Victoria Falls to the
                pristine wilderness of Zambia – every journey is crafted with care
                and expertise.
              </p>
              <p className="leading-relaxed">
                Our philosophy of &ldquo;Bush HDTV&rdquo; ensures you experience
                the real Africa – not a curated version designed for tourists. This
                is nature in its raw, authentic beauty, delivered with expert
                storytelling that brings every landscape and encounter to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={founderInfo.image}
                  alt={founderInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-savanna/10 -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="text-savanna text-sm uppercase tracking-[0.3em] mb-4 block">
                Meet Your Guide
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                {founderInfo.name}
              </h2>
              <p className="text-lg text-savanna mb-6">{founderInfo.title}</p>

              <div className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                {founderInfo.bio}
              </div>

              <div className="mb-8">
                <h3 className="font-serif text-lg text-charcoal mb-4">
                  Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {founderInfo.credentials.map((credential) => (
                    <div
                      key={credential}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <CheckCircle className="h-5 w-5 text-savanna flex-shrink-0" />
                      <span className="text-sm">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg text-charcoal mb-3">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {founderInfo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-desert/30 text-charcoal text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-savanna text-sm uppercase tracking-[0.3em] mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in delivering authentic African experiences that benefit
              both our guests and the communities we visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((point) => (
              <div
                key={point.title}
                className="text-center p-8 border border-gray-100 hover:border-savanna/20 transition-colors"
              >
                <point.icon className="h-12 w-12 text-savanna mx-auto mb-6" />
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Download Section */}
      <section className="py-16 bg-off-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* PDF Icon */}
                <div className="w-20 h-20 bg-savanna/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-10 h-10 text-savanna" />
                </div>
                
                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    Company Profile 2026
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Download our comprehensive company profile to learn more about our services, 
                    safari packages, and what makes Cluster Leaf Safaris your ideal African adventure partner.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="text-xs text-gray-400">PDF Format</span>
                    <span className="text-xs text-gray-300">|</span>
                    <span className="text-xs text-gray-400">Company Overview</span>
                    <span className="text-xs text-gray-300">|</span>
                    <span className="text-xs text-gray-400">Safari Packages</span>
                  </div>
                </div>
                
                {/* Download Button */}
                <a
                  href="/assets/documents/company-profile.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-4 bg-savanna text-white font-semibold rounded-full shadow-sm shadow-savanna/20 hover:bg-savanna/90 hover:shadow-md transition-all duration-300 flex-shrink-0"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-savanna">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6">
              &ldquo;Every safari is owner-operated – you travel with me, not a
              stranger. I&apos;m not just your guide; I&apos;m your host, your
              storyteller, and your window into the real Africa.&rdquo;
            </p>
            <footer className="text-desert">
              — {founderInfo.nickname}, Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
