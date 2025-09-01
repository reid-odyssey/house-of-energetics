/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_URL || '',
  assetPrefix: process.env.ASSETS_PREFIX || '',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
