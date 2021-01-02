/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-sass'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    sourceMaps: true,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  experiments: {
    optimize: {
      bundle: true,
      minify: true,
    },
  },
};
