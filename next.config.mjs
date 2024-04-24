// https://nextjs.org/docs/app/api-reference/components/image#remotepatterns

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "openweathermap.org"
      }
    ]
  }
};

export default nextConfig;
