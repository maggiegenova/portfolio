import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  // start - deploy to github pages
  basePath: "/portfolio",
  assetPrefix: "/portfolio/", 
  // end - deploy to github pages
};

export default nextConfig;
