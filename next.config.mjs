/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 静的サイトとして書き出す設定
    images: {
        unoptimized: true, // 静的書き出し時に必要
    },
};

export default nextConfig;
