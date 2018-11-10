import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

try {
  // eslint-disable-next-line global-require
  require('lazysizes');
  // eslint-disable-next-line global-require
  require('lazysizes/plugins/rias/ls.rias');
} catch (e) {
  //
}


const ImageBlock = props => (
  <StaticQuery
    query={graphql`
      query Images {
        craft {
          assets {
            folder {
              path
            }
            filename
            title
            id
          }
        }
      }
    `}
    render={({ craft }) => {
      const imgId = parseInt(
        props.src
          .replace('{asset:', '')
          .replace('}', ''),
        10,
      );
      const Img = craft.assets.find(asset => asset.id === imgId);
      return (
        <figure className="c-text__figure">
          <img
            style={{
              width: '100%',
            }}
            data-sizes="auto"
            className="lazyload  c-rte__img"
            data-src={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${Img.folder.path}${Img.filename}`}
            alt={Img.title}
          />
          <figcaption className="u-bold  u-milli  u-italic">{props.alt}</figcaption>
        </figure>
      );
    }}
  />
);

ImageBlock.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  // language: PropTypes.string,
  // value: PropTypes.string,
};
ImageBlock.defaultProps = {
  src: null,
  alt: null,
  // language: null,
  // value: null,
};

export default ImageBlock;
