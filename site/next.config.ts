import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azummedical.com",
        pathname: "/wp-content/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
