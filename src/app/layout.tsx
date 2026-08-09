import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import WhatsAppWidget from "@/components/widgets/WhatsAppWidget";
import ScrollToTop from "@/components/widgets/ScrollToTop";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { companyInfo } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clusterleafsafaris.com"),
  title: {
    default: "Cluster Leaf Safaris | Custom Namibia Tours & Safaris",
    template: "%s | Cluster Leaf Safaris",
  },
  description:
    "Personalized, owner-operated safaris across Namibia, Botswana, Zimbabwe, and Zambia. Led by expert guide Taedza Mtambanengwe since 2015. Africa Awaits.",
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
  ],
  authors: [{ name: "Cluster Leaf Safaris" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Cluster Leaf Safaris | Custom Namibia Tours & Safaris",
    description:
      "Personalized, owner-operated safaris across Namibia, Botswana, Zimbabwe, and Zambia. Led by expert guide Taedza Mtambanengwe since 2015.",
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
    title: "Cluster Leaf Safaris | Custom Namibia Tours & Safaris",
    description:
      "Personalized, owner-operated safaris across Namibia, Botswana, Zimbabwe, and Zambia.",
    images: ["/assets/images/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md">
          Skip to main content
        </a>
        <div className="page-wrapper">
          <Navbar />
          <main id="main-content" className="page-content">{children}</main>
          <Footer />
        </div>
        <GrainOverlay />
        <Toaster />
        
        {/* WhatsApp Widget - Left side, appears conditionally */}
        <WhatsAppWidget
          phoneNumber={companyInfo.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}
          defaultMessage="Hi! I'm interested in learning more about your safaris."
        />
        
        {/* Scroll to Top Button - Right side, smaller */}
        <ScrollToTop />
      </body>
    </html>
  );
}
