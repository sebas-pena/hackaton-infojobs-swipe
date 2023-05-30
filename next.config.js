/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.infojobs.net', 'infojobs.net', 'multimedia.infojobs.net']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}
module.exports = nextConfig
