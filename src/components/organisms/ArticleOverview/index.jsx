import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';
import Heading from 'components/atoms/text/Heading';
import Theme from 'components/atoms/utilities/Theme';
import Button from 'components/atoms/Button';

const ArticleOverview = ({
  heading,
  hideHeadingVisually,
  // latest,
  viewAllBlogs,
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
              <Heading
                text={heading}
                level={2}
                stylingLevel={2}
                className={hideHeadingVisually ? 'u-visually-hidden' : null}
              />
            </Retain>
            <Retain size="breakout">
              <ul className="o-layout  o-layout--gutter  o-layout--equalheight">
                {craft.entries.map(item => (
                  <li
                    key={item.id}
                    className="o-layout__cell   u-fraction--1/2@from-lap  u-fraction--1/3@from-desk"
                  >
                    <ArticleOverviewItem
                      {...item}
                    />
                  </li>
                ))}
              </ul>
              {viewAllBlogs && viewAllBlogs.entry ? (
                <div className="o-layout  o-layout--align-center">
                  <div className="o-layout__cell  o-layout__cell--fit">
                    <p>
                      <Button
                        href={viewAllBlogs.entry.uri}
                        text={viewAllBlogs.customText}
                      />
                    </p>
                  </div>
                </div>
              ) : null}
            </Retain>
          </Layer>
        </Theme>
      </section>
    )}
  />
);

ArticleOverview.propTypes = {
  heading: PropTypes.string,
  hideHeadingVisually: PropTypes.bool,
  viewAllBlogs: PropTypes.objectOf(PropTypes.any),
};
ArticleOverview.defaultProps = {
  heading: null,
  hideHeadingVisually: false,
  viewAllBlogs: null,
};

export default ArticleOverview;

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
