/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com', // 🔥 정확히 이걸 추가해야 함
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
