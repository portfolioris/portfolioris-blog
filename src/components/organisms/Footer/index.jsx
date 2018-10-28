import React from 'react';

import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Rte from 'components/atoms/text/Rte';

const Footer = () => (
  <footer>
    <Layer size="small">
      <Retain>
        <div className="u-milli">
          <div className="o-layout  o-layout--gutter-small">
            <div className="o-layout__cell  o-layout__cell--fit">
              <Rte richText="© Colours 2018" className="u-mb-flatten" />
            </div>
            <div className="o-layout__cell  o-layout__cell--fit">
              <ul className="o-layout  o-layout--gutter-small  u-mb-flatten">
                {/* {items.map(item => ( */}
                <li
                  // key={item.ID}
                  className="o-layout__cell  o-layout__cell--fit"
                >
                  <a href="#_">Link?</a>
                </li>
                {/* ))} */}
              </ul>
            </div>
          </div>
        </div>
      </Retain>
    </Layer>
  </footer>
);

Footer.propTypes = {
  // items: PropTypes.arrayOf(PropTypes.any),
};
Footer.defaultProps = {
  // items: [],
};

export default Footer;
