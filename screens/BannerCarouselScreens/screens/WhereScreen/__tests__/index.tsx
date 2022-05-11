import React from 'react';
import renderer from 'react-test-renderer';
import { screenNames } from '../../../../BannerCarousel/utils';

import Wherescreen from '../index';

it('WhereScreen should render correctly', () => {
  const tree = renderer
    .create(
      <Wherescreen
        slideCarousel={() => {}}
        screenName={screenNames.where}
      ></Wherescreen>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
