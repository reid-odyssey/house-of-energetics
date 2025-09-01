/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/home',
  assetPrefix: '/home',
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
