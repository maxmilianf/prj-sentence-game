import React, { useContext, useEffect } from 'react';
import { SentenceContext } from '../../../../context/SentenceContext';
import BannerCarouselItem from '../../../BannerCarousel/components/bannerCarouselItem';
import { ScreenTypes } from '../types';

const WhereScreen = ({ slideCarousel = () => {} }: ScreenTypes) => {
  const { whereSentence, setWhereSentence, fullSentence, whereInputRef } =
    useContext(SentenceContext);
  const screenName = 'Where?';

  useEffect(() => {
    console.log('FULL SENTENCE: ', fullSentence);
  }, [fullSentence]);

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
