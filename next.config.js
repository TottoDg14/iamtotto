module.exports = {
  reactStrictMode: true,
  plugins: {
    'fontawesome-svg-core': {
      'license': 'free'
    }
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}
