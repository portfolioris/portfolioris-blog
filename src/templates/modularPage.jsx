import React, { Fragment } from 'react';
import Layout from 'components/organisms/Layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const blog = ({ data }) => {
  const { craft: { entry } } = data;

  return (
    <Fragment>
      <Helmet title={`${entry.title} | Modp`} />
      <Layout>
        modules here
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
        }
    }
`;
