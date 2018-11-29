module.exports = {
  'env': {
    'browser': true,
  },
  'extends': [
    'airbnb',
  ],
  'settings': {
    'import/resolver': {
      'alias': {
        'map': [
          [
            'components',
            './src/components',
          ],
          [
            'img',
            './src/img',
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
