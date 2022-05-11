import React from 'react';
import renderer from 'react-test-renderer';

import BannerCarouselItem from '../index';

it('BannerCarousel Item renders correctly', () => {
  const tree = renderer
    .create(
      <BannerCarouselItem
        screenName='ScreenName'
        setPartOfSentence={() => {}}
        partOfSentence={''}
      ></BannerCarouselItem>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
