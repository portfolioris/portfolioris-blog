import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';
import Heading from '../../atoms/text/Heading';

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
        <Layer>
          <Retain>
            <Heading text={heading} level={2} stylingLevel={1} />
            <ul className="o-layout  o-layout--gutter-small">
              {craft.entries.map(item => (
                <li
                  key={item.id}
                  className="o-layout__cell  u-fraction--6of12@lap  u-fraction--4o12@desk"
                >
                  <ArticleOverviewItem
                    {...item}
                    // href={item.uri}
                    // title={item.title}
                  />
                </li>
              ))}
            </ul>
          </Retain>
        </Layer>
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
