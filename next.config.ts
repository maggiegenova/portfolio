import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  // any other config you already have
  basePath: "/portfolio",
  assetPrefix: "/portfolio/", 
};

export default nextConfig;
