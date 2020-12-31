module.exports = {
  mount: {
    dist: '/',
    src: '/',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-sass'],
  installOptions: {
    sourceMap: true,
  },
  buildOptions: {
    out: 'dist',
    sourceMaps: true,
  },
};
