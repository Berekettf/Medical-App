// @type {import('next').NextConfig}
const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.tailgrids.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      loader: 'ignore-loader',
    });
    config.resolve.fallback = { fs: false };
    return config;
  },
};

// Use CommonJS export
module.exports = nextConfig;
