/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_URL || '',
  assetPrefix: process.env.ASSETS_PREFIX || '',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
};

module.exports = nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
initOpenNextCloudflareForDev();
