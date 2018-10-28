import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Rte.scss';

class Rte extends Component {
  // componentDidMount() {
  //   if (this.rte) {
  //     const $tables = Array.from(this.rte.querySelectorAll('table'));
  //     $tables.forEach(($table) => {
  //       // create wrapper container
  //       const $wrapper = document.createElement('div');
  //       $wrapper.classList.add('c-rte__wrap-table');
  //       // insert wrapper before el in the DOM tree
  //       $table.parentNode.insertBefore($wrapper, $table);
  //       // move el into wrapper
  //       $wrapper.appendChild($table);
  //       return $table;
  //     });
  //   }
  // }

  render() {
    const {
      richText,
      className,
      type,
    } = this.props;

    if (!richText) {
      return null;
    }

    return (
      <div
        className={classNames(`c-rte  u-module  u-mb  ${className}`, {
          'u-text-light  u-epsilon  c-rte--intro': type === 'intro',
        })}
        ref={(e) => {
          this.rte = e;
        }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: richText }}
      />
    );
  }
}
Rte.propTypes = {
  richText: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
Rte.defaultProps = {
  richText: '',
  className: '',
  type: '',
};

export default Rte;
