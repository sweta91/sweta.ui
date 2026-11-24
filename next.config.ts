
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sweta.ui',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
