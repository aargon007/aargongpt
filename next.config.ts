import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'standalone',
    reactCompiler: true,
    /* config options here */
    experimental: {
        serverActions: {
            bodySizeLimit: '15mb',
        },
    },
};

export default nextConfig;
