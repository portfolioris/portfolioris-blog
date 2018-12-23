import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/organisms/Layout';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Text from 'components/atoms/text/Text';
import Heading from 'components/atoms/text/Heading';
import DateString from 'components/atoms/text/DateString';

const Blog = ({ data }) => {
  const {
    craft: {
      entry,
    },
  } = data;

  return (
    <Layout
      entry={entry}
    >
      <Helmet
        meta={[
          // blog-specific meta tags
          { property: 'og:type', content: 'article' },
        ]}
      />
      <article>
        <Layer>
          <header>
            <Retain size="narrow">
              <Heading
                text={entry.title}
                level={1}
                stylingLevel={0}
                className="u-m-b-none"
              />
              <Text
                text={entry.subheading}
                type="md"
                modifier="intro"
                className="u-m-b-none"
              />
              <p className="u-micro">
                {`Geplaatst door ${entry.author.firstName} ${entry.author.lastName}, `}
                <DateString dateString={entry.postDate} />
              </p>
            </Retain>
          </header>
        </Layer>
        <Layer collapseTop>
          <Retain size="narrow">
            <Text
              text={entry.richText}
              type="md"
            />
          </Retain>
        </Layer>
      </article>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

Blog.defaultProps = {
  data: {},
};

export default Blog;

export const BlogPostQuery = graphql`
  query BlogPost($uri: String!) {
    craft {
      entry(uri: $uri) {
        id
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
