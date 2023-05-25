/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org','rb.gy','www.zdnet.com'],
  },
  transpilePackages: ['@stripe/firestore-stripe-payments'],
}

module.exports = nextConfig
