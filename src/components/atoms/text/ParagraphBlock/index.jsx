import React from 'react';
import PropTypes from 'prop-types';

const ParagraphBlock = ({ children }) => {
  const hasImage = !!children.find(
    (child) => typeof child === 'object' && child.key && !!child.key.match(/image/g),
  );
  return hasImage ? children : <p>{children}</p>;
};

ParagraphBlock.propTypes = {
  children: PropTypes.node,
};
ParagraphBlock.defaultProps = {
  children: null,
};

export default ParagraphBlock;
