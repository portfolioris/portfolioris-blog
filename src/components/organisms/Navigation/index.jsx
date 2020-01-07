import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import Button from 'components/atoms/Button';
import Retain from 'components/atoms/objects/Retain';

import './Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };

    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ isLoaded: true });
    });
  }

  handleToggleMenu(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      menuIsOpen: !prevState.menuIsOpen,
    }));
  }

  closeMenu() {
    this.setState({
      menuIsOpen: false,
    });
  }

  render() {
    const {
      items,
      activePageId,
      children,
    } = this.props;

    const {
      menuIsOpen,
      isLoaded,
    } = this.state;

    return (
      <div className="c-body-wrap">
        <div className="c-body-wrap__header">
          <Header
            items={items}
            activePageId={activePageId}
            handleToggleMenu={this.handleToggleMenu}
            menuIsOpen={menuIsOpen}
          />
        </div>
        <div
          className={classNames('c-body-wrap__main', {
            'is-open': menuIsOpen,
          })}
        >
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <div
          className={classNames('c-body-wrap__navigation', {
            'is-loaded': isLoaded,
            'is-open': menuIsOpen,
          })}
          id="navigation"
        >
          <Retain>
            <ul className="o-list-bare">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="u-m-b-tiny"
                >
                  <Button
                    // isActive={item.object_id === activePageId}
                    text={item.title}
                    // href={item.url}
                    href={item.menuItem[0].uri === '__home__' ? '/' : item.menuItem[0].uri}
                    onClick={this.closeMenu}
                  />
                </li>
              ))}
            </ul>
          </Retain>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  activePageId: PropTypes.number,
  children: PropTypes.node,
};
Navigation.defaultProps = {
  items: [],
  activePageId: null,
  children: null,
};

export default Navigation;
