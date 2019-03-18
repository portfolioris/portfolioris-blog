import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from 'components/atoms/text/Heading';
import DateString from 'components/atoms/text/DateString';
import Theme from 'components/atoms/utilities/Theme';

const ArticleOverviewItem = ({
  title,
  subheading,
  uri,
  postDate,
  className,
}) => (
  <Theme color="white" className={classNames('u-m-b', className)}>
    <article className="u-module  u-p  u-h-100  as-clickable">
      <Heading
        text={title}
        level={3}
        stylingLevel={4}
        href={uri}
        className="u-m-b-tiny"
      />
      <p className="u-micro  u-text-bold  u-m-b-tiny">
        {subheading}
      </p>
      <p className="u-micro">
        <DateString dateString={postDate} />
      </p>
    </article>
  </Theme>
);

ArticleOverviewItem.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  uri: PropTypes.string,
  postDate: PropTypes.string,
  className: PropTypes.string,
};
ArticleOverviewItem.defaultProps = {
  title: null,
  subheading: null,
  uri: null,
  postDate: null,
  className: null,
};

export default ArticleOverviewItem;
