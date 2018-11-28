const path = require('path');
const fs = require('fs');

const { introspectionQuery, graphql } = require('gatsby/graphql');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      craft {
        entries {
          uri
          section {
            handle
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const pages = result.data.craft.entries;

      pages.forEach((entry) => {
        createPage({
          path: entry.uri === '__home__' ? '/' : entry.uri,
          component: path.resolve(
            `src/templates/${entry.section.handle}.jsx`,
          ),
          // additional data can be passed via context
          context: {
            uri: entry.uri,
          },
        });
      });
    });
};

exports.onCreateWebpackConfig = ({
  stage,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        'src',
        'node_modules',
      ],
    },
  });
  // If production JavaScript and CSS build
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.onPostBootstrap = async ({ store }) => {
  const { schema } = store.getState();
  const data = await graphql(schema, introspectionQuery);
  await fs.writeFile(
    path.resolve(process.cwd(), 'graphql.schema.json'),
    JSON.stringify(data),
    (err) => {
      if (err) throw err;
    },
  );
};
