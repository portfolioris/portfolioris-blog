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
      const pages = result.data.craft.entries;

      pages.forEach((entry) => {
        createPage({
          path: entry.uri,
          component: path.resolve(
            `src/templates/${entry.section.handle}.jsx`,
            // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
          ),
          // additional data can be passed via context
          context: {
            uri: entry.uri,
          },
        });
      });

      /*
      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach((edge) => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach((tag) => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`;

        createPage({
          path: tagPath,
          component: path.resolve('src/templates/tags.js'),
          context: {
            tag,
          },
        });
      });
      */
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
    path.resolve(process.cwd(), `graphql.schema.json`),
    JSON.stringify(data),
  );
};
