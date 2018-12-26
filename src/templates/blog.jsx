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
      globals,
    },
  } = data;

  const schema = [
    {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': `${globals.settings.domain}/${entry.section.handle}`,
            name: entry.section.name,
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': `${globals.settings.domain}/${entry.uri}`,
            name: entry.title,
          },
        },
      ],
    },
    {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: `${globals.settings.domain}${entry.uri}`,
      name: entry.title,
      headline: entry.title,
      image: {
        '@type': 'ImageObject',
        // url: `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1200,h_630/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`,
      },
      description: entry.description,
      author: {
        '@type': 'Person',
        name: `${entry.author.firstName} ${entry.author.lastName}`,
      },
      datePublished: new Date(entry.postDate * 1000).toISOString().split('T')[0],
      dateModified: new Date(entry.dateUpdated * 1000).toISOString().split('T')[0],
      publisher: {
        '@type': 'Organization',
        name: globals.settings.siteName,
      },
      mainEntityOfPage: `${globals.settings.domain}/${entry.uri}`,
    },
  ];

  return (
    <Layout
      entry={entry}
      schema={schema}
    >
      <Helmet
        meta={[
          // blog-specific meta tags
          { property: 'og:type', content: 'article' },
        ]}
        schema={schema}
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

export const blogPageQuery = graphql`
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
