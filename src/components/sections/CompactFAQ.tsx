"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/lib/faqData";

interface CompactFAQProps {
  items: FAQItem[];
  maxItems?: number;
}

/**
 * Compact FAQ component for the contact page
 * Shows only a few FAQs with a link to the full FAQ page
 */
export default function CompactFAQ({ items, maxItems = 4 }: CompactFAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const displayItems = items.slice(0, maxItems);

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
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-savanna/10 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-savanna" />
        </div>
        <div>
          <h2 className="font-serif text-2xl text-charcoal">
            Quick Questions
          </h2>
          <p className="text-sm text-gray-500">
            Common questions from our guests
          </p>
        </div>
      </div>

      {/* FAQ Items - Compact Style */}
      <div className="space-y-2">
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openItems.has(item.id)}
            >
              <span className="font-medium text-charcoal text-sm pr-4">
                {item.question}
              </span>
              <ChevronDown
                size={16}
                className={`flex-shrink-0 text-savanna transition-transform duration-200 ${
                  openItems.has(item.id) ? "rotate-180" : ""
                }`}
              />
            </button>

            {openItems.has(item.id) && (
              <div className="px-4 pb-3.5">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer.length > 200
                    ? `${item.answer.substring(0, 200)}...`
                    : item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Link to Full FAQ */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 text-savanna font-medium text-sm hover:underline"
        >
          View all frequently asked questions
          <ChevronDown size={14} className="-rotate-90" />
        </Link>
      </div>
    </div>
  );
}
