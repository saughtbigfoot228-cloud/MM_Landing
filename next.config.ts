import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/MM_Landing',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
