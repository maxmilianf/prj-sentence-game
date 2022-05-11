import React, { MutableRefObject, useRef, useContext, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { gradientBackground, prevButtonName, nextButtonName } from './utils';
import { LinearGradient } from 'expo-linear-gradient';
import { SentenceContext } from '../../context/SentenceContext';
import bannerCarouselSkipButton from '../BannerCarousel/components/bannerCarouselSkipButtons';
import BannerCarouselScreens from '../BannerCarouselScreens';
import { bannerCarouselStyles } from './styles';

const BannerCarousel = () => {
  const styles = bannerCarouselStyles;
  const carouselRef = useRef<Swiper>(null);
  const {
    whoInputRef,
    setWhoSentence,
    setWhatSentence,
    setWhenSentence,
    setWhereSentence,
  } = useContext(SentenceContext);

  const focusInput = (
    inputRef?: MutableRefObject<TextInput | null> | undefined | null
  ) => {
    if (inputRef) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 600);
    }
  };

  const slideCarousel = (
    inputRef?: MutableRefObject<TextInput> | undefined
  ) => {
    if (carouselRef) {
      carouselRef.current?.scrollBy(1, true);
      focusInput(inputRef);
    }
  };

  const slideCarouselToStart = () => {
    if (carouselRef) {
      setWhoSentence('');
      setWhatSentence('');
      setWhenSentence('');
      setWhereSentence('');
      carouselRef.current?.scrollTo(0, true);
      focusInput(whoInputRef);
    }
  };

  useEffect(() => {
    if (whoInputRef) {
      whoInputRef.current?.focus();
    }
  }, []);

  return (
    <LinearGradient colors={gradientBackground} style={styles.linearGradient}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.bannerCarouselContainer}>
          {/* 
        // @ts-ignore react-native-types version most likely*/}
          <Swiper
            ref={carouselRef}
            nextButton={bannerCarouselSkipButton({ iconName: nextButtonName })}
            prevButton={bannerCarouselSkipButton({ iconName: prevButtonName })}
            activeDotColor={'black'}
            activeDotStyle={styles.carouselActiveDotStyle}
            loop={false}
            horizontal
            showsButtons
            style={styles.carouselStyle}
            paginationStyle={styles.carouselPaginationStyle}
          >
            {BannerCarouselScreens({ slideCarousel, slideCarouselToStart })}
          </Swiper>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default BannerCarousel;
