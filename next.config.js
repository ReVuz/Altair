/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimize for client-side animations
  reactStrictMode: true,
  swcMinify: true, // If you're using static images from the public directory, you don't need additional configuration
  // But if you're fetching images from external sources, configure domains
  // domains: ['your-domain.com'],
};

module.exports = nextConfig;
