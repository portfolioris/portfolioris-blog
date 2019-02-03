# Portfolioris: A CraftCMS, Gatsby and Netlify powered website

This repo contains a website that is built with [Gatsby](https://www.gatsbyjs.org/), on top of [CraftCMS](https://craftcms.com/) and ready to be hosted on [Netlify](https://www.netlify.com/).

It follows parts of the [JAMstack architecture](https://jamstack.org) by using Git for separately managing the CMS and the Front-end, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started (Recommended)

Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/portfolioris/portfolioris-blog"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.

### Access Locally
```
$ git clone https://github.com/portfolioris/portfolioris-blog.git
$ cd portfolioris-blog
$ npm install
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Getting Started (Without Netlify)
```
$ gatsby new portfolioris-blog https://github.com/portfolioris/portfolioris-blog
$ cd portfolioris-blog
$ npm run build
$ npm run serve
```

## Also uses
- [ESlint](https://eslint.org/), using [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/README.md)
- [Stylelint](https://stylelint.io/), and the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard/blob/master/README.md)
- Open Graph, Twitter Cards and JSON-LD metadata
- Modular, component based pages
- Blog page type
- [Cloudinary](https://cloudinary.com/) for image hosting and optimization
- SASS, and [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) based styling using [Supple](https://supple-css.github.io/supple/)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) (PWA) and service worker for offline support
- Security headers (CSP, etc.)
- GraphQL code completion for [WebStorm](https://www.jetbrains.com/webstorm/), using [JS GraphQL](https://plugins.jetbrains.com/plugin/8097-js-graphql)
