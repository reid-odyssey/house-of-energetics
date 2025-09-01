/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove basePath and assetPrefix temporarily to test basic functionality
  // basePath: process.env.COSMIC_MOUNT_PATH || '',
  // assetPrefix: process.env.COSMIC_MOUNT_PATH || '',
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
