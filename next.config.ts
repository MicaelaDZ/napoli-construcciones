import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 Esto desactiva el bloqueo por errores de lint
  },
};

export default nextConfig;
