import React, { useContext } from 'react';
import { SentenceContext } from '../../../../context/SentenceContext';
import BannerCarouselItem from '../../../BannerCarousel/components/bannerCarouselItem';
import { ScreenTypes } from '../types';

const WhereScreen = ({ slideCarousel = () => {}, screenName }: ScreenTypes) => {
  const { whereSentence, setWhereSentence, whereInputRef } =
    useContext(SentenceContext);

  return (
    <BannerCarouselItem
      screenName={screenName}
      partOfSentence={whereSentence}
      setPartOfSentence={setWhereSentence}
      slideCarousel={slideCarousel}
      inputRef={whereInputRef}
    />
  );
};

export default WhereScreen;
