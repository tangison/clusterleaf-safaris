import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { companyInfo } from "@/lib/content";

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* SafariBookings Review CTA */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-3">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 mb-8">
            Rated 5.0/5 by verified safari travelers
          </p>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-lg font-semibold text-charcoal">5.0</span>
          </div>
          <a
            href={companyInfo.socialLinks.safariBookings}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-savanna text-white font-semibold rounded-full hover:bg-savanna-dark transition-all duration-300 shadow-lg shadow-savanna/20"
          >
            Read Our Reviews on SafariBookings
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Social Follow + NTB Badge Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Social Follow */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Follow Our Adventures
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Cluster Leaf Safaris on Instagram"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Cluster Leaf Safaris on Facebook"
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-gray-200" />

          {/* NTB Registered Badge */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Registered Tourism Operator
            </p>
            <a
              href={companyInfo.socialLinks.visitNamibia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/assets/images/ntb-registered.png"
                alt="Registered with the Namibia Tourism Board. Verified listing on Visit Namibia."
                width={120}
                height={120}
                className="w-[120px] h-auto"
                loading="lazy"
              />
            </a>
            <p className="text-xs text-gray-500 mt-2">
              <a
                href={companyInfo.socialLinks.visitNamibia}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-savanna transition-colors"
              >
                Visit Namibia Directory
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
