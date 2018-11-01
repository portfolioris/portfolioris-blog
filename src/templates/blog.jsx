import React, { Fragment } from 'react';
import Layout from 'components/organisms/Layout';
import MainVisual from 'components/organisms/MainVisual';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Helmet from 'react-helmet';
import CodeBlock from 'components/atoms/text/CodeBlock';
import ImageBlock from 'components/atoms/text/ImageBlock';

const blog = ({ data }) => {
  const { craft: { entry } } = data;

  return (
    <Fragment>
      <Helmet title={`${entry.title} | Blog`} />
      <Layout>
        <MainVisual heading={entry.title} />
        <Layer>
          <Retain size="narrow">
            <ReactMarkdown
              source={entry.markdown}
              renderers={{
                code: CodeBlock,
                image: ImageBlock,
              }}
            />
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
                    markdown
                }
            }
        }
    }
`;
