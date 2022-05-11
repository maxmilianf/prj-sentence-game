import React, { useContext, useEffect } from 'react';
import { SentenceContext } from '../../../../context/SentenceContext';
import BannerCarouselItem from '../../../BannerCarousel/components/bannerCarouselItem';
import { ScreenTypes } from '../types';

const WhatScreen = ({ slideCarousel = () => {} }: ScreenTypes) => {
  const { whatSentence, setWhatSentence, whatInputRef, whenInputRef } =
    useContext(SentenceContext);
  const screenName = 'What?';

  return (
    <BannerCarouselItem
      screenName={screenName}
      partOfSentence={whatSentence}
      setPartOfSentence={setWhatSentence}
      slideCarousel={slideCarousel}
      inputRef={whatInputRef}
      inputRefToFocus={whenInputRef}
    />
  );
};

export default WhatScreen;
