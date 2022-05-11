import React from 'react';
import { View } from 'react-native';
import { TextInput, Headline } from 'react-native-paper';
import { bannerCarouselItemStyles } from './styles/index';
import { BannerCarouselItemProps } from './types';

const BannerCarouselItem = ({
  screenName = '',
  partOfSentence = '',
  setPartOfSentence = () => {},
  capitalize = false,
  slideCarousel = () => {},
  inputRefToFocus = null,
  inputRef,
}: BannerCarouselItemProps) => {
  const styles = bannerCarouselItemStyles;
  const capitalizeInput = capitalize ? 'sentences' : 'none';

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Headline style={styles.title}>{screenName}</Headline>
      </View>
      {/* 
        // @ts-ignore react-native-types or react-native-paper most likely*/}
      <TextInput
        ref={inputRef}
        autoCapitalize={capitalizeInput}
        onSubmitEditing={() => {
          slideCarousel(inputRefToFocus);
        }}
        value={partOfSentence}
        onChangeText={(value) => {
          setPartOfSentence(value);
        }}
        mode='outlined'
        style={styles.textInput}
        activeOutlineColor={`rgba(0, 0, 0, 0.8)`}
      />
    </View>
  );
};

export default BannerCarouselItem;
