import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './MenuToggle.scss';

const MenuToggle = ({
  handleToggleMenu,
  isOpen,
}) => (
  <a
    href="#navigation"
    className={classNames('c-menu-toggle', {
      'is-open': isOpen,
    })}
    onClick={handleToggleMenu}
  >
    <svg viewBox="0 0 24 24" className="c-menu-toggle__icon">
      <defs>
        <path id="l" d="M0,0 L24,0" />
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <use xlinkHref="#l" className="c-menu-toggle__dash  c-menu-toggle__dash--top" y="6" />
        <use xlinkHref="#l" className="c-menu-toggle__dash  c-menu-toggle__dash--middle" y="12" />
        <use xlinkHref="#l" className="c-menu-toggle__dash  c-menu-toggle__dash--bottom" y="18" />
      </g>
    </svg>
    <span className="c-menu-toggle__label">
      menu
    </span>
  </a>
);

MenuToggle.propTypes = {
  handleToggleMenu: PropTypes.func,
  isOpen: PropTypes.bool,
};
MenuToggle.defaultProps = {
  handleToggleMenu: null,
  isOpen: false,
};

export default MenuToggle;
