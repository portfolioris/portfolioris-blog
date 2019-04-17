import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'components/atoms/utilities/Theme';
import Layer from 'components/atoms/objects/Layer';
import Retain from 'components/atoms/objects/Retain';
import Text from 'components/atoms/text/Text';
import { graphql } from 'gatsby';

const RichText = ({
  richText,
  collapseTop,
  collapseBottom,
}) => (
  <section>
    <Theme color="black">
      <Layer
        collapseTop={collapseTop}
        collapseBottom={collapseBottom}
      >
        <Retain size="narrow">
          <Text text={richText} type="md" />
        </Retain>
      </Layer>
    </Theme>
  </section>
);

RichText.propTypes = {
  richText: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
};
RichText.defaultProps = {
  richText: null,
  collapseTop: false,
  collapseBottom: false,
};

export default RichText;

export const richTextFragment = graphql`
  fragment richTextFragment on craft_ModulesRichTextBlock {
    id
    richText
    collapseTop
    collapseBottom
  }
`;
