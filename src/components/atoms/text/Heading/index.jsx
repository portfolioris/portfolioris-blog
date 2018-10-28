import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import './Heading.scss';

const Heading = ({
  text,
  level,
  stylingLevel,
  secondary,
  className,
  href,
}) => {
// if the text is empty do not render this thang
  if (!text) {
    return null;
  }
  return React.createElement(
    `h${level}`,
    {
      className: classNames(`u-heading  ${className}`, {
        'u-alpha': stylingLevel === 1,
        'u-beta': stylingLevel === 2,
        'u-gamma': stylingLevel === 3,
        'u-delta': stylingLevel === 4,
        'u-epsilon': stylingLevel === 5,
        'u-foxtrot': stylingLevel === 6,
        'u-heading--secondary': secondary,
      }),
    },
    React.createElement(
      href ? Link : 'span',
      {
        to: href || null,
        dangerouslySetInnerHTML: { __html: text },
      },
    ),
  );
};

//

Heading.propTypes = {
  level: PropTypes.number,
  stylingLevel: PropTypes.number,
  text: PropTypes.string,
  secondary: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
};

Heading.defaultProps = {
  level: 3,
  stylingLevel: null,
  text: '',
  secondary: false,
  className: '',
  href: null,
};

export default Heading;
