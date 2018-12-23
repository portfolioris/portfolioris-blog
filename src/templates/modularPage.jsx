import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/organisms/Layout';
import ArticleOverview from 'components/organisms/ArticleOverview';

const ModularPage = ({ data }) => {
  const {
    craft: {
      entry,
    },
  } = data;

  return (
    <Layout
      entry={entry}
    >
      {entry.modules.map(item => (
        item.typeName === 'craft_ModulesBlogOverview' ? (
          <ArticleOverview key={item.id} {...item} />
        ) : null
      ))}
    </Layout>
  );
};

ModularPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

ModularPage.defaultProps = {
  data: {},
};

export default ModularPage;

export const modularPageQuery = graphql`
  query modularPage($uri: String!) {
    craft {
      entry(uri: $uri) {
        ... on craft_ModularPage {
          id
          title
          description
          ... on craft_ModularPage {
            modules {
              typeName: __typename
              ...articleOverviewFragment
            }
          }
          author {
            twitterHandle
            firstName
            lastName
          }
          postDate
          dateUpdated
          uri
          section {
            name
            handle
          }
        }
      }
      globals {
        settings {
          siteName
          twitterHandle
          domain
        }
      }
    }
  }
`;
