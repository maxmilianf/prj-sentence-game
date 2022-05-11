import { StyleSheet } from 'react-native';
import { WelcomeModalStyles } from '../types';

export const welcomeModalStyles = StyleSheet.create<WelcomeModalStyles>({
  modal: {
    flex: 1,
  },
  pressable: {
    flex: 1,
  },
  blurView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameTitle: {
    fontWeight: '500',
  },
});
