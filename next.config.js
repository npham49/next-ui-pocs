/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['placeimg.com'],
  },
};

module.exports = nextConfig;
