import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 640, 828, 1080, 1280, 1600, 1920],
  },
  async headers() {
    return [
      {
        // Videos e imágenes del portafolio: caché larga (cambia el nombre del archivo si lo reemplazas)
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
