import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        serverActions: {
            bodySizeLimit: '15mb',
        },
        scrollRestoration: true,
    },
};

export default nextConfig;
