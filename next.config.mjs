/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.COSMIC_MOUNT_PATH || '',
  assetPrefix: process.env.COSMIC_MOUNT_PATH || '',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
};

export default nextConfig;
