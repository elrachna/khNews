/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kdramaomo.com",
      },
    ],
  },
};

export default nextConfig;
