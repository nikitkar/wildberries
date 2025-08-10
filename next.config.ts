import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: {
    remotePatterns: [new URL("https://placehold.co/600x400/000000/FFFFFF/png")],
  },
};

export default nextConfig;
