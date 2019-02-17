import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ArticleOverview from 'components/organisms/ArticleOverview';

const ArticleOverviewSection = props => (
  <StaticQuery
    query={graphql`
      query Posts {
        craft {
          entries(section: [blog]) {
            ... on craft_Blog {
              id
              title
              subheading
              uri
              postDate
            }
          }
          tags {
            slug
            title
          }
        }
      }
    `}
    render={({ craft }) => (
      <ArticleOverview
        {...props}
        items={craft.entries}
        tags={craft.tags}
      />
    )}
  />
);

export default ArticleOverviewSection;

export const articleOverviewFragment = graphql`
  fragment articleOverviewFragment on craft_ModulesBlogOverview {
    id
    heading
    hideHeadingVisually
    latest
    viewAllBlogs {
      customText
      entry {
        uri
      }
    }
  }
`;
