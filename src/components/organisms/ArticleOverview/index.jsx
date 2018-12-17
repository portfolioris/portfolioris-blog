import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';
import Heading from 'components/atoms/text/Heading';
import Theme from 'components/atoms/utilities/Theme';

const ArticleOverview = ({
  heading,
  // latest,
  // viewAll,
}) => (
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
        }
      }
    `}
    render={({ craft }) => (
      <section>
        <Theme color="black">
          <Layer>
            <Retain>
              <Heading text={heading} level={2} stylingLevel={1} />
              <ul className="o-layout">
                {craft.entries.map(item => (
                  <li
                    key={item.id}
                    className="u-1/2@tablet  u-1/3@desktop"
                  >
                    <ArticleOverviewItem
                      {...item}
                    />
                  </li>
                ))}
              </ul>
            </Retain>
          </Layer>
        </Theme>
      </section>
    )}
  />
);

ArticleOverview.propTypes = {
  heading: PropTypes.string,
  // items: PropTypes.arrayOf(PropTypes.any),
};
ArticleOverview.defaultProps = {
  heading: null,
  // items: [],
};

export default ArticleOverview;

export const articleOverviewFragment = graphql`
  fragment articleOverviewFragment on craft_ModulesBlogOverview {
    id
    heading
    latest
    viewAll
  }
`;
