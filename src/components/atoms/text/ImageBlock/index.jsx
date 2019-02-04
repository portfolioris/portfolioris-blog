import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import Img from 'components/atoms/objects/Img';

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
      const ImgObj = craft.assets.find(asset => asset.id === imgId);
      return (
        <figure className="c-text__figure  u-m-b">
          <Img
            className="c-text__img"
            image={ImgObj}
          />
          <figcaption className="u-text-bold  u-milli  u-text-italic">{props.alt}</figcaption>
        </figure>
      );
    }}
  />
);

ImageBlock.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
ImageBlock.defaultProps = {
  src: null,
  alt: null,
};

export default ImageBlock;
