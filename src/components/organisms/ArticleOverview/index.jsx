import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';

const ArticleOverview = () => (
  <StaticQuery
    query={graphql`
      query Posts {
        craft {
          entries(section: [blog]) {
            ... on craft_Blog {
              id
              title
              uri
            }
          }
        }
      }
    `}
    render={({ craft }) => (
      <section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Layer>
          <Retain>
            <ul className="o-layout  o-layout--gutter-small">
              {craft.entries.map(item => (
                <li
                  key={item.id}
                  className="o-layout__cell  u-fraction--6of12@lap  u-fraction--4o12@desk"
                >
                  <ArticleOverviewItem
                    href={item.uri}
                    title={item.title}
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
  // items: PropTypes.arrayOf(PropTypes.any),
};
ArticleOverview.defaultProps = {
  // items: [],
};

export default ArticleOverview;
