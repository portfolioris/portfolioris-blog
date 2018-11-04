import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/organisms/Layout';
import MainVisual from 'components/organisms/MainVisual';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Rte from 'components/atoms/text/Rte';

const blog = ({ data }) => {
  const { craft: { entry } } = data;

  return (
    <Fragment>
      <Helmet title={`${entry.title} | Blog`} />
      <Layout>
        <MainVisual
          heading={entry.title}
          subheading={entry.subheading}
        />
        <Layer>
          <Retain size="narrow">
            <Rte richText={entry.richText} />
          </Retain>
        </Layer>
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
  query BlogPost($uri: String!) {
    craft {
      entry(uri: $uri) {
        title
        ... on craft_Blog {
          title
          subheading
          richText
        }
      }
    }
  }
`;
