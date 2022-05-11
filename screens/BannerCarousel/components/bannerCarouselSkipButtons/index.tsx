import React from 'react';
import { IconButton } from 'react-native-paper';
import { bannerCarouselSkipButtonStyles } from './styles';
import { BannerCarouselSkipButtonsProps } from './types';

const bannerCarouselSkipButton = ({
  iconName = '',
}: BannerCarouselSkipButtonsProps) => {
  const styles = bannerCarouselSkipButtonStyles;
  return (
    <>
      {/* 
        // @ts-ignore react-native-types or react-native-paper most likely*/}
      <IconButton
        icon={iconName}
        size={30}
        color='black'
        style={styles.skipButtonStyle}
      />
    </>
  );
};

export default bannerCarouselSkipButton;
