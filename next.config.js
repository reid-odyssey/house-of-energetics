/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.COSMIC_MOUNT_PATH || '',
  assetPrefix: process.env.COSMIC_MOUNT_PATH || '',
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
