import React from 'react';
import renderer from 'react-test-renderer';
import { screenNames } from '../../../../BannerCarousel/utils';

import WhenScreen from '../index';

it('WhenScreen should render correctly', () => {
  const tree = renderer
    .create(
      <WhenScreen
        slideCarousel={() => {}}
        screenName={screenNames.when}
      ></WhenScreen>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
