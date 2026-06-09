export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedLinks?: { text: string; href: string }[];
}

export const faqItems: FAQItem[] = [
  // Booking & Planning
  {
    id: "booking-1",
    category: "Booking & Planning",
    question: "How far in advance should I book my safari?",
    answer:
      "We recommend booking 6-12 months in advance, especially for peak season (June-October). However, we can accommodate shorter notice bookings subject to availability. Contact us as soon as you have your travel dates to secure the best lodges and campsites.",
    relatedLinks: [
      { text: "View available safaris", href: "/safaris" },
      { text: "Contact us", href: "/contact" },
    ],
  },
  {
    id: "booking-2",
    category: "Booking & Planning",
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies by tour and season. Generally: 90+ days before departure: Full refund minus 10% admin fee. 60-89 days: 50% refund. 30-59 days: 25% refund. Less than 30 days: No refund. We strongly recommend purchasing travel insurance to protect your investment.",
  },
  {
    id: "booking-3",
    category: "Booking & Planning",
    question: "Do you offer custom itineraries?",
    answer:
      "Absolutely! In fact, custom itineraries are our specialty. As an owner-operated company, we can tailor every aspect of your safari to your interests, budget, and schedule. Whether you want more wildlife photography time, cultural experiences, or specific lodges, we'll create your perfect adventure.",
    relatedLinks: [{ text: "Request custom safari", href: "/contact" }],
  },
  {
    id: "booking-4",
    category: "Booking & Planning",
    question: "What is included in the safari price?",
    answer:
      "Our safari prices typically include: accommodation, all meals (as specified), park entry fees, professional guide services, vehicle and fuel, drinking water, and activities listed in the itinerary. Excludes: international flights, visas, travel insurance, alcoholic beverages, tips, and personal expenses. Specific inclusions vary by tour—see individual safari pages for details.",
    relatedLinks: [{ text: "View safari inclusions", href: "/safaris" }],
  },
  {
    id: "booking-5",
    category: "Booking & Planning",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (preferred for international bookings), credit cards (Visa, Mastercard), and PayPal. Payment schedule: 30% deposit to confirm booking, 70% balance due 60 days before departure. Specific payment terms will be outlined in your booking confirmation.",
  },

  // Travel Logistics
  {
    id: "logistics-1",
    category: "Travel Logistics",
    question: "What documents do I need to travel to Namibia?",
    answer:
      "You'll need a passport valid for at least 6 months beyond your travel dates. Visa requirements vary by nationality—many countries (including USA, UK, EU) receive a free 90-day tourist visa on arrival. For multi-country safaris (Botswana, Zimbabwe, Zambia), we'll advise on specific visa requirements. Always check current requirements with your embassy.",
    relatedLinks: [{ text: "Destinations we cover", href: "/destinations" }],
  },
  {
    id: "logistics-2",
    category: "Travel Logistics",
    question: "Which airport should I fly into?",
    answer:
      "For Namibia-focused safaris, fly into Hosea Kutako International Airport (WDH) in Windhoek. We provide airport transfers. For Botswana safaris, Maun Airport (MUB). For Victoria Falls, Victoria Falls Airport (VFA) in Zimbabwe or Livingstone Airport (LVI) in Zambia. We'll provide specific instructions based on your chosen itinerary.",
  },
  {
    id: "logistics-3",
    category: "Travel Logistics",
    question: "Do I need travel insurance?",
    answer:
      "Yes, we strongly require comprehensive travel insurance covering medical emergencies, evacuation, trip cancellation, and baggage loss. Safaris involve remote locations where medical evacuation can be expensive. We can recommend reputable providers if needed.",
  },
  {
    id: "logistics-4",
    category: "Travel Logistics",
    question: "What vaccinations do I need?",
    answer:
      "Yellow fever vaccination is required if arriving from endemic countries. Hepatitis A, Typhoid, and routine vaccinations are recommended. Malaria prophylaxis is advised for northern Namibia (Etosha), Botswana's Okavango, and Zambia/Zimbabwe. Consult your doctor or travel clinic 4-6 weeks before departure for personalized advice.",
  },

  // Safari Experience
  {
    id: "experience-1",
    category: "Safari Experience",
    question: "What wildlife will I see?",
    answer:
      "While we can't guarantee specific sightings (it's the wild!), our itineraries maximize your chances of seeing Africa's Big Five (lion, leopard, elephant, rhino, buffalo), plus cheetahs, wild dogs, giraffes, zebras, and hundreds of bird species. Etosha and Chobe are particularly renowned for large elephant populations. Your guide's expertise greatly increases sighting success.",
    relatedLinks: [{ text: "View gallery", href: "/gallery" }],
  },
  {
    id: "experience-2",
    category: "Safari Experience",
    question: "What is the accommodation like?",
    answer:
      "We offer mid-range to luxury accommodation options. This includes permanent tented camps, lodges with en-suite facilities, and comfortable camping with full camp setup (where applicable). All options provide clean, safe, comfortable stays with excellent food. Specific accommodation details are listed in each safari itinerary.",
    relatedLinks: [{ text: "View safaris", href: "/safaris" }],
  },
  {
    id: "experience-3",
    category: "Safari Experience",
    question: "How many people are in a group?",
    answer:
      "We specialize in small groups (typically 2-8 people) for a more personalized experience. Many of our safaris are private (just your party), especially for custom itineraries. Small groups mean better wildlife viewing, more flexibility, and personal attention from your guide.",
  },
  {
    id: "experience-4",
    category: "Safari Experience",
    question: "What is a typical day like on safari?",
    answer:
      "Days typically start with early morning game drives (6:00-9:00 AM) when animals are most active. Return to camp for brunch and midday relaxation. Afternoon drives start around 3:30 PM, continuing into sunset and sometimes after dark (for nocturnal species). Meals are communal and social. Exact schedules vary by location and season.",
  },

  // Practical Information
  {
    id: "practical-1",
    category: "Practical Information",
    question: "What should I pack?",
    answer:
      "Essentials: Neutral-colored clothing (khaki, olive, beige), comfortable walking shoes, sun hat, sunglasses, sunscreen (SPF 30+), insect repellent, camera with zoom lens, binoculars, reusable water bottle, light jacket for early mornings, and any personal medications. We provide a detailed packing list upon booking. Luggage should be soft-sided bags (not hard suitcases) for vehicle storage.",
    relatedLinks: [{ text: "Request packing list", href: "/contact" }],
  },
  {
    id: "practical-2",
    category: "Practical Information",
    question: "Is Wi-Fi available?",
    answer:
      "Wi-Fi availability varies greatly. Windhoek hotels and some lodges offer Wi-Fi, but remote camps often have limited or no connectivity. We recommend embracing the digital detox! If you need connectivity for work, let us know when planning—we can suggest lodges with better signal. Local SIM cards with data can be purchased in Windhoek.",
  },
  {
    id: "practical-3",
    category: "Practical Information",
    question: "What currency should I bring?",
    answer:
      "Namibian Dollar (NAD) is the local currency, equal to South African Rand (ZAR), which is also accepted. US Dollars and Euros can be exchanged at banks and bureaux de change. Credit cards are widely accepted in cities and lodges but bring cash for tips and rural areas. We recommend informing your bank of travel dates to avoid card blocks.",
  },
  {
    id: "practical-4",
    category: "Practical Information",
    question: "How much should I tip?",
    answer:
      "Tipping is customary and appreciated. General guidelines: Safari guide: $10-15 per person per day. Camp staff: $5-10 per person per day (shared among team). Drivers: $5-10 per day. Tipping is at your discretion based on service quality. We'll provide detailed tipping guidelines upon booking.",
  },

  // Health & Safety
  {
    id: "safety-1",
    category: "Health & Safety",
    question: "Is safari safe?",
    answer:
      "Yes! Safari is very safe when you follow guidelines. Your professional guide is trained in safety protocols, first aid, and wildlife behavior. Vehicles are maintained to high standards. Camps are secured. We brief you on safety rules (never leave vehicles without permission, keep distance from wildlife, etc.). Namibia has low crime rates and excellent tourism infrastructure.",
  },
  {
    id: "safety-2",
    category: "Health & Safety",
    question: "What if I have dietary restrictions?",
    answer:
      "We accommodate all dietary requirements including vegetarian, vegan, gluten-free, halal, and specific allergies. Please inform us of any restrictions when booking so we can coordinate with camps and lodges. Our safari chef (on camping safaris) is experienced with various dietary needs.",
  },
  {
    id: "safety-3",
    category: "Health & Safety",
    question: "What is the fitness level required?",
    answer:
      "Most of our safaris require minimal fitness—you'll be driven to viewpoints and lodges. However, some activities (walking safaris, dune climbing at Sossusvlei) require moderate fitness. We clearly mark difficulty levels on each itinerary. If you have mobility concerns or health conditions, let us know—we can adapt activities accordingly.",
  },

  // About Cluster Leaf
  {
    id: "about-1",
    category: "About Cluster Leaf",
    question: "What makes Cluster Leaf different from other safari companies?",
    answer:
      "We're owner-operated, meaning Taedza (Mr. T) personally plans your safari AND serves as your guide. This ensures consistency, expertise, and personal touch throughout. With 11+ years guiding experience, commercial pilot training, and deep local knowledge, we offer insights larger companies can't match. We focus on small groups and custom itineraries rather than mass tourism.",
    relatedLinks: [
      { text: "Learn more about us", href: "/about" },
      { text: "Read our reviews", href: "/reviews" },
    ],
  },
  {
    id: "about-2",
    category: "About Cluster Leaf",
    question: "Do you support conservation efforts?",
    answer:
      "Absolutely. We partner with conservation-focused lodges and reserves, support community tourism projects, and educate guests about wildlife protection. A portion of park fees directly funds conservation. We practice responsible tourism: minimum impact camping, respect for wildlife, and supporting local communities. Conservation isn't just what we do—it's why we do it.",
  },

  // Best Time to Visit
  {
    id: "timing-1",
    category: "Best Time to Visit",
    question: "When is the best time to visit Namibia?",
    answer:
      "Namibia is a year-round destination! Dry season (May-October) offers best wildlife viewing as animals congregate at waterholes, pleasant temperatures, and clear skies. Wet season (November-April) brings lush landscapes, baby animals, and excellent bird watching, though some roads may be challenging. Peak season is June-October. Each season has unique beauty—we'll help you choose based on your priorities.",
    relatedLinks: [{ text: "View destinations", href: "/destinations" }],
  },
  {
    id: "timing-2",
    category: "Best Time to Visit",
    question: "What is the weather like?",
    answer:
      "Namibia has a desert climate with hot days and cool nights. Summer (Nov-Apr): Hot, 25-35°C (77-95°F), occasional rain. Winter (May-Oct): Mild days 20-25°C (68-77°F), cold nights 5-10°C (41-50°F), especially in desert areas. Coastal areas (Swakopmund) are cooler year-round. Pack layers for temperature variations.",
  },
  {
    id: "timing-3",
    category: "Best Time to Visit",
    question: "When is the best time to visit Botswana?",
    answer:
      "May to October offers the best wildlife viewing in Botswana. May-July brings cool, dry weather with excellent game viewing. August-October is peak season—hot but incredible wildlife concentrations as animals gather at water sources. November-April is the green season with migratory birds and newborn animals, though some areas may be inaccessible due to rain.",
  },
  {
    id: "timing-4",
    category: "Best Time to Visit",
    question: "When is the best time to see Victoria Falls?",
    answer:
      "Victoria Falls is spectacular year-round! February-May: Peak water flow (most dramatic but very misty). June-September: Moderate flow with clearer views and great for photos. October-November: Lower water levels, best for activities like white-water rafting and swimming in Devil's Pool. Each season offers a unique perspective of the falls.",
  },

  // Pricing & Payment
  {
    id: "pricing-1",
    category: "Pricing & Payment",
    question: "Are there any hidden costs?",
    answer:
      "No hidden costs! Our quotes are transparent and comprehensive. We clearly list what's included and excluded. Any optional activities or upgrades are discussed upfront. The only variables are your personal expenses (souvenirs, extra drinks, tips) and any activities you choose to add during the trip.",
  },
  {
    id: "pricing-2",
    category: "Pricing & Payment",
    question: "What is the price range for your safaris?",
    answer:
      "Our safaris range from mid-range to luxury, typically $450-$850 per person per day depending on accommodation level, group size, and activities included. We provide detailed quotes after understanding your preferences. Booking directly with us often means better value as we can customize to your exact budget.",
    relatedLinks: [{ text: "View our safaris", href: "/safaris" }],
  },
];

// Organize by category for easy access
export const faqsByCategory = faqItems.reduce(
  (acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  },
  {} as Record<string, FAQItem[]>
);

// Get unique categories
export const faqCategories = Array.from(
  new Set(faqItems.map((item) => item.category))
);
