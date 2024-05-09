/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/me-market",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*"
            },

        ],
    },
};

export default nextConfig;


