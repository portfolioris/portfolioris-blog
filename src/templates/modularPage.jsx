import React, { Fragment } from 'react';
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
    <Fragment>
      <Layout
        entry={entry}
      >
        {entry.modules.map(item => (
          item.typeName === 'craft_ModulesBlogOverview' ? (
            <ArticleOverview key={item.id} {...item} />
          ) : null
        ))}
      </Layout>
    </Fragment>
  );
};

ModularPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

ModularPage.defaultProps = {
  data: {},
};

export default ModularPage;

export const pageQuery = graphql`
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
