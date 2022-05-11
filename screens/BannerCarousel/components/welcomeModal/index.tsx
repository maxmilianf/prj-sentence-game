import React from 'react';
import { BlurView } from 'expo-blur';
import { Modal, Pressable } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';
import { welcomeModalStyles } from './styles';
import { WelcomeModalProps } from './types';

const welcomeModal = ({ modalVisibility, onClosemodal }: WelcomeModalProps) => {
  const styles = welcomeModalStyles;
  return (
    <Modal
      animationType='fade'
      transparent
      visible={modalVisibility}
      style={styles.modal}
    >
      <Pressable onPress={() => onClosemodal()} style={styles.pressable}>
        <BlurView intensity={20} style={styles.blurView}>
          <Headline style={styles.gameTitle}>SENTENCE GAME</Headline>
          <Subheading>Press anywhere to start</Subheading>
        </BlurView>
      </Pressable>
    </Modal>
  );
};

export default welcomeModal;
