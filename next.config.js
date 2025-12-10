/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    });

    return config;
  },

  turbopack: {
    root: process.cwd(),
    rules: {
      '*.yaml': {
        condition: { not: 'foreign' },
        loaders: ['yaml-loader'],
        as: '*.js'
      },
      '*.yml': {
        condition: { not: 'foreign' },
        loaders: ['yaml-loader'],
        as: '*.js'
      }
    }
  }
}

module.exports = nextConfig
