// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"], // adicione domínios se usar imagens externas
  },
};

module.exports = nextConfig;
