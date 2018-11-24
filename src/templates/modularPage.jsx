import React, { Fragment } from 'react';
import Layout from 'components/organisms/Layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ArticleOverview from 'components/organisms/ArticleOverview';

const blog = ({ data }) => {
  const { craft: { entry, globals } } = data;

  return (
    <Fragment>
      <Helmet title={`${entry.title} | ${globals.settings.siteName}`} />
      <Layout>
        <ArticleOverview />
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
                title
            }
            globals {
                settings {
                    siteName
                }
            }
        }
    }
`;
