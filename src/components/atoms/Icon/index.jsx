import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'svgxuse';

// Import all the svg's
import Logo from './svgs/logo--portfolioris.svg';
import './svgs/icon-arrow-right.svg';


// Styles
import './Icon.scss';

const foo = {
  'logo--portfolioris': Logo,
};

const Icon = ({ icon, className }) => (
  React.createElement(
    foo[icon],
    {
      className: classNames('c-icon', className),
    },
  )
);
/*
const Icon = ({ icon, className, size }) => (
  <svg
    className={classNames(`c-icon ${className}`, {
      'c-icon--alpha': size === 'alpha',
      'c-icon--beta': size === 'beta',
      'c-icon--gamma': size === 'gamma',
      'c-icon--delta': size === 'delta',
      'c-icon--epsilon': size === 'epsilon',
      'c-icon--zeta': size === 'zeta',
      'c-icon--milli': size === 'milli',
    })}
    role="presentation"
    aria-hidden="true"
  >
    {/!* <use xlinkHref={`/static/colours.icons.svg#${icon}`} /> *!/}
    <use xlinkHref={`#${icon}`} />
  </svg>
);
*/

Icon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  // size: PropTypes.string,
};

Icon.defaultProps = {
  icon: 'icon-arrow-right',
  className: null,
  // size: '',
};

export default Icon;
