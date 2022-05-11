import React, { useContext } from 'react';
import { SentenceContext } from '../../../../context/SentenceContext';
import BannerCarouselItem from '../../../BannerCarousel/components/bannerCarouselItem';
import { ScreenTypes } from '../types';

const WhoScreen = ({ slideCarousel = () => {}, screenName }: ScreenTypes) => {
  const { whoSentence, setWhoSentence, whatInputRef, whoInputRef } =
    useContext(SentenceContext);

  return (
    <BannerCarouselItem
      capitalize
      screenName={screenName}
      partOfSentence={whoSentence}
      setPartOfSentence={setWhoSentence}
      slideCarousel={slideCarousel}
      inputRef={whoInputRef}
      inputRefToFocus={whatInputRef}
    />
  );
};

export default WhoScreen;
