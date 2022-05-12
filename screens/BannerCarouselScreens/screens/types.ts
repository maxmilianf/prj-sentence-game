import { MutableRefObject } from 'react';
import { TextInput } from 'react-native';

export interface ScreenTypes {
  slideCarousel: (
    inputRef: MutableRefObject<TextInput | null> | null | undefined
  ) => void;
  screenName: string;
}
