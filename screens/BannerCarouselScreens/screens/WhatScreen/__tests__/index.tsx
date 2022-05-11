import React from 'react';
import renderer from 'react-test-renderer';
import { screenNames } from '../../../../BannerCarousel/utils';

import WhatScreen from '../index';

it('WhatScreen should render correctly', () => {
  const tree = renderer
    .create(
      <WhatScreen
        slideCarousel={() => {}}
        screenName={screenNames.what}
      ></WhatScreen>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
