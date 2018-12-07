import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from 'components/organisms/Layout';
// import MainVisual from 'components/organisms/MainVisual';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Text from 'components/atoms/text/Text';
import Heading from 'components/atoms/text/Heading';
import DateString from 'components/atoms/text/DateString';


const blog = ({ data, location }) => {
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
      url: 'https://beta.portfolioris.nl',
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
            '@id': 'https://beta.portfolioris.nl/blog',
            name: 'Blog',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': `https://beta.portfolioris.nl${location.pathname}`,
            name: entry.title,
          },
        },
      ],
    },
    {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: `https://beta.portfolioris.nl${location.pathname}`,
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
      datePublished: `${new Date(entry.postDate * 1000).toISOString().split('T')[0]}`,
      dateModified: new Date(entry.dateUpdated * 1000).toISOString().split('T')[0],
      publisher: {
        '@type': 'Person',
        name: `${entry.author.firstName} ${entry.author.lastName}`,
      },
      mainEntityOfPage: `https://beta.portfolioris.nl${location.pathname}`,
    },
  ];

  return (
    <Fragment>
      <Helmet>
        {/* Blog-specific meta tags */}
        <title>{entry.title}</title>
        <meta name="description" content={entry.description} />
        <meta property="og:type" content="article" />
        {/* todo: don't hard-code domain */}
        <meta property="og:title" content={entry.title} />
        <meta property="og:description" content={entry.description} />
        <meta property="og:url" content={`https://beta.portfolioris.nl${location.pathname}`} />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1200,h_630/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`}
        />
        <meta property="og:site_name" content={globals.settings.siteName} />
        <meta property="og:locale" content="nl_NL" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={globals.settings.twitterHandle} />
        <meta name="twitter:image:alt" content={entry.mainImage[0].title} />

        {/* <meta
          name="twitter:creator"
          content={entry.author.twitterHandle || globals.settings.twitterHandle}
        />
        <meta name="twitter:url" content={`https://beta.portfolioris.nl${location.pathname}`} />
        <meta name="twitter:title" content={entry.title} />
        <meta name="twitter:description" content={entry.description} />
        <meta
          name="twitter:image"
          content={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1920/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`}
        /> */}

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
      <Layout>
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
            {/* <Date dateString={entry.postDate} /> */}
            {/* <MainVisual
          heading={entry.title}
          subheading={entry.subheading}
          image={entry.mainImage[0]}
        /> */}
          </Retain>
        </Layer>
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
            firstName
            lastName
          }
          postDate
          dateUpdated
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
