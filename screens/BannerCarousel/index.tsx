import React, { MutableRefObject, useRef, useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  gradientBackground,
  prevButtonName,
  nextButtonName,
  activeDotColor,
} from './utils';
import { LinearGradient } from 'expo-linear-gradient';
import { SentenceContext } from '../../context/SentenceContext';
import welcomeModal from './components/welcomeModal/index';
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
  const [modalVisibility, setModalVisibility] = useState(true);

  const focusInput = (
    timeOut: number,
    inputRef: MutableRefObject<TextInput | null> | null | undefined
  ) => {
    if (inputRef) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, timeOut);
    }
  };

  const slideCarousel = (
    inputRef: MutableRefObject<TextInput | null> | null | undefined
  ) => {
    if (carouselRef) {
      carouselRef.current?.scrollBy(1, true);
      focusInput(600, inputRef);
    }
  };

  const slideCarouselToStart = () => {
    if (carouselRef) {
      setWhoSentence('');
      setWhatSentence('');
      setWhenSentence('');
      setWhereSentence('');
      carouselRef.current?.scrollTo(0, true);
      focusInput(800, whoInputRef);
    }
  };

  const onClosemodal = () => {
    setModalVisibility(false);
    if (whoInputRef) {
      setTimeout(() => {
        whoInputRef.current?.focus();
      }, 300);
    }
  };

  return (
    <ScrollView scrollEnabled={false}>
      <KeyboardAvoidingView>
        {welcomeModal({ modalVisibility, onClosemodal })}
        <LinearGradient
          colors={gradientBackground}
          style={styles.linearGradient}
        >
          <View style={styles.bannerCarouselContainer}>
            {/* 
        // @ts-ignore react-native-types version most likely*/}
            <Swiper
              ref={carouselRef}
              nextButton={bannerCarouselSkipButton({
                iconName: nextButtonName,
              })}
              prevButton={bannerCarouselSkipButton({
                iconName: prevButtonName,
              })}
              activeDotColor={activeDotColor}
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
        </LinearGradient>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BannerCarousel;
