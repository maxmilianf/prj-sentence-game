import React, { MutableRefObject } from 'react';
import WhoScreen from './screens/WhoScreen';
import WhatScreen from './screens/WhatScreen';
import WhenScreen from './screens/WhenScreen';
import { screenNames } from '../BannerCarousel/utils';
import WhereScreen from './screens/WhereScreen';
import FullSentenceScreen from './screens/FullSentenceScreen';
import { TextInput } from 'react-native';

interface bannerCarouselScreenProps {
  slideCarousel: (
    inputRef: MutableRefObject<TextInput | null> | null | undefined
  ) => void;
  slideCarouselToStart: () => void;
}

const BannerCarouselScreens = ({
  slideCarousel = () => {},
  slideCarouselToStart = () => {},
}: bannerCarouselScreenProps) => {
  return [
    <WhoScreen
      slideCarousel={slideCarousel}
      key={screenNames.who}
      screenName={screenNames.who}
    />,
    <WhatScreen
      slideCarousel={slideCarousel}
      key={screenNames.what}
      screenName={screenNames.what}
    />,
    <WhenScreen
      slideCarousel={slideCarousel}
      key={screenNames.when}
      screenName={screenNames.when}
    />,
    <WhereScreen
      slideCarousel={slideCarousel}
      key={screenNames.when}
      screenName={screenNames.where}
    />,
    <FullSentenceScreen slideCarouselToStart={slideCarouselToStart} key={5} />,
  ];
};

export default BannerCarouselScreens;
