import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const baseUrl = 'https://www.clusterleafsafaris.com';

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/assets/images/logos/logo-main.png',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: PageMetadata): Metadata {
  const fullUrl = `${baseUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const defaultKeywords = [
    'Namibia safari',
    'Botswana safari',
    'African safari',
    'luxury safari',
    'wildlife tours',
    'Cluster Leaf Safaris',
    'Etosha National Park',
    'Okavango Delta',
    'Victoria Falls',
    'guided safari',
    'custom safari',
    'Mr. T safari guide',
  ];

  return {
    title: {
      default: title,
      template: '%s | Cluster Leaf Safaris',
    },
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: author || 'Cluster Leaf Safaris' }],
    creator: 'Cluster Leaf Safaris',
    publisher: 'Cluster Leaf Safaris',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Cluster Leaf Safaris',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type as 'website' | 'article',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      creator: '@clusterleafsafaris',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Pre-configured metadata for common pages
export const homeMetadata = generateMetadata({
  title: 'Cluster Leaf Safaris | Premium African Safari Experiences',
  description: 'Owner-operated safaris across Namibia, Botswana, Zimbabwe & Zambia. Personalized adventures crafted by expert guide Taedza Mtambanengwe. Book your dream safari today.',
  keywords: ['African safari booking', 'personalized safari', 'Namibia tours', 'Botswana tours', 'Zimbabwe safaris'],
  url: '/',
});

export const aboutMetadata = generateMetadata({
  title: 'About Us - Meet Mr. T & Our Safari Philosophy',
  description: 'Learn about Cluster Leaf Safaris founder Taedza Mtambanengwe (Mr. T), a professional guide with 11+ years experience and commercial pilot training. Discover our conservation-focused approach.',
  keywords: ['Taedza Mtambanengwe', 'safari guide', 'owner-operated safari', 'conservation tourism', 'Namibia tour operator'],
  url: '/about',
});

export const safarisMetadata = generateMetadata({
  title: 'Our Safaris - Custom African Adventures',
  description: 'Explore our curated safari itineraries across Southern Africa. From 10-day Botswana glamping to photogenic Namibia tours. Mid-range to luxury options available.',
  keywords: ['safari packages', 'Namibia itinerary', 'Botswana tours', 'custom safari', 'safari pricing'],
  url: '/safaris',
});

export const destinationsMetadata = generateMetadata({
  title: 'Destinations - Explore Southern Africa',
  description: 'Discover incredible safari destinations: Namibia\'s Etosha, Botswana\'s Okavango Delta, Zimbabwe\'s Victoria Falls, and Zambia\'s South Luangwa. Plan your adventure.',
  keywords: ['Etosha National Park', 'Okavango Delta', 'Victoria Falls', 'South Luangwa', 'Sossusvlei'],
  url: '/destinations',
});

export const galleryMetadata = generateMetadata({
  title: 'Safari Photo Gallery - Wildlife & Landscapes',
  description: 'Browse stunning photography from our safaris. See lions, elephants, leopards and breathtaking African landscapes. Real images from actual Cluster Leaf tours.',
  keywords: ['safari photos', 'African wildlife photography', 'Namibia landscapes', 'Botswana wildlife', 'safari pictures'],
  url: '/gallery',
});

export const reviewsMetadata = generateMetadata({
  title: 'Guest Reviews - 5-Star Safari Testimonials',
  description: 'Read authentic reviews from past safari guests. 5.0/5 rating on SafariBookings.com. See why travelers choose Cluster Leaf Safaris for their African adventure.',
  keywords: ['safari reviews', 'Cluster Leaf reviews', 'safari testimonials', 'SafariBookings', 'African safari reviews'],
  url: '/reviews',
});

export const blogMetadata = generateMetadata({
  title: 'Blog - Safari Tips & Travel Guides',
  description: 'Expert safari advice, travel guides, and stories from Namibia, Botswana, Zimbabwe & Zambia. Learn about wildlife, best times to visit, and safari preparation.',
  keywords: ['safari blog', 'travel tips', 'safari guide', 'Namibia travel', 'African wildlife'],
  url: '/blog',
});

export const contactMetadata = generateMetadata({
  title: 'Contact Us - Plan Your Safari Today',
  description: 'Get in touch with Cluster Leaf Safaris. Phone: +264 81 737 8313 | Email: clusterleaf@outlook.com. Located in Windhoek, Namibia. WhatsApp available.',
  keywords: ['contact safari company', 'book safari', 'safari inquiry', 'Windhoek safari', 'Namibia tour operator contact'],
  url: '/contact',
});

export const faqMetadata = generateMetadata({
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about our safaris, booking process, travel logistics, and what to expect on your African adventure.',
  keywords: ['safari FAQ', 'safari questions', 'Namibia travel tips', 'safari preparation', 'booking safari'],
  url: '/faq',
});

// Safari detail page metadata generator
export function generateSafariMetadata(safari: {
  title: string;
  shortTitle?: string;
  description: string;
  slug: string;
  durationDays: number;
  countries: string[];
}) {
  return generateMetadata({
    title: `${safari.shortTitle || safari.title} - ${safari.durationDays} Day Safari`,
    description: `${safari.description.substring(0, 150)}... Experience ${safari.countries.join(', ')} with expert guides.`,
    keywords: [safari.title, ...safari.countries, `${safari.durationDays} day safari`, 'safari itinerary'],
    url: `/safaris/${safari.slug}`,
    type: 'product',
  });
}

// Blog post metadata generator
export function generateBlogMetadata(post: {
  title: string;
  excerpt?: string;
  slug: string;
  category?: string;
  date?: string;
  author?: string;
}) {
  return generateMetadata({
    title: post.title,
    description: post.excerpt || `Read about ${post.title} on the Cluster Leaf Safaris blog.`,
    keywords: [post.title, post.category || 'safari', 'travel guide', 'safari blog'],
    url: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    author: post.author || 'Cluster Leaf Safaris',
  });
}
