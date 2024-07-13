/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["@heroicons/react"],
      },
      reactStrictMode: true,
      swcMinify: true,
};

export default nextConfig;
