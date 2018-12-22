import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Theme.scss';

const Theme = ({
  color,
  children,
  className,
}) => (
  <div className={classNames(className, {
    // colors and backgrounds
    't-bg--white  t-color--dark': color === 'white',
    't-bg--black  t-color--light': color === 'black',
  })}
  >
    {children}
  </div>
);

Theme.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};
Theme.defaultProps = {
  className: '',
  color: null,
  children: null,
};

export default Theme;
