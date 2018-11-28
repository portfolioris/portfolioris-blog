import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/organisms/Layout';
import MainVisual from 'components/organisms/MainVisual';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Text from 'components/atoms/text/Text';

const blog = ({ data, location }) => {
  const {
    craft: {
      entry,
      globals,
    },
  } = data;

  return (
    <Fragment>
      <Helmet>
        {/* Blog-specific meta tags */}
        <title>{entry.title}</title>
        <meta name="description" content={entry.description} />
        <meta property="og:type" content="article" />
        {/* todo: don't hard-code domain */}
        <meta property="og:title" content={entry.title} />
        <meta property="og:url" content={`https://beta.portfolioris.nl${location.pathname}`} />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1200,h_630/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`}
        />
        <meta property="og:description" content={entry.description} />
        <meta property="og:site_name" content={globals.settings.siteName} />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={globals.settings.twitterHandle} />
        <meta name="twitter:creator" content={entry.author.twitterHandle || globals.settings.twitterHandle} />
        <meta name="twitter:url" content={`https://beta.portfolioris.nl${location.pathname}`} />
        <meta name="twitter:title" content={entry.title} />
        <meta name="twitter:description" content={entry.description} />
        <meta
          name="twitter:image"
          content={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1920/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`}
        />
      </Helmet>
      <Layout>
        <MainVisual
          heading={entry.title}
          subheading={entry.subheading}
          image={entry.mainImage[0]}
        />
        <Layer>
          <Retain size="narrow">
            <Text
              text={entry.richText}
              type="md"
            />
          </Retain>
        </Layer>
      </Layout>
    </Fragment>
  );
};

blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
};

blog.defaultProps = {
  data: {},
  location: {},
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
          description
          mainImage {
            filename
            title
            folder {
              path
            }
          }
          author {
            twitterHandle
          }
        }
      }
      globals {
        settings {
          siteName
          twitterHandle
        }
      }
    }
  }
`;
