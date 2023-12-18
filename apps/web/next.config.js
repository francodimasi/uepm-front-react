module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'i18n', 'rest'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.unensayoparami.org',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};
