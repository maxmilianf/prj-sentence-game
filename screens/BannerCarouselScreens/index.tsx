import React from 'react';
import WhoScreen from './screens/WhoScreen';
import WhatScreen from './screens/WhatScreen';
import WhenScreen from './screens/WhenScreen';
import WhereScreen from './screens/WhereScreen';
import FullSentenceScreen from './screens/FullSentenceScreen';

interface bannerCarouselScreenProps {
  slideCarousel: () => void;
  slideCarouselToStart: () => void;
}

const BannerCarouselScreens = ({
  slideCarousel = () => {},
  slideCarouselToStart = () => {},
}: bannerCarouselScreenProps) => {
  return [
    <WhoScreen slideCarousel={slideCarousel} />,
    <WhatScreen slideCarousel={slideCarousel} />,
    <WhenScreen slideCarousel={slideCarousel} />,
    <WhereScreen slideCarousel={slideCarousel} />,
    <FullSentenceScreen slideCarouselToStart={slideCarouselToStart} />,
  ];
};

export default BannerCarouselScreens;
