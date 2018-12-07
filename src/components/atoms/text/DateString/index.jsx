import React from 'react';
import PropTypes from 'prop-types';
import { addLocaleData, FormattedDate, IntlProvider } from 'react-intl';
import nl from 'react-intl/locale-data/nl';

addLocaleData([...nl]);

const DateString = ({ dateString }) => (
  <time dateTime={new Date(dateString * 1000).toISOString().split('T')[0]}>
    <IntlProvider locale="nl">
      <FormattedDate
        value={new Date(dateString * 1000)}
        year="numeric"
        month="long"
        day="numeric"
      />
    </IntlProvider>
  </time>
);

DateString.propTypes = {
  dateString: PropTypes.number.isRequired,
};

// DateString.defaultProps = {
//   dateString: '2008-12-02',
// };

export default DateString;
