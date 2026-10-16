import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/proyectos/residencial", destination: "/proyectos/particulares", permanent: false },
      { source: "/proyectos/residencial/:path*", destination: "/proyectos/particulares", permanent: false },
      { source: "/proyectos/exteriores", destination: "/proyectos/particulares", permanent: false },
      { source: "/proyectos/exteriores/:path*", destination: "/proyectos/particulares", permanent: false },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
