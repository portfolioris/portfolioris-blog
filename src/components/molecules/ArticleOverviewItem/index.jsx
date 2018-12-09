import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { push } from 'gatsby';
import Heading from 'components/atoms/text/Heading';
import DateString from '../../atoms/text/DateString';

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
      <article
        className={classNames('u-mb', {
          'is-link': isLoaded,
        })}
        onClick={e => this.handleClick(e)}
        role="presentation"
      >
        <Heading
          text={title}
          level={3}
          stylingLevel={4}
          href={uri}
        />
        <div className="u-micro">
          {subheading}
          <DateString dateString={postDate} />
        </div>
      </article>
    );
  }
}

ArticleOverviewItem.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  uri: PropTypes.string,
  postDate: PropTypes.number,
};
ArticleOverviewItem.defaultProps = {
  title: null,
  subheading: null,
  uri: null,
  postDate: null,
};

export default ArticleOverviewItem;
