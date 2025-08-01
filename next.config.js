/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/app/styles"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.overpack.am",
          },
        ],
        destination: "https://overpack.am/:path*/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "https://www.overpack.am",
          },
        ],
        destination: "https://overpack.am/:path*/",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "http://overpack.am",
          },
        ],
        destination: "https://overpack.am/:path*/",
        statusCode: 301,
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;
