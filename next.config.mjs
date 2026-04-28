/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'github.com', 'linkedin.com'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
}

export default nextConfig;
