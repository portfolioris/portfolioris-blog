import React, { Fragment } from 'react';
import Layout from 'components/organisms/Layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ArticleOverview from 'components/organisms/ArticleOverview';

const blog = ({ data }) => {
  const {
    craft: {
      entry,
      globals,
    },
  } = data;

  return (
    <Fragment>
      <Helmet todotitle={`todo: ${entry.title} | ${globals.settings.siteName}`} />
      <Layout>
        {entry.modules.map(item => (
          item.typeName === 'craft_ModulesBlogOverview' ? (
            <ArticleOverview key={item.id} {...item} />
          ) : null
        ))}
        {/* {entry.modules.map(item => (
          <Fragment key={item.id}>
            {item.typeName === 'craft_ModulesBlogOverview' ? (
              <ArticleOverview {...item} />
            ) : null}
          </Fragment>
        ))} */}
      </Layout>
    </Fragment>
  );
};

blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

blog.defaultProps = {
  data: {},
};

export default blog;

export const pageQuery = graphql`
  query modularPage($uri: String!) {
    craft {
      entry(uri: $uri) {
        id
        title
        ... on craft_ModularPage {
          modules {
            typeName: __typename
            ...articleOverviewFragment
#            ... on craft_ModulesBlogOverview {
#              id
#              heading
#              viewAll
#            }
          }
        }
      }
      globals {
        settings {
          siteName
        }
      }
    }
  }
`;
