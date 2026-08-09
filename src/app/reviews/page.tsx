import { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { testimonials, companyInfo } from "@/lib/content";
import CTASection from "@/components/CTASection";
import ReviewBadge from "@/components/widgets/ReviewBadge";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what our guests say about their Cluster Leaf Safaris experience. 5-star reviews from travelers around the world.",
  alternates: {
    canonical: 'https://www.clusterleafsafaris.com/reviews',
  },
};

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Reviews", url: "/reviews" },
]);

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-savanna">
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
            Guest Reviews
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Discover why travelers from around the world choose Cluster Leaf
            Safaris
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-sunset fill-sunset" />
              ))}
            </div>
            <span className="text-white text-lg font-medium ml-2">
              {companyInfo.rating}/5
            </span>
            <span className="text-white/70 ml-2">
              based on {testimonials.length}+ reviews
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif text-charcoal mb-2">
                {companyInfo.yearsExperience}+
              </p>
              <p className="text-gray-500">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-charcoal mb-2">
                {companyInfo.toursCompleted}+
              </p>
              <p className="text-gray-500">Happy Travelers</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-charcoal mb-2">100%</p>
              <p className="text-gray-500">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 relative hover:shadow-lg transition-shadow"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-savanna/10" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-sunset fill-sunset"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-medium text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.country}</p>
                  <p className="text-sm text-savanna mt-1">{testimonial.tour}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Platform Listings */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-3">
            Verified on Independent Platforms
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Find our live listings on independent safari review platforms.
            Ratings shown as published by each platform.
          </p>
          <ReviewBadge />
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-16 bg-savanna">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Ready to Write Your Own Story?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join our family of happy travelers and create unforgettable memories in
            Africa.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-sunset hover:bg-sunset-dark text-white uppercase tracking-widest text-sm transition-colors"
          >
            Plan Your Safari
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
