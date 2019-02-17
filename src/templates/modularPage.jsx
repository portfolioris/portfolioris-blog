import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/organisms/Layout';
import ArticleOverviewSection from 'components/sections/ArticleOverviewSection';

const ModularPage = ({ data }) => {
  const {
    craft: {
      entry,
      globals,
    },
  } = data;

  const breadcrumbs = [{
    '@type': 'ListItem',
    position: entry.level,
    item: {
      '@id': `${globals.settings.domain}/${entry.uri}`,
      name: entry.title,
    },
  }];

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

  const schema = [{
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs,
  }];

  return (
    <Layout
      entry={entry}
      schema={schema}
    >
      {entry.modules.map(item => (
        item.typeName === 'craft_ModulesBlogOverview' ? (
          <ArticleOverviewSection key={item.id} {...item} />
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
