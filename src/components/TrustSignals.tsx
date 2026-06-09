"use client";

import { motion } from "framer-motion";
import { Calendar, Map, Star } from "lucide-react";
import { companyInfo } from "@/lib/content";

const stats = [
  {
    icon: Calendar,
    value: `${companyInfo.yearsExperience}+`,
    label: "Years Running",
    description: "Since 2015",
  },
  {
    icon: Map,
    value: `${companyInfo.toursCompleted}+`,
    label: "Tours Completed",
    description: "Happy travelers",
  },
  {
    icon: Star,
    value: `${companyInfo.rating}/5`,
    label: "Rating",
    description: "Guest satisfaction",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 border border-gray-100 hover:border-savanna/20 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-savanna mb-4" />
              <span className="font-serif text-4xl font-bold text-charcoal mb-1">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-widest text-charcoal mb-1">
                {stat.label}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
