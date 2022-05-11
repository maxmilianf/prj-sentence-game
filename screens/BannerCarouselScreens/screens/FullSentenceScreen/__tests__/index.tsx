import React from 'react';
import renderer from 'react-test-renderer';

import FullSentenceScreen from '../index';

it('FullSentenceScreen should render correctly', () => {
  const tree = renderer
    .create(
      <FullSentenceScreen slideCarouselToStart={() => {}}></FullSentenceScreen>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
