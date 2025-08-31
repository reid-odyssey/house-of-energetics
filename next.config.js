/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/house-of-energetics' : '',
}

module.exports = nextConfig
