import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/organisms/Navigation';

import './Layout.scss';

const Layout = ({ children }) => (
  <Navigation>
    {children}
  </Navigation>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
