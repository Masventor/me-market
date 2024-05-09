/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/me-market",
    images: {
        remotePatterns: [
            {
                hostname: 'mdbcdn.b-cdn.net',
            },
            {
                hostname: 'img.daisyui.com',
            },
            {
                hostname: 'is1-ssl.mzstatic.com',
            },
            {
                hostname: 'static.rustore.ru',
            },
            {
                hostname: 'main-cdn.sbermegamarket.ru'
            }
        ],
    },
};

export default nextConfig;


