// Schema.org Structured Data for SEO
// Following Google's structured data guidelines

const baseUrl = 'https://www.clusterleafsafaris.com';

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'Cluster Leaf Safaris',
  url: baseUrl,
  logo: `${baseUrl}/assets/images/logos/logo-main.webp`,
  image: `${baseUrl}/assets/images/logos/logo-main.webp`,
  description: 'Owner-operated safari company specializing in personalized adventures across Namibia, Botswana, Zimbabwe, and Zambia since 2015.',
  foundingDate: '2015',
  founder: {
    '@type': 'Person',
    name: 'Taedza Mtambanengwe',
    jobTitle: 'Owner & Lead Safari Guide',
    description: 'Professional guide with 11+ years experience and commercial pilot training',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Klein Hamburg Avis',
    addressLocality: 'Windhoek',
    addressCountry: 'Namibia',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+264-81-737-8313',
    contactType: 'Customer Service',
    email: 'clusterleaf@outlook.com',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100054251930452',
    'https://www.instagram.com/clusterleafsafaris',
    'https://www.linkedin.com/in/taedza-mtambanengwe-60948857',
    'https://www.safaribookings.com/operators/cluster-leaf-safaris',
    'https://www.yourafricansafari.com/3237-cluster-leaf-safaris',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '8',
    bestRating: '5',
    worstRating: '1',
  },
};

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: 'Cluster Leaf Safaris',
  description: 'Premium African safari experiences in Namibia, Botswana, Zimbabwe & Zambia',
  publisher: {
    '@id': `${baseUrl}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/safaris?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// Local Business Schema (Travel Agency)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${baseUrl}/#business`,
  name: 'Cluster Leaf Safaris',
  image: `${baseUrl}/assets/images/logos/logo-main.webp`,
  telephone: '+264-81-737-8313',
  email: 'clusterleaf@outlook.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Klein Hamburg Avis',
    addressLocality: 'Windhoek',
    addressCountry: 'NA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.5609,
    longitude: 17.0658,
  },
  url: baseUrl,
  priceRange: '$$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  currenciesAccepted: 'USD, NAD, ZAR',
};

// Safari/Tour Schema Generator
export function createSafariSchema(safari: {
  name: string;
  description: string;
  duration: string;
  price: number;
  currency: string;
  countries: string[];
  slug: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: safari.name,
    description: safari.description,
    image: safari.image || `${baseUrl}/assets/images/logos/logo-main.webp`,
    url: `${baseUrl}/safaris/${safari.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Cluster Leaf Safaris',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: safari.currency,
      price: safari.price.toString(),
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/safaris/${safari.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Cluster Leaf Safaris',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '8',
    },
  };
}

// Blog Post Schema Generator
export function createBlogPostSchema(post: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image || `${baseUrl}/assets/images/logos/logo-main.webp`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cluster Leaf Safaris',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/images/logos/logo-main.webp`,
      },
    },
    url: `${baseUrl}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
  };
}

// FAQ Schema Generator
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema Generator
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// Review Schema
export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'TravelAgency',
    name: 'Cluster Leaf Safaris',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  author: {
    '@type': 'Person',
    name: 'Verified Guest',
  },
};

// Combine all schemas for JSON-LD output
export function combineSchemas(...schemas: object[]) {
  return schemas.map((schema) => JSON.stringify(schema)).join('\n');
}
