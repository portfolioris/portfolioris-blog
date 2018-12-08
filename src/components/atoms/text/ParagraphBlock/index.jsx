import React from 'react';
import PropTypes from 'prop-types';

const ParagraphBlock = ({ children }) => {
  const hasImage = !!children.find(
    child => typeof child === 'object' && child.key && !!child.key.match(/image/g),
  );
  return hasImage ? children : <p>{children}</p>;
};

ParagraphBlock.propTypes = {
  children: PropTypes.node,
  // src: PropTypes.string,
  // alt: PropTypes.string,
  // language: PropTypes.string,
  // value: PropTypes.string,
};
ParagraphBlock.defaultProps = {
  children: null,
  // src: null,
  // alt: null,
  // language: null,
  // value: null,
};

export default ParagraphBlock;
