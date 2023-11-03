/** @type {import('next').NextConfig} */
const nextConfig = { images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '8000',
    },
  ],
},
experimental: {
  serverActions: false,
},
output : 'export'
}

module.exports = nextConfig
