import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import Heading from './index';

storiesOf('atoms.Heading', module)
  .add('Heading', () => {
    const content = text('Tekst', 'Heading');
    const level = select('Level (h1 - h5)', [1, 2, 3, 4, 5], '1');
    const stylingLevel = select('Styling (size)', {
      0: 'not set',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
    }, 'not set');

    return (
      <Heading
        text={`${content} (level ${level}, size ${stylingLevel})`}
        level={parseInt(level, 0)}
        stylingLevel={parseInt(stylingLevel, 0)}
        secondary={boolean('Secondary', false)}
      />
    );
  });
