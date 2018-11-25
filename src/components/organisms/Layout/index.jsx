import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from 'components/organisms/Navigation';

import './Layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <link rel="apple-touch-icon-precomposed" href="/icons/icon-512x512.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Helmet>
    <Navigation>
      {children}
    </Navigation>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
