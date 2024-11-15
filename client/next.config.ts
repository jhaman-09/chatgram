import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains : ["robohash.org"]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination : "http://localhost:4000/:path*"
      }
    ]
  }
};

export default nextConfig;
