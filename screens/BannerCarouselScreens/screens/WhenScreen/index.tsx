import React, { useContext } from 'react';
import { SentenceContext } from '../../../../context/SentenceContext';
import BannerCarouselItem from '../../../BannerCarousel/components/bannerCarouselItem';
import { ScreenTypes } from '../types';

const WhenScreen = ({ slideCarousel = () => {}, screenName }: ScreenTypes) => {
  const { whenSentence, setWhenSentence, whenInputRef, whereInputRef } =
    useContext(SentenceContext);

  return (
    <BannerCarouselItem
      screenName={screenName}
      partOfSentence={whenSentence}
      setPartOfSentence={setWhenSentence}
      slideCarousel={slideCarousel}
      inputRef={whenInputRef}
      inputRefToFocus={whereInputRef}
    />
  );
};

export default WhenScreen;
