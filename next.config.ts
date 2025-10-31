import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co"], // Add ImageBB hostname here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
