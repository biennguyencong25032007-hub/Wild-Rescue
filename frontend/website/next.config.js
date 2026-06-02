/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001/api',
  },
}

module.exports = nextConfig
