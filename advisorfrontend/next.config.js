/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  transpilePackages: ['@mui/x-charts'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = {
  config,
  env: {
    META_ACCESS_TOKEN:
      'EAAKbzMCDBZBMBOzvKxXYCxZBSMMp91LpgMoUBaBidQ5RuiMcsH9JZBHedYhmm3sbUSwE8DSsLr3er8SWcd0AlKPU4lt8ZCRVaKr5EeeiNX6mugsLAQ57IjlwphvP3ij68RkPxKx9ieHPdHRZCZAip9ZB9GcRZCcq1GbRTAM22mc10WkiaCoVGQr1rBcCW3CHdjoDzzD6fdeVZB1n8wGtx',
  },
};
