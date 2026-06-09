"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Search, ArrowRight, Calendar, MapPin, FileText, Layout } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { safaris, destinations, blogPosts } from "@/lib/content";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SearchResult {
  type: "safari" | "destination" | "blog" | "page";
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  // Reset query when dialog closes using a callback pattern
  const handleOpenChange = useCallback((newOpen: boolean) => {
    if (!newOpen) {
      setQuery("");
    }
    onOpenChange(newOpen);
  }, [onOpenChange]);

  // Search results
  const results = useMemo((): SearchResult[] => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(" ").filter(Boolean);

    const matchesSearch = (text: string) =>
      searchTerms.some((term) => text.toLowerCase().includes(term));

    const searchResults: SearchResult[] = [];

    // Search safaris
    safaris.forEach((safari) => {
      const searchText = `${safari.title} ${safari.shortTitle} ${safari.description} ${safari.countries.join(" ")} ${safari.duration}`.toLowerCase();
      if (matchesSearch(searchText)) {
        searchResults.push({
          type: "safari",
          title: safari.shortTitle || safari.title,
          description: `${safari.duration} | ${safari.countries.join(", ")}`,
          href: `/safaris/${safari.slug}`,
          icon: <Calendar className="w-4 h-4 text-savanna" />,
        });
      }
    });

    // Search destinations
    destinations.forEach((dest) => {
      const whyVisitText = dest.whyVisit ? dest.whyVisit.join(" ") : "";
      const searchText = `${dest.name} ${dest.country} ${dest.description} ${whyVisitText}`.toLowerCase();
      if (matchesSearch(searchText)) {
        searchResults.push({
          type: "destination",
          title: dest.name,
          description: dest.country,
          href: `/destinations#${dest.slug}`,
          icon: <MapPin className="w-4 h-4 text-savanna" />,
        });
      }
    });

    // Search blog posts
    blogPosts.forEach((post) => {
      const excerptText = post.excerpt || "";
      const searchText = `${post.title} ${excerptText} ${post.category}`.toLowerCase();
      if (matchesSearch(searchText)) {
        searchResults.push({
          type: "blog",
          title: post.title,
          description: post.category || "Blog",
          href: `/blog/${post.slug}`,
          icon: <FileText className="w-4 h-4 text-savanna" />,
        });
      }
    });

    // Static pages
    const pages = [
      { title: "Gallery", description: "Browse our photo gallery", href: "/gallery", keywords: "photos images pictures" },
      { title: "About Us", description: "Learn about Cluster Leaf Safaris", href: "/about", keywords: "company team mr t taedza" },
      { title: "Contact", description: "Get in touch with us", href: "/contact", keywords: "email phone whatsapp" },
      { title: "Reviews", description: "Guest testimonials", href: "/reviews", keywords: "testimonials feedback" },
      { title: "Blog", description: "Travel guides and stories", href: "/blog", keywords: "articles tips news" },
    ];

    pages.forEach((page) => {
      const searchText = `${page.title} ${page.description} ${page.keywords}`.toLowerCase();
      if (matchesSearch(searchText)) {
        searchResults.push({
          type: "page",
          title: page.title,
          description: page.description,
          href: page.href,
          icon: <Layout className="w-4 h-4 text-savanna" />,
        });
      }
    });

    return searchResults.slice(0, 8); // Limit to 8 results
  }, [query]);

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="p-0 gap-0 max-w-lg bg-white rounded-2xl border border-gray-100 shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center border-b border-gray-100 px-4">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search safaris, destinations, blog posts..."
            className="border-0 focus-visible:ring-0 px-4 py-5 text-base placeholder:text-gray-400"
            autoFocus
            aria-label="Search"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 bg-gray-100 rounded-md">
            <span className="text-xs">Ctrl</span>K
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="py-8 text-center">
              <Search className="w-10 h-10 text-gray-200 mx-auto mb-3" aria-hidden="true" />
              <p className="text-sm text-gray-500">
                Start typing to search
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-sm text-gray-500">
                No results found for &quot;{query}&quot;
              </p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((result, index) => (
                <Link
                  key={`${result.type}-${result.href}-${index}`}
                  href={result.href}
                  onClick={() => handleOpenChange(false)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-savanna/10 flex items-center justify-center flex-shrink-0">
                    {result.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-charcoal truncate group-hover:text-savanna transition-colors">
                      {result.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {result.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-savanna transition-colors flex-shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        {query.trim() !== "" && results.length > 0 && (
          <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/50">
            <p className="text-xs text-gray-400 text-center">
              Press <kbd className="px-1.5 py-0.5 bg-white rounded text-gray-500 mx-1">Enter</kbd> to select first result
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
