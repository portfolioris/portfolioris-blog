import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from 'components/atoms/utilities/Theme';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Heading from 'components/atoms/text/Heading';
import ArticleOverviewItem from 'components/molecules/ArticleOverviewItem';
import Button from 'components/atoms/Button';
import TagFilter from 'components/molecules/TagFilter';

class ArticleOverview extends Component {
  componentDidMount() {
    //
  }

  render() {
    const {
      heading,
      hideHeadingVisually,
      items,
      viewAllBlogs,
      tags,
    } = this.props;

    return (
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
              <TagFilter
                tags={tags}
              />
            </Retain>
            <Retain size="breakout">
              <ul className="o-layout  o-layout--gutter  o-layout--equalheight">
                {items.map(item => (
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
    );
  }
}

ArticleOverview.propTypes = {
  heading: PropTypes.string,
  hideHeadingVisually: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.any),
  tags: PropTypes.arrayOf(PropTypes.any),
  viewAllBlogs: PropTypes.objectOf(PropTypes.any),
};
ArticleOverview.defaultProps = {
  heading: null,
  hideHeadingVisually: false,
  items: null,
  tags: null,
  viewAllBlogs: null,
};

export default ArticleOverview;
