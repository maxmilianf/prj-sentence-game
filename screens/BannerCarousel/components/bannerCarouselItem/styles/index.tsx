import { StyleSheet } from 'react-native';
import { BannerCarouselItemStyles } from '../types';

export const bannerCarouselItemStyles =
  StyleSheet.create<BannerCarouselItemStyles>({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    titleContainer: {
      alignItems: 'center',
      marginTop: 150,
    },
    title: { opacity: 0.8 },
    textInput: {
      height: 40,
      marginTop: 20,
      width: '75%',
      backgroundColor: 'transparent',
    },
  });
