import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Img from 'components/atoms/objects/Img';

import './BackgroundVisual.scss';

const BackgroundVisual = ({
  image,
  smallImage,
  children,
  hasContent,
  isHero,
}) => (
  <Fragment>
    <div
      className={classNames('c-bg-visual  c-bg-visual--<?= $sizeClass ?>', {
        'c-bg-visual--has-content': hasContent,
        'c-bg-visual--is-hero': isHero,
      })}
      data-scroll="toggle(.is-visible, .is-hidden), centerVertical"
    >
      <Img
        className="c-bg-visual__visual"
        image={image}
        smallImage={smallImage}
      />
      <div className="c-bg-visual__content">
        {children}
      </div>
    </div>
  </Fragment>
);

BackgroundVisual.propTypes = {
  image: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  hasContent: PropTypes.bool,
  isHero: PropTypes.bool,
};
BackgroundVisual.defaultProps = {
  image: null,
  smallImage: null,
  children: null,
  hasContent: false,
  isHero: false,
};

export default BackgroundVisual;
