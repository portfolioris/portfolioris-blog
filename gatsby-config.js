require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          'src/sass',
          'node_modules',
        ],
        postCssPlugins: [pxtorem({
          propList: ['*'],
          minPixelValue: 4,
        })],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'craft',
        fieldName: 'craft',
        url: `${process.env.CRAFT_API_URL}`,
        headers: {
          authorization: `${process.env.CRAFT_API_TOKEN}`,
        },
        refetchInterval: 60,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-stylelint',
      options: {
        files: ['**/*.{scss}'],
        syntax: 'scss',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portfolioris',
        short_name: 'Portfolioris',
        start_url: '/',
        background_color: '#1a1918',
        theme_color: '#3a8500',
        display: 'minimal-ui',
        icon: 'src/img/favicon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: SAMEORIGIN',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade',
            'Feature-Policy: autoplay \'self\'',
            'Content-Security-Policy: default-src \'none\'; script-src \'self\' \'unsafe-inline\' https://portfolioris.nl; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data: https://res.cloudinary.com https://portfolioris.nl',
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: false, // boolean to turn off the default security headers
        // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        // mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
