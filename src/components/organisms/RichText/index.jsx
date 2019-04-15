import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'components/atoms/utilities/Theme';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Text from 'components/atoms/text/Text';

const RichText = ({
  richText,
}) => (
  <section>
    <Theme color="black">
      <Layer>
        <Retain size="narrow">
          <Text text={richText} type="md" />
        </Retain>
      </Layer>
    </Theme>
  </section>
);

RichText.propTypes = {
  richText: PropTypes.string,
};
RichText.defaultProps = {
  richText: null,
};

export default RichText;
