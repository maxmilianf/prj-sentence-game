import { StyleSheet } from 'react-native';
import { BannerCarouselStyles } from '../types';

export const bannerCarouselStyles = StyleSheet.create<BannerCarouselStyles>({
  linearGradient: {
    flex: 1,
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
    minHeight: '100%',
  },
  carouselPaginationStyle: {
    marginBottom: 50,
  },
});
