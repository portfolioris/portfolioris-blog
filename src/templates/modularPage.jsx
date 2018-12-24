import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/organisms/Layout';
import ArticleOverview from 'components/organisms/ArticleOverview';

const ModularPage = ({ data }) => {
  const {
    craft: {
      entry,
      globals,
    },
  } = data;

  const schemaOrgJSONLD = [];
  const breadcrumbs = [];

  entry.ancestors.forEach((ancestor) => {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: ancestor.level,
      item: {
        '@id': `${globals.settings.domain}/${ancestor.uri}`,
        name: ancestor.title,
      },
    });
  });

  breadcrumbs.push({
    '@type': 'ListItem',
    position: entry.level,
    item: {
      '@id': `${globals.settings.domain}/${entry.uri}`,
      name: entry.title,
    },
  });

  const bcSchema = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs,
  };

  schemaOrgJSONLD.push(bcSchema);

  return (
    <Layout
      entry={entry}
      schema={schemaOrgJSONLD}
    >
      {entry.modules.map(item => (
        item.typeName === 'craft_ModulesBlogOverview' ? (
          <ArticleOverview key={item.id} {...item} />
        ) : null
      ))}
    </Layout>
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
        id
        title
        uri
        level
        ... on craft_ModularPage {
          description
          modules {
            typeName: __typename
            ...articleOverviewFragment
          }
        }
        ancestors {
          title
          level
          uri
        }
      }
      globals {
        settings {
          siteName
          domain
        }
      }
    }
  }
`;
