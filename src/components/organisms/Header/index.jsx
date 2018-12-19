import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import PrimaryNav from 'components/molecules/PrimaryNav';
import MenuToggle from 'components/molecules/MenuToggle';
import Retain from 'components/atoms/objects/Retain';
import Layer from 'components/atoms/objects/Layer';
// import logo from 'components/atoms/Icon/svgs/logo--portfolioris.svg';
import logo from 'img/logo--portfolioris-small.svg';

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
          <div className="o-layout  o-layout--middle">
            <div className="o-layout__fill">
              <div className="o-layout  o-layout--middle">
                <div className="o-layout__fit">
                  <Link
                    to="/"
                    href="/"
                  >
                    <img src={logo} alt="Portfolioris" className="c-header__logo" />
                    <span className="u-visually-hidden">Portfolioris</span>
                  </Link>
                </div>
                <div className="o-layout__fit  o-layout__center">
                  <div className="u-hidden@max-lap">
                    <PrimaryNav items={items} activePageId={activePageId} />
                  </div>
                </div>
              </div>
            </div>
            <div className="o-layout__fit  u-hidden@desk">
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
