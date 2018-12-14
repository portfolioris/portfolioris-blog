import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/organisms/Layout';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Text from 'components/atoms/text/Text';
import Heading from 'components/atoms/text/Heading';
import DateString from 'components/atoms/text/DateString';

const blog = ({ data }) => {
  const {
    craft: {
      entry,
      globals,
    },
  } = data;

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: globals.settings.domain,
      name: globals.settings.siteName,
    },
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
        url: `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1200,h_630/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`,
      },
      description: entry.description,
      author: {
        '@type': 'Person',
        name: `${entry.author.firstName} ${entry.author.lastName}`,
      },
      datePublished: new Date(entry.postDate * 1000).toISOString().split('T')[0],
      dateModified: new Date(entry.dateUpdated * 1000).toISOString().split('T')[0],
      publisher: {
        '@type': 'Person',
        name: `${entry.author.firstName} ${entry.author.lastName}`,
      },
      mainEntityOfPage: `${globals.settings.domain}/${entry.uri}`,
    },
  ];

  return (
    <Layout>
      <Helmet>
        {/* Blog-specific meta tags */}
        <title>{entry.title}</title>
        <meta name="description" content={entry.description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={entry.title} />
        <meta property="og:description" content={entry.description} />
        <meta property="og:url" content={`${globals.settings.domain}/${entry.uri}`} />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1200,h_630/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`}
        />
        <meta property="og:site_name" content={globals.settings.siteName} />
        <meta property="og:locale" content="nl_NL" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={globals.settings.twitterHandle} />
        <meta name="twitter:image:alt" content={entry.mainImage[0].title} />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <Layer>
        <Retain size="narrow">
          <Heading
            text={entry.title}
            level={1}
            stylingLevel={0}
          />
          <Text
            text={entry.subheading}
            type="md"
            modifier="intro"
            className="u-mb--small"
          />
          <p className="u-micro">
            {`Geplaatst door ${entry.author.firstName} ${entry.author.lastName}, `}
            <DateString dateString={entry.postDate} />
          </p>
        </Retain>
      </Layer>
      <Layer
        collapseTop
      >
        <Retain size="narrow">
          <Text
            text={entry.richText}
            type="md"
          />
        </Retain>
      </Layer>
    </Layout>
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
