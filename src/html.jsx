import React from 'react';
import PropTypes from 'prop-types';

const Html = ({
  headComponents,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html lang="nl">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {headComponents}
    </head>
    <body>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

Html.propTypes = {
  headComponents: PropTypes.node,
  preBodyComponents: PropTypes.node,
  body: PropTypes.node,
  postBodyComponents: PropTypes.node,
};
Html.defaultProps = {
  headComponents: null,
  preBodyComponents: null,
  body: null,
  postBodyComponents: null,
};

export default Html;
