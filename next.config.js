/** @type {import('next').NextConfig} */
const APK_URL =
  process.env.APK_URL ||
  'https://github.com/hootazzz/raffeq-landing/releases/latest/download/raffeq.apk';

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/downloads/raffeq.apk', destination: APK_URL, permanent: false },
    ];
  },
};
module.exports = nextConfig;
