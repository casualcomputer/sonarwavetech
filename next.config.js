/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  // NOTE: `eslint` config in next.config.js is no longer supported by Next.js 16+.
  // If you relied on `ignoreDuringBuilds`, consider migrating that behavior elsewhere.
  reactStrictMode: true,
  // Add an empty turbopack config to explicitly opt-in/mute the Turbopack vs webpack check.
  turbopack: {},
});
