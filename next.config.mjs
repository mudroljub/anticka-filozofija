/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
  basePath: process.env.STATIC_EXPORT === 'true' ? '/anticka-filozofija' : '',
  assetPrefix: process.env.STATIC_EXPORT === 'true' ? '/anticka-filozofija' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
