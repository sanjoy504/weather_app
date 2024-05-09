/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.weatherapi.com'],
        unoptimized: true,
      },
};

export default nextConfig;
