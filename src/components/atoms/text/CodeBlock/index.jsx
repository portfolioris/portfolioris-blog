import React from 'react';
import PropTypes from 'prop-types';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/languages/hljs/css';
import github from 'react-syntax-highlighter/dist/styles/hljs/github';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);

const CodeBlock = ({
  language,
  value,
}) => (
  <SyntaxHighlighter language={language} style={github}>
    {value}
  </SyntaxHighlighter>
);

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
};
CodeBlock.defaultProps = {
  language: null,
  value: null,
};

export default CodeBlock;
