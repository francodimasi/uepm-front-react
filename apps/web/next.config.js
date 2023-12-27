const withNextIntl = require('next-intl/plugin')(
  '../../packages/intl/src/i18n.ts',
);

module.exports = withNextIntl({
  reactStrictMode: true,
  transpilePackages: ['ui', 'i18n', 'intl', 'rest'],
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
});
