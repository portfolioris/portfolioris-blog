import React from 'react';
import PropTypes from 'prop-types';

const TagFilter = ({
  tags,
  handleClickTag,
  activeTags,
}) => (
  <form method="get" action="">
    <div className="o-layout  o-layout--gutter">
      {tags.map(tag => (
        <div
          key={tag.slug}
          className="o-layout__cell  o-layout__cell--fit"
        >
          <label htmlFor={tag.slug}>
            <input
              type="checkbox"
              name={tag.slug}
              id={tag.slug}
              onChange={() => handleClickTag(tag.slug)}
              // onChange={() => handleCheck(tag.slug)}
              checked={activeTags.includes(tag.slug)}
            />
            <span>
              {tag.title}
            </span>
          </label>
        </div>
      ))}
    </div>
  </form>
);

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any),
  handleClickTag: PropTypes.func,
  activeTags: PropTypes.arrayOf(PropTypes.string),
};

TagFilter.defaultProps = {
  tags: [],
  handleClickTag: null,
  activeTags: [],
};

export default TagFilter;
