import type { NextConfig } from "next";

const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/my-project" : "",
  assetPrefix: isGithubPages ? "/my-project/" : "",
};

export default nextConfig;
