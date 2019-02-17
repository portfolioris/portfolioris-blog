import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { push } from 'gatsby';
import Heading from 'components/atoms/text/Heading';
import DateString from 'components/atoms/text/DateString';
import Theme from 'components/atoms/utilities/Theme';

class ArticleOverviewItem extends Component {
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
      const { uri } = this.props;
      push(uri);
    }
  }

  render() {
    const {
      title,
      subheading,
      uri,
      postDate,
    } = this.props;

    const {
      isLoaded,
    } = this.state;

    return (
      <Theme color="white">
        <article
          className={classNames('u-module  u-p  u-h-100', {
            'as-clickable': isLoaded,
          })}
          onClick={e => this.handleClick(e)}
          role="presentation"
        >
          <Heading
            text={title}
            level={3}
            stylingLevel={4}
            href={uri}
            className="u-m-b-tiny"
          />
          <p className="u-micro  u-text-bold  u-m-b-tiny">
            {subheading}
          </p>
          <p className="u-micro">
            <DateString dateString={postDate} />
          </p>
        </article>
      </Theme>
    );
  }
}

ArticleOverviewItem.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  uri: PropTypes.string,
  postDate: PropTypes.string,
};
ArticleOverviewItem.defaultProps = {
  title: null,
  subheading: null,
  uri: null,
  postDate: null,
};

export default ArticleOverviewItem;
