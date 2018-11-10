import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { graphql } from 'gatsby';

import Button from 'components/atoms/Button';
import BackgroundVisual from 'components/molecules/BackgroundVisual';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Heading from 'components/atoms/text/Heading';
import Text from 'components/atoms/text/Text';

import './MainVisual.scss';

class MainVisual extends Component {
  componentDidMount() {
    //
  }

  render() {
    const {
      heading,
      subheading,
      link,
      image,
      smallImage,
      isLarge,
    } = this.props;

    return (
      <section
        className="c-main-visual"
      >
        <Retain
          size="full"
        >
          <BackgroundVisual
            hasContent
            image={{
              ...image,
              sizes: [750, 1536, 1920],
            }}
            smallImage={{
              ...smallImage,
              sizes: [750, 1536],
            }}
          >
            <div
              className={classNames('c-main-visual__content', {
                'c-main-visual__content--large': isLarge,
              })}
            >
              <Layer size="medium">
                <Retain size="narrow">
                  <div className="u-text-center">
                    <Heading level={1} className="u-macro" text={heading} />
                    <Text text={subheading} modifier="intro" />
                    {link ? (
                      <p>
                        <Button
                          href={link.url}
                          text={link.title}
                          icon="icon-arrow-right"
                        />
                      </p>
                    ) : null}
                  </div>
                </Retain>
              </Layer>
            </div>
          </BackgroundVisual>
        </Retain>
      </section>
    );
  }
}

MainVisual.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  isLarge: PropTypes.bool,
  link: PropTypes.objectOf(PropTypes.any),
  image: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
};

MainVisual.defaultProps = {
  heading: null,
  subheading: null,
  isLarge: false,
  link: null,
  image: null,
  smallImage: null,
};

export default MainVisual;

// export const pageQuery = graphql`
//   fragment MainVisualFragment on WordPressAcf_main_visual {
//     id
//     heading
//     subheading
//     link {
//       title
//       url
//       target
//     }
//     isLarge
//     image {
//       name
//       alt
//     }
//     smallImage {
//       name
//       alt
//     }
//   }
// `;
