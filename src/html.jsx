import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Html = ({
  headComponents,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html lang="nl">
    <head>
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
