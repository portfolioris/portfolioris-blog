import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import Icon from 'components/atoms/Icon';

import './Button.scss';

const Button = ({
  tag,
  type,
  onClick,
  href,
  target,
  title,
  disabled,
  tabIndex,
  hideLabel,
  modifier,
  reversed,
  text,
  icon,
  isActive,
}) => {
  let rel = null;
  if (target === '_blank') {
    rel = 'noopener noreferrer';
  }

  let $el = tag;

  if (tag === 'a') {
    $el = Link;
  }

  return (
    React.createElement(
      $el,
      {
        className: classNames('c-button', {
          'c-button--hide-label': hideLabel,
          'c-button--reversed': reversed,
          'c-button--transparant': modifier === 'transparant',
          'c-button--has-icon': icon,
          'is-active': isActive,
        }),
        type,
        onClick,
        to: tag === 'a' ? href : null,
        target: target || null,
        rel,
        title,
        disabled,
        tabIndex,
      },
      <span className="c-button__inner">
        <span className={`c-button__label ${hideLabel ? 'u-visually-hidden' : ''}`}>
          {text}
        </span>
        {icon ? (
          <span className="c-button__wrap-icon">
            <Icon icon={icon} modifier="c-icon--inherit" />
          </span>
        ) : null}
      </span>,
    )
  );
};

Button.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.string,
  hideLabel: PropTypes.bool,
  reversed: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  tabIndex: PropTypes.string,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  tag: 'a',
  modifier: '',
  hideLabel: false,
  reversed: false,
  type: null,
  onClick: null,
  target: null,
  title: null,
  disabled: false,
  text: 'Button label',
  href: null,
  icon: '',
  tabIndex: null,
  isActive: false,
};

export default Button;
