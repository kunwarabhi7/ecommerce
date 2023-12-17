/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
