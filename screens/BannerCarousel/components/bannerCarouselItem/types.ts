import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { TextInput, TextStyle, ViewStyle } from 'react-native';

export interface BannerCarouselItemProps {
  screenName: string;
  partOfSentence: string;
  setPartOfSentence: Dispatch<SetStateAction<string>>;
  capitalize?: boolean;
  slideCarousel?: (ref?: MutableRefObject<TextInput | null> | null) => void;
  inputRef?: MutableRefObject<TextInput | null> | null;
  inputRefToFocus?: MutableRefObject<TextInput | null> | null;
}

export type BannerCarouselItemStyles = {
  container: ViewStyle;
  titleContainer: ViewStyle;
  textInput: ViewStyle;
  title: TextStyle;
};
