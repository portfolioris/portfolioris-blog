import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/atoms/text/CodeBlock';
import ParagraphBlock from 'components/atoms/text/ParagraphBlock';
import ImageBlock from 'components/atoms/text/ImageBlock';

import './Text.scss';

const Text = ({
  text,
  modifier,
  type,
  className,
}) => (
  React.createElement(
    type === 'md' ? ReactMarkdown : 'div',
    {
      className: classNames(className, {
        'u-module  u-m-b  u-epsilon  u-text-bold': modifier === 'intro',
      }),
      source: type === 'md' ? text : null,
      renderers: type === 'md' ? {
        code: CodeBlock,
        image: ImageBlock,
        paragraph: ParagraphBlock,
      } : null,
    },
    type === 'md' ? null : text,
  )
);

Text.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['intro']),
  type: PropTypes.oneOf(['md']),
};

Text.defaultProps = {
  text: null,
  className: null,
  modifier: null,
  type: null,
};

export default Text;
