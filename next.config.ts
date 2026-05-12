import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/MY-PORTFOLIOO",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
