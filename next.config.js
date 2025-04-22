/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"], 
    deviceSizes: [640, 768, 1200],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
