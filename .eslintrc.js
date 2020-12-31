module.exports = {
  extends: 'eslint-config-claims-intake',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 26,
    },
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
