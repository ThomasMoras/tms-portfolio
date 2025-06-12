import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    domains: ["localhost", "thomasmoras.dev"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Optimize build settings
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize page loading
  pageExtensions: ["tsx", "ts"],
  output: "standalone",

  // Optimize static files
  staticPageGenerationTimeout: 30,

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default withNextIntl(nextConfig);
