const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const { createFilePath } = require('gatsby-source-filesystem');
const { introspectionQuery, graphql } = require('gatsby/graphql');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          'src/templates/blog.jsx',
          // `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
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
  // try {
  const { schema } = store.getState();

  const data = await graphql(schema, introspectionQuery);

  await fs.writeFile(
    path.resolve(process.cwd(), `graphql.schema.json`),
    JSON.stringify(data),
  );
  // } catch (error) {
  //   return error
  // }
};
