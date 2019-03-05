import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ArticleOverview from 'components/organisms/ArticleOverview';

const ArticleOverviewSection = (props) => {
  const { craft } = useStaticQuery(graphql`
    query Posts {
      craft {
        entries(section: [blog]) {
          ... on craft_Blog {
            id
            title
            subheading
            uri
            postDate
            tags {
              slug
              title
            }
          }
        }
        tags {
          slug
          title
        }
      }
    }
  `);

  return (
    <ArticleOverview
      {...props}
      items={craft.entries}
      tags={craft.tags}
    />
  );
};

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
