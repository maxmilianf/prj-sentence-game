import React from 'react';
import renderer from 'react-test-renderer';
import { prevButtonName } from '../../../utils';

import BannerCarouselSkipButton from '../index';

it('BannerCarousel Skip buttons render correctly', () => {
  const tree = renderer
    .create(
      <BannerCarouselSkipButton
        iconName={prevButtonName}
      ></BannerCarouselSkipButton>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
