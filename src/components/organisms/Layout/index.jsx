import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from 'components/organisms/Navigation';

import 'sass/leading.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query global {
        craft {
          globals {
            settings {
              siteName
              siteLanguage
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          titleTemplate={`%s | ${data.craft.globals.settings.siteName}`}
          defaultTitle={data.craft.globals.settings.siteName}
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'charset', content: 'utf-8' },
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
          ]}
        >
          <html lang={data.craft.globals.settings.siteLanguage} />
          <link rel="apple-touch-icon-precomposed" href="/icons/icon-512x512.png" />
        </Helmet>
        <Navigation>
          {children}
        </Navigation>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
  // location: PropTypes.objectOf(PropTypes.any),
};

Layout.defaultProps = {
  children: null,
  // location: null,
};

export default Layout;
