import React from 'react';
import PropTypes from 'prop-types';

try {
  require('lazysizes'); // eslint-disable-line global-require
  require('lazysizes/plugins/rias/ls.rias'); // eslint-disable-line global-require
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
        data-srcset={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${image.folder.path}${image.filename}`}
        srcSet={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${image.folder.path}${image.filename}` : null}
        media="(min-width: 60em)"
      />
      <source
        data-srcset={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${useSmallImage.folder.path}${useSmallImage.filename}`}
        srcSet={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${useSmallImage.folder.path}${useSmallImage.filename}` : null}
      />
      <img
        data-sizes="auto"
        className={`lazyload  c-img  ${className}`}
        data-src={lazyload ? image.src : null}
        src={!lazyload ? `https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${image.folder.path}${image.filename}` : 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}
        alt={image.title}
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
