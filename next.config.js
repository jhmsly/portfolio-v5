/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false, // Remove X-Powered-By "Next.js" header
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
