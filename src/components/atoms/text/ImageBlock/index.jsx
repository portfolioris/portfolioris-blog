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
      const imgId = parseInt(props.src.slice(7).slice(0, -1), 10);
      const Img = craft.assets.find(asset => asset.id === imgId);
      return (
        <img
          style={{
            width: '100%',
          }}
          data-foo={Img.filename}
          data-sizes="auto"
          className="lazyload"
          // data-src="http://placehold.it/{width}"
          data-src={`https://res.cloudinary.com/portfolioris/image/upload/q_auto,f_auto,c_scale,w_{width}/${Img.folder.path}${Img.filename}`}
          alt=""
        />
      );
    }}
  />
);

ImageBlock.propTypes = {
  src: PropTypes.string,
  // language: PropTypes.string,
  // value: PropTypes.string,
};
ImageBlock.defaultProps = {
  src: null,
  // language: null,
  // value: null,
};

export default ImageBlock;
