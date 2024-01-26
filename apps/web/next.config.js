const withNextIntl = require('next-intl/plugin')(
  '../../packages/intl/src/i18n.ts',
);

module.exports = withNextIntl({
  reactStrictMode: true,
  transpilePackages: ['ui', 'intl', 'rest'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.unensayoparami.org',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'content.unensayoparami.org',
        port: '',
        pathname: '/wp-includes/images/**',
      },
      {
        protocol: 'https',
        hostname: 'uepm-dev.sfo3.digitaloceanspaces.com',
        port: '',
        pathname: '/public/images/**',
      },
    ],
  },
});
