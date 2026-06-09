"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { FAQItem } from "@/lib/faqData";

interface FAQSectionProps {
  items: FAQItem[];
  showSearch?: boolean;
  showCategories?: boolean;
  defaultOpenItems?: number;
}

export default function FAQSection({
  items,
  showSearch = true,
  showCategories = true,
  defaultOpenItems = 0,
}: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(items.slice(0, defaultOpenItems).map((item) => item.id))
  );

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];

  // Filter items based on search and category
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our safaris, booking process,
          and more
        </p>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="mb-8">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-charcoal placeholder-gray-400 focus:outline-none focus:border-savanna transition-colors duration-200"
            />
          </div>
        </div>
      )}

      {/* Category Filter */}
      {showCategories && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-savanna text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No questions found matching &quot;{searchTerm}&quot;
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 hover:border-gray-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.has(item.id)}
              >
                <span className="font-serif text-lg font-semibold text-charcoal pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-savanna transition-transform duration-300 ${
                    openItems.has(item.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.has(item.id) && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-4 border-t-2 border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>

                    {item.relatedLinks && item.relatedLinks.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.relatedLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="text-sm text-savanna hover:underline font-medium"
                          >
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:clusterleaf@outlook.com"
            className="px-6 py-3 bg-savanna text-white rounded-full font-medium hover:bg-savanna/90 transition-colors duration-200"
          >
            Email Us
          </a>
          <a
            href="https://wa.me/264817378313"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors duration-200"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
