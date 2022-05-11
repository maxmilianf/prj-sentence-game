import React from 'react';
import renderer from 'react-test-renderer';
import { screenNames } from '../../../../BannerCarousel/utils';

import WhoScreen from '../index';

it('WhoScreen should render correctly', () => {
  const tree = renderer
    .create(
      <WhoScreen
        slideCarousel={() => {}}
        screenName={screenNames.who}
      ></WhoScreen>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
