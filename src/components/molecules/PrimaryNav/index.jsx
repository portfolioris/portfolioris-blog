import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';

const PrimaryNav = ({
  items,
  // activePageId,
}) => (
  <nav>
    <ul className="o-layout  o-layout--small  o-layout--gutter-small  o-layout--inline  u-mb-flatten">
      {items.map(item => (
        <li
          key={item.id}
          className="o-layout__fit  o-layout__cell  o-layout__cell--fit"
        >
          <Button
            // isActive={parseInt(item.object_id, 10) === activePageId}
            modifier="transparant"
            text={item.title}
            // href={item.menuItem[0].uri}
            href={item.menuItem[0].uri === '__home__' ? '/' : item.menuItem[0].uri}
          />
        </li>
      ))}
    </ul>
  </nav>
);

PrimaryNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  // activePageId: PropTypes.number,
};

PrimaryNav.defaultProps = {
  items: [],
  // activePageId: null,
};

export default PrimaryNav;
