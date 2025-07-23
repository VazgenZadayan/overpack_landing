/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/app/styles"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
