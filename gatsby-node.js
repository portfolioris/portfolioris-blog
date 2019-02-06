const path = require('path');
const fs = require('fs');
const { introspectionQuery, graphql } = require('gatsby/graphql');

// create URLs for pages dynamically
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // get uri and page type
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

      // loop through entries (pages)
      result.data.craft.entries.forEach((entry) => {
        switch (entry.section.handle) {
          // match page types (handle) to templates
          case 'blog':
          case 'modularPage':
            createPage({
              // in CraftCMS, the uri for the homepage is '__home__'
              path: entry.uri === '__home__' ? '/' : entry.uri,
              // define the component/template that should be associated with page
              component: path.resolve(`src/templates/${entry.section.handle}.jsx`),
              // uri is passed to template to fetch all page data
              context: {
                uri: entry.uri,
              },
            });
            break;
          default:
            break;
        }
      });
    });
};

// create import aliases
exports.onCreateWebpackConfig = ({
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
};

// create GraphQL hints file for code completion in WebStorm
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
