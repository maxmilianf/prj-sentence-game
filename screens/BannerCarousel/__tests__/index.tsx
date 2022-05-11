import React from 'react';
import renderer from 'react-test-renderer';

import BannerCarousel from '../index';

it('BannerCarousel renders correctly', () => {
  const tree = renderer.create(<BannerCarousel></BannerCarousel>).toJSON();
  expect(tree).toMatchSnapshot();
});
