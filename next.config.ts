import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports for better performance
  output: 'standalone',
  // Experimental features
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
};

export default nextConfig;
