import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    domains: ["pypi.org"], // Allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pypi.org",
        port: "",
        pathname: "/static/images/**",
      },
    ],
    minimumCacheTTL: 604800, // 7 days
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: "tokyo-night",
  keepBackground: false,
  defaultLang: "plaintext",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

export default withMDX(nextConfig);
