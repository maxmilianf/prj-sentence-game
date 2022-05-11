import { TextStyle, ViewStyle } from 'react-native';

export interface WelcomeModalProps {
  modalVisibility: boolean;
  onClosemodal: () => void;
}

export type WelcomeModalStyles = {
  modal: ViewStyle;
  pressable: ViewStyle;
  blurView: ViewStyle;
  gameTitle: TextStyle;
};
