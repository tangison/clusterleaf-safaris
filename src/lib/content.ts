// Static content for Cluster Leaf Safaris website

export interface Safari {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  durationDays: number;
  countries: string[];
  priceFrom: number;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  image: string;
  featured: boolean;
  difficulty: "Easy" | "Moderate" | "Adventurous";
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  description: string;
  whyVisit: string[];
  bestTimeToVisit: string;
  highlights: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  date: string;
  rating: number;
  tour: string;
  quote: string;
  avatar?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: "wildlife" | "landscapes" | "guest-experiences";
}

export const galleryCategories = [
  { id: "all", name: "All" },
  { id: "wildlife", name: "Wildlife" },
  { id: "landscapes", name: "Landscapes" },
  { id: "guest-experiences", name: "Guest Experiences" },
];

// Company Information
export const companyInfo = {
  name: "Cluster Leaf Safaris",
  tagline: "Africa Awaits",
  subTagline: "Meticulously crafted for an unforgettable experience",
  founded: 2015,
  yearsExperience: 11,
  toursCompleted: 500,
  rating: 5.0,
  emails: {
    primary: "clusterleaf@outlook.com",
    founder: "taedza@clusterleafsafaris.com",
    info: "info@clusterleafsafaris.com",
  },
  // Legacy single email for backwards compatibility
  email: "clusterleaf@outlook.com",
  phone: "+264 81 737 8313",
  whatsapp: "+264817378313",
  address: "Windhoek, Namibia",
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=100054251930452",
    instagram: "https://instagram.com/clusterleafsafaris",
    tripadvisor: "https://tripadvisor.com/clusterleafsafaris",
    yourAfricanSafari: "https://www.yourafricansafari.com/c/3237-cluster-leaf-safaris/",
  },
};

// Founder Information
export const founderInfo = {
  name: "Taedza Mtambanengwe",
  nickname: "Mr. T",
  title: "Founder & Lead Guide",
  bio: `Born in Zambia, raised in Zimbabwe, and now calling Namibia home, Taedza Mtambanengwe brings a unique perspective to African safari guiding. A commercial pilot by training, he transitioned to safari operations in 2015, founding Cluster Leaf Safaris with a vision to provide personalized, authentic African experiences.

With over a decade of experience navigating the diverse landscapes of Southern Africa, Mr. T has cultivated deep relationships with local communities, conservation organizations, and lodge operators. His philosophy of "Bush HDTV" – delivering real, immersive nature experiences with expert storytelling – has earned him a loyal following of repeat guests from around the world.

Fluent in English, Shona, and conversational Afrikaans, Taedza ensures every guest feels like family while exploring the wild wonders of Namibia, Botswana, Zimbabwe, and Zambia.`,
  credentials: [
    "Professional Guide Certification",
    "Commercial Pilot License",
    "11+ Years Safari Experience",
    "First Aid & Wildlife Safety Certified",
  ],
  languages: ["English", "Shona", "Afrikaans (Basic)"],
  image: "/assets/images/about/mr-t.jpg",
};

// Safaris Data
export const safaris: Safari[] = [
  {
    id: "s1",
    slug: "classic-namibia",
    title: "12-Day Classic Namibia: North to South",
    shortTitle: "Classic Namibia",
    duration: "12 Days",
    durationDays: 12,
    countries: ["Namibia"],
    priceFrom: 4250,
    featured: true,
    difficulty: "Easy",
    image: "/assets/images/gallery/sossus-dunes.jpg",
    description: "Experience some of Namibia's Major Tourist Highlights! This tour starts with a visit to Okonjima (Africat Foundation), continues to Etosha National Park, explores the picturesque landscapes of Damaraland, and ends in the world's oldest desert, the Namib.",
    highlights: ["Okonjima Leopard Tracking", "Etosha National Park Game Drives", "Desert-adapted Elephants in Damaraland", "Dead Vlei & Sossusvlei", "Sandwich Harbour Activity"],
    itinerary: [
      { day: 1, title: "Okonjima Nature Reserve", description: "Meet your guide at Hosea Kutako International Airport and depart for Okonjima. Afternoon leopard tracking activity with the lodge, followed by sundowners." },
      { day: 2, title: "Okonjima Nature Reserve", description: "Early morning game drive in the nature reserve. Afternoon visit to the Carnivore Care Centre to see animals that cannot be released into the wild." },
      { day: 3, title: "Etosha National Park", description: "Depart for Etosha National Park. Afternoon game drive with your guide, returning to Okaukuejo Resort before sunset." },
      { day: 4, title: "Etosha National Park", description: "Full day exploring Etosha ('a great white place'). Enjoy early morning and afternoon game drives around the massive Etosha Pan." },
      { day: 5, title: "Etosha National Park", description: "Another day of game drives in the Okaukuejo area, visiting various waterholes to view some of the 114 mammal and 340 bird species." },
      { day: 6, title: "Twyfelfontein (Damaraland)", description: "Depart for Damaraland. Visit the UNESCO World Heritage Site rock engravings at Twyfelfontein. Home to the Damara people and desert-adapted wildlife." },
      { day: 7, title: "Twyfelfontein & Damara Living Museum", description: "Morning tracking desert-adapted elephants in the Huab River. Afternoon visit to the Damara Living Museum to experience local culture." },
      { day: 8, title: "Swakopmund via Brandberg", description: "Drive to the West Coast, passing Namibia's highest mountain, the Brandberg. Afternoon at leisure in the historic town of Swakopmund." },
      { day: 9, title: "Swakopmund & Sandwich Harbour", description: "Half-day Sandwich Harbour activity in Walvis Bay. Witness where the Namib dunes meet the Atlantic Ocean in this stunning marine sanctuary." },
      { day: 10, title: "Namib Desert (Sossusvlei)", description: "Scenic drive through Kuiseb and Gaub passes. Stop at Solitaire for famous apple pie before reaching Sossusvlei Lodge." },
      { day: 11, title: "Sossusvlei & Dead Vlei", description: "Early morning excursion to Sossusvlei, including Dune 45 and Dead Vlei. Afternoon exploration of the Sesriem Canyon." },
      { day: 12, title: "Windhoek Return", description: "Scenic drive back to Windhoek via the Spreetshoogte Pass. Transfer to the airport for your departure." }
    ],
    inclusions: ["All accommodation", "Private professional guide", "Park entry fees", "Full Board (except Swakopmund)"],
    exclusions: ["International flights", "Personal travel insurance", "Tips and gratuities", "Optional activities in Swakopmund"]
  },
  {
    id: "s2",
    slug: "photogenic-namibia",
    title: "13-Day Photogenic Namibia Specialist Tour",
    shortTitle: "Photogenic Namibia",
    duration: "13 Days",
    durationDays: 13,
    countries: ["Namibia"],
    priceFrom: 5850,
    featured: true,
    difficulty: "Easy",
    image: "/assets/images/gallery/dead-vlei.jpg",
    description: "A specialist tour encompassing Namibia's most photographed attractions. From the Quiver Tree Forest to the ghost town of Kolmanskop and the iconic skeletons of the Dead Vlei.",
    highlights: ["Quiver Tree Forest night photography", "Kolmanskop Ghost Town sunrise", "Deadvlei Silhouettes", "Spitzkoppe 'Matterhorn' landscapes", "Himba Cultural Photography"],
    itinerary: [
      { day: 1, title: "Windhoek Arrival", description: "Meet your guide and transfer to Olive Grove Guesthouse. City tour and welcome dinner at a local restaurant." },
      { day: 2, title: "Quiver Tree Forest", description: "Travel south to Keetmanshoop. Walk in the Quiver Tree Forest, named after the San people's practice of making quivers from the bark." },
      { day: 3, title: "Luderitz & Feral Horses", description: "Continue to Luderitz, stopping in Aus for lunch. Spot the feral horses of the Namib at Garub waterhole and visit Kolmanskop." },
      { day: 4, title: "Luderitz (Kolmanskop & Diaz Point)", description: "Pre-sunrise photography at Kolmanskop ghost town. Optional scenic drive to Diaz Point to spot penguins." },
      { day: 5, title: "Sossusvlei (Dead Valley Lodge)", description: "Travel to Sossusvlei. Stay inside the national park for early access to Dead Vlei at dawn for iconic silhouette photography." },
      { day: 6, title: "Sossusvlei & Dead Vlei Exploration", description: "Dedicated time for photographing Dead Vlei, Dune 45, and the Sesriem Canyon. Optional balloon rides available." },
      { day: 7, title: "Sossusvlei Excursions", description: "Morning dedicated to second visits or balloon rides over the ancient red dunes." },
      { day: 8, title: "Swakopmund & Walvis Bay", description: "Cross the Tropic of Capricorn through Gaub and Kuiseb Canyons. Visit the bird paradise in Walvis Bay for flamingos." },
      { day: 9, title: "Spitzkoppe via Cape Cross", description: "Visit the Cape Cross seal colony before continuing to the granite peaks of Spitzkoppe for sunset and night photoshoots." },
      { day: 10, title: "Etosha via Himba Village", description: "Travel to Etosha, stopping at a local Himba village. Afternoon property drive in Ongava Private Game Reserve." },
      { day: 11, title: "Etosha National Park", description: "Full-day game drive in Etosha National Park, exploring the 'great white place' and its abundant wildlife." },
      { day: 12, title: "Windhoek Return", description: "Relaxed morning followed by drive back to Windhoek. Stop at Okahandja wood carvers market. Farewell dinner at Joe's Beerhouse." },
      { day: 13, title: "Departure", description: "Transfer to Windhoek International Airport for your departure flight." }
    ],
    inclusions: ["Specialist photography guide", "4x4 vehicle access", "Accommodation in photography hotspots", "Most meals"],
    exclusions: ["Camera gear", "Balloon rides", "Tips and personal items"]
  },
  {
    id: "s3",
    slug: "botswana-glamping",
    title: "10-Day Botswana Glamping Safari: Okavango & Chobe",
    shortTitle: "Botswana Glamping",
    duration: "10 Days",
    durationDays: 10,
    countries: ["Botswana"],
    priceFrom: 6200,
    featured: true,
    difficulty: "Adventurous",
    image: "/assets/images/gallery/leopard-at-khwai.jpg",
    description: "Immerse yourself in the wild with a mobile camping safari. Explore the Okavango Delta under canvas with a professional team, followed by lodge stays in Chobe.",
    highlights: ["Mobile Glamping in the Delta", "Moremi Game Reserve Wildlife", "Mokoro Excursion", "Savuti Dynamic Ecosystem", "Chobe River Boat Cruise"],
    itinerary: [
      { day: 1, title: "Maun & Boat Cruise", description: "Arrive in Maun and check in at Thamalakane River Lodge. Enjoy a sunset boat cruise on the river." },
      { day: 2, title: "Moremi (Xaxanaxa Area)", description: "Meet your guide and head into Moremi Game Reserve. Xaxanaxa is a renowned birdwatchers' paradise with diverse wildlife." },
      { day: 3, title: "Moremi Game Reserve", description: "Morning and afternoon game drives. Moremi is home to cheetahs, rhinos, wild dogs, and lions." },
      { day: 4, title: "Khwai River (Okavango Delta)", description: "Drive to the Khwai area, a premier wilderness area with floodplains and forest habitats." },
      { day: 5, title: "Khwai River & Mokoro", description: "Morning and afternoon game drives, including a traditional mokoro (dugout canoe) excursion." },
      { day: 6, title: "Savuti (Chobe NP)", description: "Cross into the drier Savuti region of Chobe, known for its bull elephants and dynamic ecosystem." },
      { day: 7, title: "Savuti Exploration", description: "Day spent searching for predators and game in the marshes and dry riverbeds of Savuti." },
      { day: 8, title: "Chobe Riverfront", description: "Continue to the northern Chobe section, home to the largest elephant populations. Stay at a lodge on the Chobe River." },
      { day: 9, title: "Chobe NP Game Drive & Boat Cruise", description: "Early morning game drive and late afternoon boat cruise to witness magnificent riverfront wildlife." },
      { day: 10, title: "Departure", description: "Transfer to Kasane International Airport for your departure flight." }
    ],
    inclusions: ["Professional safari team", "Private mobile camping", "Safari chef", "Utility vehicle", "Lodge accommodation in Kasane"],
    exclusions: ["International flights", "Premium drinks", "Personal items", "Visas"]
  }
];

// Destinations Data
export const destinations: Destination[] = [
  {
    id: "d1",
    slug: "namibia",
    name: "Namibia",
    country: "Namibia",
    description: "A land of stark contrasts, where the world's oldest desert meets a wild and unforgiving coastline.",
    whyVisit: ["Tallest sand dunes in the world", "Unique desert-adapted wildlife", "Unparalleled starry skies"],
    bestTimeToVisit: "June to October (Dry season)",
    highlights: ["Sossusvlei", "Etosha National Park", "Damaraland"],
    image: "/assets/images/gallery/sossus-dunes.jpg"
  },
  {
    id: "d2",
    slug: "botswana",
    name: "Botswana",
    country: "Botswana",
    description: "The jewel of Africa, home to the inland miracle of the Okavango Delta and the Kalahari sands.",
    whyVisit: ["Pristine, untouched wilderness", "Concentrated wildlife populations", "exclusive luxury experiences"],
    bestTimeToVisit: "May to September",
    highlights: ["Okavango Delta", "Chobe National Park", "Moremi Game Reserve"],
    image: "/assets/images/gallery/okavango-delta.jpg"
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "t-daniel",
    name: "Daniel",
    country: "Australia",
    date: "October 2025",
    rating: 5,
    tour: "19-Day Botswana and Zambia",
    quote: "Once in a lifetime safari! 10/10. Everything was taken care of throughout the entire tour by Taedza. We saw so many animals and had a stress-free holiday because of the fine detail he took.",
    avatar: undefined
  },
  {
    id: "t-douglas",
    name: "Douglas",
    country: "USA",
    date: "December 2024",
    rating: 5,
    tour: "Namibia Family Safari",
    quote: "Outstanding guide for families. Mr. T is a wealth of knowledge and a meticulous planner. My children (ages 8 and 12) had a fantastic time and learned a lot. Highly recommend!",
    avatar: undefined
  },
  {
    id: "t-kate",
    name: "Kate",
    country: "USA",
    date: "December 2024",
    rating: 5,
    tour: "Namibia Study Tour",
    quote: "Mr. T is thoughtful, communicative, and easy to be around. He was adaptable to every disruption and dedicated to getting to know everyone in our group.",
    avatar: undefined
  },
  {
    id: "t-liz",
    name: "Liz Luther",
    country: "USA",
    date: "September 2024",
    rating: 5,
    tour: "3-Day Etosha Safari",
    quote: "Seamless and memorable family trip! Mr. T spotted animals we would have 100% missed. It's clear he is well respected at the park by other guides and staff.",
    avatar: undefined
  },
  {
    id: "t-gugli",
    name: "Guglielmo",
    country: "Italy",
    date: "September 2024",
    rating: 5,
    tour: "Namibia Camping Safari",
    quote: "Exceeded all expectations. Perfectly organized from the comfort of the camping tents to the cuisine. The staff's enthusiasm for nature was truly contagious.",
    avatar: undefined
  },
  {
    id: "t-jessa",
    name: "Jessa",
    country: "USA",
    date: "September 2024",
    rating: 5,
    tour: "Namibia Student Group",
    quote: "Educational, engaging, and personable—Mr. T is like family to us! The entire experience was phenomenal and filled with beautiful sights.",
    avatar: undefined
  },
  {
    id: "t-kathy",
    name: "Kathy Leicht-Gregg",
    country: "USA",
    date: "2024",
    rating: 5,
    tour: "Namibia Exploration",
    quote: "What I loved best about Namibia was our guide, Mr. T. His love for the country is infectious, he is curious, smart, and informative. A most excellent driver too!",
    avatar: undefined
  }
];

// Gallery Images
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/assets/images/gallery/lion-pride-in-etosha-np.jpg", alt: "Lions on the prowl in Etosha", title: "Lions on the Prowl", location: "Etosha National Park", category: "wildlife" },
  { id: "g2", src: "/assets/images/gallery/dead-vlei.jpg", alt: "Ancient camel thorn trees in Deadvlei", title: "Dead Vlei", location: "Sossusvlei, Namibia", category: "landscapes" },
  { id: "g3", src: "/assets/images/gallery/leopard-at-khwai.jpg", alt: "Leopard resting in Khwai", title: "Leopard at Rest", location: "Khwai, Botswana", category: "wildlife" },
  { id: "g4", src: "/assets/images/gallery/himba-experience.jpg", alt: "Cultural exchange with the Himba people", title: "Himba Traditions", location: "Kunene Region", category: "guest-experiences" },
  { id: "g5", src: "/assets/images/gallery/okavango-delta.jpg", alt: "Aerial view of the Okavango Delta waterways", title: "Delta From Above", location: "Okavango Delta", category: "landscapes" },
  { id: "g6", src: "/assets/images/gallery/lion-kill-at-xaxanaxa.jpg", alt: "Nature's raw power: Lion kill in Moremi", title: "The Hunt", location: "Xaxanaxa, Moremi", category: "wildlife" },
  { id: "g7", src: "/assets/images/gallery/sossus-dunes.jpg", alt: "The towering red dunes of Sossusvlei", title: "Sossus Dunes", location: "Namib-Naukluft", category: "landscapes" },
  { id: "g8", src: "/assets/images/gallery/elephants-at-klein-namutoni-waterhole-etosha-np.jpg", alt: "Elephants at the waterhole", title: "Waterhole Wisdom", location: "Etosha National Park", category: "wildlife" },
  { id: "g9", src: "/assets/images/gallery/vic-falls-baguley-family.jpg", alt: "Family joy at Victoria Falls", title: "Victoria Falls Wonders", location: "Zimbabwe/Zambia", category: "guest-experiences" },
  { id: "g10", src: "/assets/images/gallery/leopard-and-cub-showing-affection-care-of-the-wildlife.jpg", alt: "Tender moment: Leopard and cub", title: "Motherly Love", location: "Chobe, Botswana", category: "wildlife" },
  { id: "g11", src: "/assets/images/gallery/oryx-bull-at-sossusvlei.jpg", alt: "Oryx bull against red dunes", title: "Desert Guardian", location: "Sossusvlei", category: "wildlife" },
  { id: "g12", src: "/assets/images/gallery/pied-kingfisher-at-paradise-pools.jpg", alt: "Pied Kingfisher in action", title: "Pied Kingfisher", location: "Chobe River", category: "wildlife" },
  { id: "g13", src: "/assets/images/gallery/kolmanskop.jpg", alt: "Inside the ghost town of Kolmanskop", title: "Sands of Time", location: "Kolmanskop", category: "landscapes" },
  { id: "g14", src: "/assets/images/gallery/lunch-with-the-himba.jpg", alt: "Sharing a meal and stories", title: "Bush Lunch", location: "Kunene Region", category: "guest-experiences" },
  { id: "g15", src: "/assets/images/gallery/leopards-are-in-abundance-here.jpg", alt: "Camouflaged leopard in the bush", title: "Hidden Leopard", location: "Moremi", category: "wildlife" },
  { id: "g16", src: "/assets/images/gallery/mokoro-excursion-at-khwai.jpg", alt: "Poling through the Okavango Delta", title: "Mokoro Serenity", location: "Khwai River", category: "guest-experiences" },
  { id: "g17", src: "/assets/images/gallery/lion-pride-in-etosha-np.jpg", alt: "A pride of lions resting", title: "Pride of the Plains", location: "Etosha", category: "wildlife" },
  { id: "g18", src: "/assets/images/gallery/more-wild-dogs.jpg", alt: "Rare sighting: African Wild Dogs", title: "Wild Dog Pack", location: "Linyanti", category: "wildlife" },
  { id: "g19", src: "/assets/images/gallery/rhino.jpg", alt: "Majestic Rhino in the wild", title: "The Unicorn", location: "", category: "wildlife" },
  { id: "g20", src: "/assets/images/gallery/with-chiara.jpg", alt: "Guiding guests through the wilderness", title: "Guided Discovery", location: "", category: "guest-experiences" },
  { id: "g22", src: "/assets/images/gallery/en-route-to-khwai.jpg", alt: "Safari vehicle navigating the bush", title: "Adventure En Route", location: "Khwai", category: "guest-experiences" },
  { id: "g25", src: "/assets/images/gallery/leopard-full.jpg", alt: "Full view of a leopard in the grass", title: "Golden Stare", location: "Moremi", category: "wildlife" },
  { id: "ng1", src: "/assets/images/gallery/wildlife-cheetah-morning-walk.jpg", alt: "Cheetah walking in high grass at dawn", title: "Morning Prowl", location: "Etosha National Park", category: "wildlife" },
  { id: "ng2", src: "/assets/images/gallery/destination-landscape-1.jpg", alt: "Stunning Namibian sunset landscape", title: "Namibian Horizon", location: "Damaraland", category: "landscapes" },
  { id: "ng3", src: "/assets/images/gallery/wildlife-giraffes-lineup.jpg", alt: "A line of giraffes against a mountain backdrop", title: "Giraffe Parade", location: "Namibia", category: "wildlife" },
  { id: "ng4", src: "/assets/images/gallery/safari-guests-viewing.jpg", alt: "Guests observing wildlife from a safari vehicle", title: "Wildlife Watching", location: "Etosha", category: "guest-experiences" },
  { id: "ng5", src: "/assets/images/gallery/wildlife-leopard-tree.jpg", alt: "Leopard resting high in a tree", title: "Tree-top Lookout", location: "Khwai", category: "wildlife" },
  { id: "ng6", src: "/assets/images/gallery/wildlife-elephants-herd-1.jpg", alt: "Large herd of elephants crossing the plains", title: "Elephant Migration", location: "Chobe", category: "wildlife" },
  { id: "ng7", src: "/assets/images/gallery/wildlife-lion-close-up.jpg", alt: "Close-up of a male lion's face", title: "King's Gaze", location: "Moremi", category: "wildlife" },
  { id: "ng8", src: "/assets/images/gallery/wildlife-elephants-drinking.jpg", alt: "Elephants drinking at a waterhole", title: "Thirsty Giants", location: "Etosha", category: "wildlife" },
  { id: "ng9", src: "/assets/images/gallery/wildlife-elephants-family.jpg", alt: "Elephant family with young calves", title: "Family Bonds", location: "Damaraland", category: "wildlife" },
  { id: "ng10", src: "/assets/images/gallery/wildlife-rhino-safari-encounter.jpg", alt: "Rhino spotted during a game drive", title: "Rare Sighting", location: "Okonjima", category: "wildlife" },
  { id: "ng11", src: "/assets/images/gallery/wildlife-elephants-marching.jpg", alt: "Elephants walking in a disciplined line", title: "The Long Walk", location: "Namibia", category: "wildlife" },
  { id: "ng12", src: "/assets/images/gallery/landscape-desert-dunes.jpg", alt: "Red sand dunes of the Namib desert", title: "Infinite Dunes", location: "Sossusvlei", category: "landscapes" },
  { id: "ng13", src: "/assets/images/gallery/wildlife-zebra-plain.jpg", alt: "Zebras grazing on the open savannah", title: "Zebra Patterns", location: "Etosha", category: "wildlife" },
  { id: "ng14", src: "/assets/images/gallery/culture-san-bushmen-skills.jpg", alt: "San people demonstrating traditional survival skills", title: "Ancient Wisdom", location: "Kalahari", category: "guest-experiences" },
  { id: "ng15", src: "/assets/images/gallery/culture-traditional-village.jpg", alt: "Visiting a traditional African village", title: "Cultural Roots", location: "Kunene", category: "guest-experiences" },
  { id: "ng16", src: "/assets/images/gallery/culture-himba-woman.jpg", alt: "Close-up of a Himba woman in traditional attire", title: "Himba Heritage", location: "Kaokoland", category: "guest-experiences" },
  { id: "ng17", src: "/assets/images/gallery/safari-vehicle-river-crossing.jpg", alt: "Safari 4x4 crossing a shallow river", title: "River Adventure", location: "Botswana", category: "guest-experiences" },
  { id: "ng18", src: "/assets/images/gallery/wildlife-hippo-water.jpg", alt: "Hippos cooling off in the river", title: "Hippo Pool", location: "Chobe River", category: "wildlife" },
  { id: "ng19", src: "/assets/images/gallery/wildlife-crocodile-river.jpg", alt: "Large crocodile basking on the riverbank", title: "River Guardian", location: "Zambezi", category: "wildlife" },
  { id: "ng20", src: "/assets/images/gallery/landscape-delta-aerial.jpg", alt: "Aerial view of the Okavango Delta", title: "Delta Maze", location: "Okavango", category: "landscapes" },
  { id: "ng21", src: "/assets/images/gallery/wildlife-rhino-near-vehicle.jpg", alt: "Rhino walking near a safari vehicle", title: "Close Encounter", location: "Namibia", category: "wildlife" },
  { id: "ng22", src: "/assets/images/gallery/wildlife-lion-rest.jpg", alt: "Lion resting in the shade", title: "Midday Rest", location: "Etosha", category: "wildlife" },
  { id: "ng23", src: "/assets/images/gallery/guest-sundowners-bush.jpg", alt: "Guests enjoying drinks at sunset in the bush", title: "Sundowner Magic", location: "Namib Desert", category: "guest-experiences" },
  { id: "ng24", src: "/assets/images/gallery/guest-tent-glamping.jpg", alt: "Luxury glamping tent under the stars", title: "Night Under Canvas", location: "Moremi", category: "guest-experiences" },
  { id: "ng25", src: "/assets/images/gallery/wildlife-bird-watching.jpg", alt: "Colorful tropical bird on a branch", title: "Avian Beauty", location: "Caprivi", category: "wildlife" },
  { id: "ng26", src: "/assets/images/gallery/landscape-mountain-valley.jpg", alt: "Deep valley between rugged mountains", title: "Mountain Majesty", location: "Damaraland", category: "landscapes" },
  { id: "ng27", src: "/assets/images/gallery/wildlife-ostrich-desert.jpg", alt: "Ostrich running through the desert plains", title: "Desert Sprinter", location: "Namib", category: "wildlife" },
  { id: "ng28", src: "/assets/images/gallery/safari-sunset-drive.jpg", alt: "Safari vehicle silhouetted against a sunset", title: "Golden Hour Drive", location: "Southern Africa", category: "guest-experiences" },
  { id: "ng29", src: "/assets/images/gallery/wildlife-buffalo-herd.jpg", alt: "Indifferent buffalo herd on the move", title: "Buffalo Strength", location: "Chobe", category: "wildlife" },
  { id: "ng30", src: "/assets/images/gallery/landscape-savannah-panorama.jpg", alt: "Wide panorama of the African savannah", title: "Serengeti Vibes", location: "Botswana", category: "landscapes" },
  { id: "ng31", src: "/assets/images/gallery/wildlife-small-mammal.jpg", alt: "Small curious mammal in the bush", title: "Bush Secret", location: "Namibia", category: "wildlife" },
  { id: "ng32", src: "/assets/images/gallery/wildlife-cat-stare.jpg", alt: "Wild cat peering through the grass", title: "Feline Focus", location: "Etosha", category: "wildlife" },
  { id: "ng33", src: "/assets/images/gallery/wildlife-cat-hunt.jpg", alt: "Predator in hunting mode", title: "Stealthy Stalk", location: "Moremi", category: "wildlife" },
  { id: "ng34", src: "/assets/images/gallery/wildlife-leopard-spots.jpg", alt: "Exquisite patterns on a leopard's coat", title: "Leopard Print", location: "Khwai", category: "wildlife" },
  { id: "ng35", src: "/assets/images/gallery/wildlife-puffin-sunset-1.jpg", alt: "Puffin silhouetted against the setting sun", title: "Puffin Sunset", location: "Elliston", category: "wildlife" },
  { id: "ng36", src: "/assets/images/gallery/wildlife-puffin-sunset-2.jpg", alt: "Puffin at the edge of a cliff at dusk", title: "Twilight Flight", location: "Elliston", category: "wildlife" },
  { id: "ng37", src: "/assets/images/gallery/guest-family-safari-1.jpg", alt: "Family enjoying a private safari experience", title: "Family Memories", location: "Namibia", category: "guest-experiences" },
  { id: "ng38", src: "/assets/images/gallery/guest-family-safari-2.jpg", alt: "Children learning about nature on safari", title: "Young Explorers", location: "Etosha", category: "guest-experiences" },
  { id: "ng39", src: "/assets/images/gallery/guest-group-photo.jpg", alt: "Group of happy travelers on safari", title: "Travel Tribe", location: "Victoria Falls", category: "guest-experiences" },
  { id: "ng40", src: "/assets/images/gallery/landscape-namibia-rocks.jpg", alt: "Unique rock formations in the Namibian desert", title: "Sculpted by Time", location: "Spitzkoppe", category: "landscapes" },
  { id: "ng41", src: "/assets/images/gallery/landscape-namibia-plains.jpg", alt: "Vast open plains of central Namibia", title: "Open Spaces", location: "Namibia", category: "landscapes" },
  { id: "ng42", src: "/assets/images/gallery/landscape-etosha-pan.jpg", alt: "The shimmering white surface of the Etosha Pan", title: "The Great White Place", location: "Etosha", category: "landscapes" },
  { id: "ng43", src: "/assets/images/gallery/landscape-kolmanskop-entry.jpg", alt: "Entrance to the abandoned town of Kolmanskop", title: "Ghostly Entrance", location: "Luderitz", category: "landscapes" },
  { id: "ng44", src: "/assets/images/gallery/wildlife-lioness-lookout.jpg", alt: "Lioness keeping watch from a rocky outcrop", title: "Lioness Pride", location: "Moremi", category: "wildlife" },
  { id: "ng45", src: "/assets/images/gallery/wildlife-cheetah-pose.jpg", alt: "Cheetah posing on a termite mound", title: "Cheetah Vantage", location: "Etosha", category: "wildlife" },
  { id: "ng46", src: "/assets/images/gallery/landscape-desert-colors.jpg", alt: "Vibrant colors of the desert at sunset", title: "Desert Palette", location: "Sossusvlei", category: "landscapes" },
  { id: "ng47", src: "/assets/images/gallery/wildlife-leopard-night.jpg", alt: "Leopard active during a night drive", title: "Night Ranger", location: "Zambia", category: "wildlife" },
  { id: "ng48", src: "/assets/images/gallery/wildlife-wild-dogs-pack.jpg", alt: "Rare pack of African wild dogs", title: "Painted Wolves", location: "Linyanti", category: "wildlife" },
  { id: "ng49", src: "/assets/images/gallery/wildlife-leopard-branch.jpg", alt: "Leopard perfectly camouflaged on a tree branch", title: "Hidden Spot", location: "Moremi", category: "wildlife" },
  { id: "ng50", src: "/assets/images/gallery/landscape-sunset-silhouette.jpg", alt: "Acacia tree silhouetted against a deep orange sky", title: "African Icon", location: "Savannah", category: "landscapes" },
];

// Navigation Links
export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Safaris", href: "/safaris" },
  { name: "Destinations", href: "/destinations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Blog Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "safari-tips" | "wildlife" | "conservation" | "travel-guides" | "behind-the-scenes" | "guest-stories";
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-time-to-visit-namibia",
    title: "The Best Time to Visit Namibia: A Complete Guide",
    excerpt: "Discover the ideal seasons for wildlife viewing, desert adventures, and photography in Namibia. Learn when to visit Etosha, Sossusvlei, and more.",
    content: `# The Best Time to Visit Namibia: A Complete Guide

Namibia is a year-round destination, but the best time to visit depends on your interests and what you hope to experience. Here's a comprehensive guide to help you plan your perfect Namibian adventure.

## Dry Season (May to October)

The dry season is considered the best time for wildlife viewing in Namibia. During these months, animals congregate around waterholes, making them easier to spot.

### Etosha National Park
The dry winter months (June to October) are ideal for Etosha. With vegetation sparse and water limited, wildlife gathering at waterholes creates incredible viewing opportunities.

What to expect:
- Excellent game viewing at waterholes
- Clear, sunny days with mild temperatures
- Cold nights (pack warm layers!)
- Peak tourist season

### Sossusvlei & The Namib Desert
Winter offers pleasant temperatures for climbing dunes and exploring the desert. The clear skies also make for stunning photography.

## Wet Season (November to April)

The summer "green season" brings dramatic landscapes and unique wildlife experiences.

Advantages:
- Lush, green landscapes
- Newborn wildlife
- Migratory birds arrive
- Fewer tourists
- Lower accommodation rates

Considerations:
- Very hot temperatures (especially December-February)
- Afternoon thunderstorms possible
- Some remote roads may be impassable

## Month-by-Month Guide

### May - June
The transition from wet to dry season. Still green but wildlife becoming more visible. Cool nights and warm days.

### July - August
Peak dry season. Best for wildlife viewing. Cold nights. Book accommodations well in advance.

### September - October
Excellent wildlife viewing as it gets drier. Temperatures begin to rise. Great for photography.

### November - December
Start of the wet season. Dramatic thunderstorms. Hot temperatures. Newborn animals.

### January - February
Hottest months. Heavy rains possible. Lush landscapes. Great for bird watching.

### March - April
End of wet season. Still green but drying out. Good wildlife viewing returns.

## Special Considerations

### Photography
- Golden hour lasts longer during winter months
- Dust in dry season creates dramatic sunset conditions
- Green season offers vibrant landscape photography

### Budget Travel
Visit during the shoulder months (May, November) for lower rates and fewer crowds.

### Adventure Activities
- Skydiving and scenic flights: Best in clear winter months
- Quad biking: Avoid wet season for best desert conditions
- Hiking: Winter months offer comfortable temperatures

## Conclusion

The best time to visit Namibia ultimately depends on your priorities. For classic wildlife viewing, choose the dry winter months. For dramatic landscapes and fewer crowds, consider the green season. Whenever you visit, Namibia's raw beauty will leave an indelible mark on your soul.`,
    category: "travel-guides",
    author: {
      name: "Taedza Mtambanengwe",
      avatar: "/assets/images/gallery/taedza.jpg",
      bio: "Founder & Lead Guide at Cluster Leaf Safaris with over 11 years of experience leading safaris across Southern Africa.",
    },
    date: "2024-11-15",
    readTime: "8 min read",
    image: "/assets/images/gallery/sossus-dunes.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "photographing-desert-elephants",
    title: "Photographing Desert-Adapted Elephants in Damaraland",
    excerpt: "Expert tips for capturing Namibia's unique desert-adapted elephants in their natural habitat. Learn the best locations, times, and techniques.",
    content: `# Photographing Desert-Adapted Elephants in Damaraland

Namibia's desert-adapted elephants are among the most remarkable creatures on Earth. Having adapted to survive in one of the harshest environments, these magnificent animals offer incredible photography opportunities.

## Understanding Desert Elephants

Unlike their savanna cousins, desert-adapted elephants have evolved to survive in the arid regions of Namibia. They travel vast distances between water sources and have learned to digest a wider variety of vegetation.

## Best Locations

### Damaraland
The dry riverbeds of Damaraland are the best places to find these elephants. The Huab, Ugab, and Hoanib river systems are particularly productive.

### Skeleton Coast
More remote but rewarding, the Skeleton Coast parks offer opportunities to see elephants against dramatic coastal backdrops.

## Photography Tips

### Equipment Recommendations
- Lens: 100-400mm zoom lens ideal for flexibility
- Camera body: Good low-light performance for dawn/dusk shooting
- Tripod: Essential for stability, especially in low light

### Best Times to Shoot
- Early morning: Elephants are active, soft light
- Late afternoon: Golden hour creates dramatic images
- Midday: Use for environmental portraits with wider angles

### Composition Techniques
1. Environmental portraits: Show the elephants in their desert landscape
2. Silhouettes: Use sunrise/sunset for dramatic silhouettes
3. Dust shots: Capture dust baths for dynamic images
4. Family interactions: Patiently wait for touching moments

## Ethical Considerations

- Never approach too closely - maintain at least 50 meters
- Turn off engine when watching elephants
- Never block their path to water
- Follow your guide's instructions at all times

## Conservation Message

Desert elephants face numerous threats including habitat loss and human-wildlife conflict. By photographing them responsibly, you help raise awareness of these magnificent creatures.

## Join Our Photography Safari

Our 13-Day Photogenic Namibia tour is designed specifically for photographers, with timing optimized for the best light and extended time at key locations.`,
    category: "wildlife",
    author: {
      name: "Taedza Mtambanengwe",
      avatar: "/assets/images/gallery/taedza.jpg",
      bio: "Founder & Lead Guide at Cluster Leaf Safaris with over 11 years of experience leading safaris across Southern Africa.",
    },
    date: "2024-10-28",
    readTime: "6 min read",
    image: "/assets/images/gallery/with-chiara.jpg",
    featured: true,
  },
  {
    id: "3",
    slug: "what-to-pack-safari",
    title: "What to Pack for Your Namibia Safari: Essential Guide",
    excerpt: "A complete packing checklist for your Namibian adventure, from clothing to camera gear. Be prepared for desert days and chilly nights.",
    content: `# What to Pack for Your Namibia Safari: Essential Guide

Proper packing can make or break your safari experience. Namibia's diverse environments and temperature variations require thoughtful preparation.

## Clothing Essentials

### Color Palette
- Neutral colors: Khaki, olive, tan, brown
- Avoid: White (too visible), black (too hot), bright colors

### Recommended Items

For Game Drives:
- Long-sleeved shirts (sun protection)
- Lightweight, breathable trousers
- Comfortable walking shoes
- Wide-brimmed hat
- Sunglasses with UV protection

For Evenings:
- Warm fleece or jacket (nights can be cold!)
- Long trousers
- Closed shoes

For Desert:
- Lightweight, long-sleeved layers
- Scarf or buff (dust protection)
- Sun hat with neck coverage

## Camera Gear

### Essential
- Camera body (consider a backup)
- Zoom lens (200mm minimum for wildlife)
- Wide-angle lens (landscapes)
- Extra batteries (cold nights drain them)
- Memory cards (64GB minimum)

### Optional but Recommended
- Tripod or monopod
- Lens cleaning kit
- Camera bag with dust protection
- Beanbag for vehicle support

## Health & Safety

### Medical Kit
- Personal medications
- Malaria prophylaxis (if visiting northern regions)
- Sunscreen (SPF 50+)
- Insect repellent
- Lip balm with SPF
- Antihistamines

### Documents
- Passport (with at least 6 months validity)
- Travel insurance documents
- Vaccination certificates
- Copies of all important documents

## Practical Items

- Binoculars (8x42 or 10x42 recommended)
- Headlamp or flashlight
- Power bank
- Universal adapter (Type D & M for Namibia)
- Reusable water bottle
- Daypack

## What NOT to Pack

- Drone (permits required, often difficult to obtain)
- Excessive jewelry
- High heels
- Formal wear (unless staying at ultra-luxury lodges)
- Too many clothes (laundry available at most lodges)

## Luggage Considerations

- Soft bags preferred over hard cases
- Weight limit: Usually 15-20kg on small aircraft
- Check specific requirements for your itinerary

## Final Tips

- Pack in layers for temperature variations
- Leave room for souvenirs
- Consider laundry services at lodges
- Bring a good book for downtime

Packing smart ensures you're comfortable and prepared to fully enjoy Namibia's incredible experiences.`,
    category: "safari-tips",
    author: {
      name: "Taedza Mtambanengwe",
      avatar: "/assets/images/gallery/taedza.jpg",
      bio: "Founder & Lead Guide at Cluster Leaf Safaris with over 11 years of experience leading safaris across Southern Africa.",
    },
    date: "2024-10-10",
    readTime: "5 min read",
    image: "/assets/images/gallery/mokoro-excursion-at-khwai.jpg",
    featured: false,
  },
  {
    id: "4",
    slug: "conservation-success-story",
    title: "Conservation Success: The Recovery of Black Rhinos in Namibia",
    excerpt: "How Namibia's community-based conservation approach has helped protect one of Africa's most endangered species.",
    content: `# Conservation Success: The Recovery of Black Rhinos in Namibia

Namibia stands as a beacon of hope in African wildlife conservation. The country's innovative approach to protecting black rhinos offers valuable lessons for conservation efforts worldwide.

## The Challenge

By the 1980s, widespread poaching had decimated Namibia's black rhino population. Fewer than 60 individuals remained in the wild, and the species faced local extinction.

## The Solution: Community Conservancies

Namibia's groundbreaking approach placed local communities at the center of conservation:

### Key Elements:
- Community ownership: Locals manage wildlife on their land
- Benefit sharing: Tourism revenue supports communities
- Employment: Former poachers become rangers
- Education: Conservation awareness in schools

## Results

### Population Recovery
- Black rhinos now number over 2,000 in Namibia
- The largest free-roaming population in Africa
- Annual population growth rate of 5%

### Community Benefits
- Jobs in tourism and conservation
- Infrastructure development
- Food security through sustainable hunting quotas
- Pride in wildlife heritage

## Where to See Rhinos

### Etosha National Park
The best place to see both black and white rhinos. Visit waterholes at dawn and dusk.

### Damaraland
Track desert-adapted black rhinos on foot with specialist guides. An unforgettable experience.

### Palmwag Concession
Community conservancy with successful rhino tracking programs.

## How Your Safari Helps

When you book a safari with Cluster Leaf Safaris:
- Park fees support conservation programs
- Community visits benefit local people
- Your presence gives wildlife value
- You become an ambassador for conservation

## Looking Forward

While challenges remain, Namibia's model shows that conservation and community development can go hand in hand. The future of Africa's wildlife depends on such innovative approaches.

Join us on safari to witness conservation success firsthand.`,
    category: "conservation",
    author: {
      name: "Taedza Mtambanengwe",
      avatar: "/assets/images/about/mr-t.jpg",
      bio: "Founder & Lead Guide at Cluster Leaf Safaris with over 11 years of experience leading safaris across Southern Africa.",
    },
    date: "2024-09-20",
    readTime: "6 min read",
    image: "/assets/images/gallery/rhino.jpg",
    featured: false,
  },
  {
    id: "6",
    slug: "where-to-find-cluster-leaf-safaris-online",
    title: "Where to Find Cluster Leaf Safaris Online: Your Complete Guide",
    excerpt: "Discover all the platforms where Cluster Leaf Safaris is featured, from SafariBookings.com to Visit Namibia. Read authentic reviews and find the best way to book your African adventure.",
    content: `# Where to Find Cluster Leaf Safaris Online: Your Complete Guide

Since 2015, Cluster Leaf Safaris has built a strong reputation across multiple travel platforms and review sites. Whether you're researching your next African adventure or looking to verify our credentials, here's everywhere you can find us online.

## Booking & Review Platforms

### SafariBookings.com - Our Highest-Rated Profile

Visit us at SafariBookings.com to see why we maintain a perfect 5.0/5 star rating from verified safari travelers.

Why visit this listing:
- Perfect 5.0/5 star rating from verified travelers
- Detailed price transparency: $458 to $856 per person per day
- Comprehensive safari descriptions and itineraries
- Read authentic reviews from past clients
- Compare our offerings with other Namibia operators

What reviewers say:
"The attention to detail and personal touch made this trip unforgettable. Mr. T's knowledge of the wildlife and landscape is unmatched."

### Your African Safari - Comprehensive Safari Planning

Our Your African Safari listing provides full tour packages with total pricing ($5,260 to $12,379 per person) and detailed itinerary breakdowns for Namibia, Botswana & Zimbabwe tours.

Platform Highlights:
This listing emphasizes that Taedza (Mr. T) personally plans AND guides each safari, a key differentiator in the industry where many operators separate these roles.

### TourHQ - Local Expert Directory

Find our verified local operator status in Windhoek on TourHQ. This platform offers custom tour request functionality and direct messaging with our team.

### Safarigo.com - Owner-Run Operator Spotlight

Our Safarigo profile highlights our owner-operated model with 13+ years of guiding experience. The listing features our detailed company background and philosophy.

Key Quote from the listing:
"With over 13 years experience as a tour guide, I take the pleasure of planning your adventure and being the guide on all tours."

## Official Tourism Directories

### Visit Namibia - Official Tourism Board Listing

Being listed on Namibia's official tourism board website validates our legitimacy and compliance with national tourism standards.

Verified Information:
- Physical Address: Windhoek, Namibia
- Official Contact: +264 81 737 8313
- Email: clusterleaf@outlook.com

This is the government-endorsed resource for travelers planning Namibia trips.

### Petit Futé - International Travel Guide Recognition

Featured in this prestigious European travel guide, our listing highlights Taedza's professional pilot background and bush flying experience. Petit Futé is known for selective, quality-focused listings.

## Social Media & Community

### Instagram: @clusterleafsafaris

Follow us for:
- Stunning safari photography from our tours
- Behind-the-scenes glimpses of camp life
- Wildlife sightings and guest moments
- Real-time updates from current safaris
- Travel tips and Namibia highlights

### Facebook: Cluster Leaf Safaris

Join our community for:
- Longer-form trip reports and stories
- Guest testimonials and photo albums
- Safari planning tips and advice
- Direct messaging for quick questions

### LinkedIn: Taedza Mtambanengwe

Connect directly with our owner and lead guide. Learn about Taedza's professional background and industry connections.

## Why Multiple Platforms Matter

You might wonder why we maintain presence across so many platforms. Here's why:

1. Transparency & Trust
Multiple independent review platforms provide unbiased verification of our service quality.

2. Convenience for You
Different travelers prefer different booking methods. We meet you where you are.

3. Comprehensive Information
Each platform highlights different aspects of our services, giving you a complete picture.

4. Industry Credibility
Listings on official tourism boards and established directories validate our professionalism.

## How to Choose Where to Book

For Research & Reviews:
Start with SafariBookings.com or Your African Safari for comprehensive reviews and pricing.

For Official Verification:
Check our Visit Namibia listing for government-validated contact information.

For Direct Contact:
Visit our website, email us directly, or message via WhatsApp for personalized service.

For Social Proof:
Follow our Instagram and Facebook to see real safari experiences from recent guests.

## Our Recommendation: Book Direct

While we appreciate all our platform listings, booking directly through our website or email offers several advantages:

- Personalized itinerary customization
- Direct communication with Taedza
- Flexible payment options
- No platform commission fees (savings passed to you)
- Faster response times

## Still Have Questions?

We're here to help! Reach out through any of these channels:

- Email: clusterleaf@outlook.com
- Phone/WhatsApp: +264 81 737 8313
- Website Contact Form
- Social Media: DM us on Instagram or Facebook

Your African adventure is just a conversation away.`,
    category: "behind-the-scenes",
    author: {
      name: "Taedza Mtambanengwe",
      avatar: "/assets/images/gallery/taedza.jpg",
      bio: "Founder & Lead Guide at Cluster Leaf Safaris with over 11 years of experience leading safaris across Southern Africa.",
    },
    date: "2025-01-15",
    readTime: "7 min read",
    image: "/assets/images/logos/logo-main.png",
    featured: false,
  },
];

// Blog Categories
export const blogCategories = [
  { slug: "all", name: "All" },
  { slug: "safari-tips", name: "Safari Tips" },
  { slug: "wildlife", name: "Wildlife" },
  { slug: "conservation", name: "Conservation" },
  { slug: "travel-guides", name: "Travel Guides" },
  { slug: "behind-the-scenes", name: "Behind the Scenes" },
  { slug: "guest-stories", name: "Guest Stories" },
];
