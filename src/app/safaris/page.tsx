"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SafariCard from "@/components/SafariCard";
import { safaris } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { createBreadcrumbSchema } from "@/lib/schema";

const allCountries = ["All", "Namibia", "Botswana", "Zimbabwe", "Zambia"];
const allDurations = ["All", "Short (1-7 days)", "Medium (8-12 days)", "Long (13+ days)"];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Safaris", url: "/safaris" },
]);

export default function SafarisPage() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const filteredSafaris = safaris.filter((safari) => {
    const countryMatch =
      selectedCountry === "All" || safari.countries.includes(selectedCountry);

    let durationMatch = true;
    if (selectedDuration !== "All") {
      if (selectedDuration === "Short (1-7 days)") {
        durationMatch = safari.durationDays <= 7;
      } else if (selectedDuration === "Medium (8-12 days)") {
        durationMatch = safari.durationDays >= 8 && safari.durationDays <= 12;
      } else if (selectedDuration === "Long (13+ days)") {
        durationMatch = safari.durationDays >= 13;
      }
    }

    return countryMatch && durationMatch;
  });

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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl text-white mb-4"
          >
            Our Safaris
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Meticulously crafted journeys through the heart of Africa
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Country Filter */}
            <div className="flex flex-wrap gap-2">
              {allCountries.map((country) => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCountry(country)}
                  className={
                    selectedCountry === country
                      ? "bg-savanna text-white hover:bg-savanna-dark rounded-lg"
                      : "border-savanna text-savanna hover:bg-savanna hover:text-white rounded-lg"
                  }
                >
                  {country}
                </Button>
              ))}
            </div>

            {/* Duration Filter */}
            <div className="flex flex-wrap gap-2">
              {allDurations.map((duration) => (
                <Button
                  key={duration}
                  variant={selectedDuration === duration ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDuration(duration)}
                  className={
                    selectedDuration === duration
                      ? "bg-savanna text-white hover:bg-savanna-dark rounded-lg"
                      : "border-savanna text-savanna hover:bg-savanna hover:text-white rounded-lg"
                  }
                >
                  {duration}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safari Grid */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">Available Safari Tours</h2>
          {filteredSafaris.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSafaris.map((safari, index) => (
                <SafariCard key={safari.id} safari={safari} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No safaris match your selected filters. Try adjusting your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-savanna text-savanna hover:bg-savanna hover:text-white rounded-lg"
                onClick={() => {
                  setSelectedCountry("All");
                  setSelectedDuration("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
