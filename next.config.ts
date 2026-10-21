import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/education", destination: "/#education", permanent: true },
      { source: "/achievements", destination: "/#achievements", permanent: true },
      { source: "/contributions", destination: "/#contributions", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
