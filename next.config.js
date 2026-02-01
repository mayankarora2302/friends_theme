/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [],
        unoptimized: false,
        formats: ['image/webp', 'image/avif'],
    },
    webpack: (config) => {
        // Handle audio files
        config.module.rules.push({
            test: /\.(mp3|wav|ogg|m4a)$/,
            type: 'asset/resource',
        });
        return config;
    },
};

module.exports = nextConfig;
