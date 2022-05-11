import { StyleSheet } from 'react-native';
import { FullSentenceScreenStyles } from '../types';

export const fullSentenceScreenStyles =
  StyleSheet.create<FullSentenceScreenStyles>({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 150,
    },
    sentence: {
      opacity: 0.8,
      marginTop: 20,
      width: '75%',
      textAlign: 'center',
      fontStyle: 'italic',
    },
    takeBackButton: {
      backgroundColor: 'black',
      opacity: 0.8,
      marginTop: 350,
    },
  });
