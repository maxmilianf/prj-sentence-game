import { StyleSheet } from 'react-native';
import { BannerCarouselStylesProps } from '../types';

export const bannerCarouselStyles =
  StyleSheet.create<BannerCarouselStylesProps>({
    linearGradient: {
      flex: 1,
      height: '100%',
      minHeight: '100%',
    },
    bannerCarouselContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100%',
    },
    carouselActiveDotStyle: {
      opacity: 0.8,
    },
    carouselStyle: {
      height: '60%',
    },
    carouselPaginationStyle: {
      marginBottom: 50,
    },
  });
