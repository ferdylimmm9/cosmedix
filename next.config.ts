import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        source: "/:all*(json)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/chunks/:all*(js)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "private, max-age=31536000, must-revalidate",
                },
              ],
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
