import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import CodeBlock from 'components/atoms/text/CodeBlock';
import ImageBlock from 'components/atoms/text/ImageBlock';

const Rte = ({
  richText,
  className,
}) => (
  <ReactMarkdown
    className={classNames('c-rte', className)}
    source={richText}
    renderers={{
      code: CodeBlock,
      image: ImageBlock,
    }}
  />
);

Rte.propTypes = {
  richText: PropTypes.string,
  className: PropTypes.string,
};

Rte.defaultProps = {
  richText: null,
  className: null,
};

export default Rte;
