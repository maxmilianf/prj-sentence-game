import React from 'react';
import { IconButton } from 'react-native-paper';
import { bannerCarouselSkipButtonStyles } from './styles';
import { BannerCarouselSkipButtonsProps } from './types';

const bannerCarouselSkipButton = ({
  icon = '',
}: BannerCarouselSkipButtonsProps) => {
  const styles = bannerCarouselSkipButtonStyles;
  return (
    <>
      {/* 
        // @ts-ignore react-native-types or react-native-paper most likely*/}
      <IconButton
        icon={icon}
        size={30}
        color='black'
        style={styles.skipButtonStyle}
      />
    </>
  );
};

export default bannerCarouselSkipButton;
