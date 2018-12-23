import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navigation from 'components/organisms/Navigation';

import 'sass/leading.scss';

const Layout = ({
  children,
  entry,
}) => (
  <StaticQuery
    query={graphql`
      query global {
        craft {
          globals {
            settings {
              siteName
              siteLanguage
              twitterHandle
            }
          }
          entries(section: mainNavigation) {
            ... on craft_MainNavigation {
              id
              title
              menuItem {
                uri
              }
            }
          }
        }
      }
    `}
    render={({ craft }) => {
      const {
        globals: {
          settings,
        },
        entries,
      } = craft;

      const pageImg = {};
      if (entry.mainImage && entry.mainImage.length) {
        pageImg.src = `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_1200,h_630/${entry.mainImage[0].folder.path}${entry.mainImage[0].filename}`;
        pageImg.alt = entry.mainImage[0].title;
      } else {
        pageImg.src = 'http://placehold.it/1200x630';
        pageImg.alt = '';
      }

      return (
        <Fragment>
          <Helmet
            htmlAttributes={{
              lang: settings.siteLanguage,
            }}
            title={entry.title}
            titleTemplate={`%s • ${settings.siteName}`}
            defaultTitle={settings.siteName}
            meta={[
              // dynamic stuff
              { name: 'description', content: entry.description },
              { name: 'twitter:card', content: 'summary' },
              { name: 'twitter:site', content: settings.twitterHandle },
              { name: 'twitter:image:alt', content: pageImg.alt },
              { property: 'og:title', content: entry.title },
              { property: 'og:description', content: entry.description },
              { property: 'og:url', content: `${settings.domain}/${entry.uri}` },
              { property: 'og:site_name', content: settings.siteName },
              { property: 'og:locale', content: 'nl_NL' },
              { property: 'og:image', content: pageImg.src },

              // static stuff
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              { name: 'charset', content: 'utf-8' },
              { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
              { name: 'apple-mobile-web-app-capable', content: 'yes' },
              { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            ]}
            link={[
              { rel: 'apple-touch-icon-precomposed', href: '/icons/icon-512x512.png' },
            ]}
          />
          <Navigation items={entries}>
            {children}
          </Navigation>
        </Fragment>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node,
  entry: PropTypes.objectOf(PropTypes.any),
};

Layout.defaultProps = {
  children: null,
  entry: null,
};

export default Layout;
