import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import PrimaryNav from 'components/molecules/PrimaryNav';
import MenuToggle from 'components/molecules/MenuToggle';
import Retain from 'components/atoms/objects/Retain';
import Layer from 'components/atoms/objects/Layer';
import Icon from 'components/atoms/Icon';

import './Header.scss';

const Header = ({
  items,
  activePageId,
  handleToggleMenu,
  menuIsOpen,
}) => (
  <header>
    <Layer
      size="flat"
    >
      <Retain
        size="full"
      >
        <div className="c-header">
          <div className="o-layout  o-layout--align-middle">
            <div className="o-layout__cell  o-layout__cell--fill">
              <div className="o-layout  o-layout--align-middle">
                <div className="o-layout__cell  o-layout__cell--fit">
                  <Link
                    to="/"
                    href="/"
                    className="c-header__logo-link"
                  >
                    <Icon icon="logo--portfolioris" className="c-header__logo" />
                    <span className="u-visually-hidden">Portfolioris</span>
                  </Link>
                </div>
                <div className="o-layout__cell  o-layout__cell--fit  o-layout__cell--center">
                  <div className="u-hidden@max-lap">
                    <PrimaryNav items={items} activePageId={activePageId} />
                  </div>
                </div>
              </div>
            </div>
            <div className="o-layout__cell  o-layout__cell--fit  u-hidden@desk">
              <MenuToggle
                handleToggleMenu={handleToggleMenu}
                isOpen={menuIsOpen}
              />
            </div>
          </div>
        </div>
      </Retain>
    </Layer>
  </header>
);

Header.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  activePageId: PropTypes.number,
  handleToggleMenu: PropTypes.func,
  menuIsOpen: PropTypes.bool,
};
Header.defaultProps = {
  items: [],
  activePageId: null,
  handleToggleMenu: null,
  menuIsOpen: false,
};

export default Header;
