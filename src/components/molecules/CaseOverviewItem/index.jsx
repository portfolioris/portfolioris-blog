import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'gatsby';
import classNames from 'classnames';

import Img from 'components/atoms/objects/Img';
import Heading from 'components/atoms/text/Heading';

import './CaseOverviewItem.scss';

class CaseOverviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  handleClick(e) {
    if (e.target.tagName !== 'A') {
      const { href } = this.props;
      push(href);
    }
  }

  render() {
    const {
      image,
      logo,
      title,
      subTitle,
      href,
    } = this.props;

    const {
      isLoaded,
    } = this.state;

    return (
      <article
        className={classNames('c-case-overview-item', {
          'is-link': isLoaded,
        })}
        onClick={e => this.handleClick(e)}
        role="presentation"
      >
        <div className="c-case-overview-item__content">
          <Heading
            level={3}
            className="c-case-overview-item__heading"
            text={title}
            href={href}
            suppressLink={isLoaded}
          />
          <p>
            {subTitle}
          </p>
        </div>
        <div
          className="c-case-overview-item__image"
        >
          <Img
            image={{
              ...image,
              sizes: [600],
            }}
          />
        </div>
        <Img
          className="c-case-overview-item__logo"
          image={{
            ...logo,
            sizes: [400],
          }}
        />
      </article>
    );
  }
}

CaseOverviewItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.any),
  logo: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  href: PropTypes.string,
};
CaseOverviewItem.defaultProps = {
  image: null,
  logo: null,
  title: null,
  subTitle: null,
  href: null,
};

export default CaseOverviewItem;
