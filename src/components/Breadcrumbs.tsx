"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { createBreadcrumbSchema } from "@/lib/schema";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);

  // Map path segments to readable labels
  const pathLabels: Record<string, string> = {
    safaris: "Safaris",
    destinations: "Destinations",
    gallery: "Gallery",
    about: "About Us",
    contact: "Contact",
    blog: "Blog",
    reviews: "Reviews",
    faq: "FAQ",
    // Safari slugs
    "10-day-botswana-glamping": "10-Day Botswana Glamping",
    "12-day-classic-namibia": "12-Day Classic Namibia",
    "13-day-photogenic-namibia": "13-Day Photogenic Namibia",
    "14-day-namibia-botswana-victoria-falls": "14-Day Namibia, Botswana & Victoria Falls",
    "7-day-sossusvlei-etal-palms": "7-Day Sossusvlei & Etal Palms",
    "victoria-falls-chobe-combination": "Victoria Falls & Chobe",
  };

  const breadcrumbs = paths.map((path, index) => {
    const href = "/" + paths.slice(0, index + 1).join("/");
    const label = pathLabels[path] || path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return { href, label };
  });

  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    ...breadcrumbs.map((crumb) => ({
      name: crumb.label,
      url: crumb.href,
    })),
  ]);

  return (
    <>
      {/* Schema.org for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <nav aria-label="Breadcrumb" className="py-4 px-6 max-w-7xl mx-auto">
        <ol className="flex items-center gap-1.5 text-sm flex-wrap">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-500 hover:text-savanna transition-colors"
            >
              <Home size={16} />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              <ChevronRight size={14} className="text-gray-300" />
              {index === breadcrumbs.length - 1 ? (
                <span
                  className="text-charcoal font-medium truncate max-w-[200px]"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-gray-500 hover:text-savanna transition-colors truncate max-w-[150px]"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
