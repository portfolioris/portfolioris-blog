import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/atoms/text/CodeBlock';
import ImageBlock from 'components/atoms/text/ImageBlock';

const Text = ({
  text,
  modifier,
  type,
}) => (
  React.createElement(
    type === 'md' ? ReactMarkdown : 'div',
    {
      className: classNames('c-rte', {
        'u-epsilon  c-rte--intro': modifier === 'intro',
      }),
      source: type === 'md' ? text : null,
      renderers: {
        code: CodeBlock,
        image: ImageBlock,
      },
    },
    type === 'md' ? null : text,
  )
);

Text.propTypes = {
  text: PropTypes.string,
  modifier: PropTypes.oneOf(['intro']),
  type: PropTypes.oneOf(['md']),
};

Text.defaultProps = {
  text: null,
  modifier: null,
  type: null,
};

export default Text;
