import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Theme from 'components/atoms/utilities/Theme';

import './Layer.scss';

const Layer = ({
  children,
  size,
  background,
  collapseTop,
  collapseBottom,
}) => (
  <Theme
    color={background}
    className={classNames('o-layer', {
      // vertical sizes
      'o-layer--flat': size === 'flat',
      'o-layer--tiny': size === 'tiny',
      'o-layer--small': size === 'small',
      'o-layer--medium': size === 'medium',
      'o-layer--large': size === 'large',
      'o-layer--huge': size === 'huge',
      'o-layer--fullscreen': size === 'fullscreen',
      'o-layer--collapse-top': collapseTop,
      'o-layer--collapse-bottom': collapseBottom,
    })}
  >
    {children}
  </Theme>
);

Layer.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  background: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
};
Layer.defaultProps = {
  children: [],
  size: 'large',
  background: null,
  collapseTop: false,
  collapseBottom: false,
};

export default Layer;
