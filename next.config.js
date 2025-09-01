/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.COSMIC_MOUNT_PATH || '',
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
}

module.exports = nextConfig
