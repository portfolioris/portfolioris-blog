module.exports = {
  'env': {
    'browser': true,
  //   'es6': true,
  },
  'extends': [
    'airbnb',
  ],
  // 'parserOptions': {
  //   'ecmaFeatures': {
  //     'experimentalObjectRestSpread': true,
  //     'jsx': true,
  //   },
  //   'sourceType': 'module',
  // },
  // 'plugins': [
  //   'react',
  // ],
  'rules': {
    // 'import/no-extraneous-dependencies': 'off',
    // 'react/jsx-filename-extension': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
  },
  'settings': {
    'import/resolver': {
      'alias': {
        'map': [
          [
            'components',
            './src/components',
          ],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  globals: {
    graphql: true,
    react: true,
  },
};
