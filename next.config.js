/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["v0.blob.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0.blob.com",
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
