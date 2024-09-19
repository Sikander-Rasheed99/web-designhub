/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.logodesignscenter.com',
            'http://localhost:3000/',
        ],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wp23.cryscampus.com',
                port: '',
                pathname: '/**',
            }
        ]
    },
}
module.exports = nextConfig