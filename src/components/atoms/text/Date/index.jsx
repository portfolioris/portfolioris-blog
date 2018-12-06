import React from 'react';
import PropTypes from 'prop-types';
import { addLocaleData, FormattedDate, IntlProvider } from 'react-intl';
import nl from 'react-intl/locale-data/nl';

addLocaleData([...nl]);

const Date = ({ dateString }) => (
  <IntlProvider locale="nl">
    <FormattedDate
      value={new Date(dateString)}
      year="numeric"
      month="long"
      day="numeric"
    />
  </IntlProvider>
);

Date.propTypes = {
  dateString: PropTypes.string,
};

Date.defaultProps = {
  dateString: '2008-12',
};

export default Date;
