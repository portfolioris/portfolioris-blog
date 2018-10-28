import React from 'react';
import PropTypes from 'prop-types';
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

try {
  require('lazysizes'); // eslint-disable-line global-require
} catch (x) {
  // lazysizes = null;
}

const Img = ({
  image,
  lazyload,
  className,
  smallImage,
}) => {
  // no img specified
  if (!image) {
    return null;
  }

  // if no small image defined, use large img for small
  let useSmallImage = smallImage;
  if (!useSmallImage || !useSmallImage.name) {
    useSmallImage = image;
  }

  return (
    <picture>
      <source
        data-srcset={image.sizes ? (
          image.sizes.map(size => (
            `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${image.name} ${size}w`
          ))
        ) : null}
        srcSet={!lazyload && image.sizes ? (
          image.sizes.map(size => (
            `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${image.name} ${size}w`
          ))
        ) : ''}
        media="(min-width: 60em)"
      />
      <source
        data-srcset={useSmallImage.sizes ? (
          useSmallImage.sizes.map(size => (
            `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${useSmallImage.name} ${size}w`
          ))
        ) : null}
        srcSet={!lazyload && useSmallImage.sizes ? (
          useSmallImage.sizes.map(size => (
            `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_${size}/${useSmallImage.name} ${size}w`
          ))
        ) : ''}
      />
      <img
        data-sizes="auto"
        className={`lazyload  c-img  ${className}`}
        data-src={lazyload ? image.src : null}
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        alt={image.alt}
      />
    </picture>
  );
};

Img.propTypes = {
  image: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
  lazyload: PropTypes.bool,
  className: PropTypes.string,
};
Img.defaultProps = {
  image: null,
  smallImage: null,
  lazyload: true,
  className: '',
};

export default Img;
