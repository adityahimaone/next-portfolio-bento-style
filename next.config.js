/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'ucarecdn.com'],
  },
};

module.exports = withNextIntl(nextConfig);
