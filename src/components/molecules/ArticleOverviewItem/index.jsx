import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { push } from 'gatsby';
import Heading from 'components/atoms/text/Heading';

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
      const { href } = this.props;
      push(href);
    }
  }

  render() {
    const {
      title,
      href,
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
        <div className="islet  island@lap">
          <div className="sign-group--small">
            <Heading
              text={title}
              level={3}
              stylingLevel={4}
              href={href}
            />
            <div className="sign-group--tiny">
              <div className="meta">
                <time dateTime="<?= strftime('%Y-%m-%d', $date) ?>">
                  visual date
                </time>
                | type
              </div>
              <div className="mini">content</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

ArticleOverviewItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
};
ArticleOverviewItem.defaultProps = {
  title: null,
  href: null,
};

export default ArticleOverviewItem;
