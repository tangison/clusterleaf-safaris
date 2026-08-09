import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'clusterleafsafaris.com' },
      { protocol: 'https', hostname: 'www.clusterleafsafaris.com' },
      { protocol: 'https', hostname: '**.vercel.app' },
    ],
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
  },
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.vercel.app https://*.clusterleafsafaris.com https://*.google.com https://*.googleusercontent.com https://*.gstatic.com; font-src 'self' data:; connect-src 'self' https://*.vercel.app; frame-src 'self' https://www.google.com https://maps.google.com https://share.google; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/upload/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects for common patterns
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
