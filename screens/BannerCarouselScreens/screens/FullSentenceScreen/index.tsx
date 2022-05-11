import React, { useContext } from 'react';
import { View } from 'react-native';
import { Headline, Subheading, Button } from 'react-native-paper';
import { fullSentenceScreenStyles } from './styles';
import { SentenceContext } from '../../../../context/SentenceContext';

interface fullSentenceScreenProps {
  slideCarouselToStart: () => void;
}

const FullSentenceScreen = ({
  slideCarouselToStart = () => {},
}: fullSentenceScreenProps) => {
  const { fullSentence, displaySentence } = useContext(SentenceContext);
  const errorMsg = 'You did not finish your sentence';
  const displayFullSentence = displaySentence ? fullSentence : errorMsg;
  const styles = fullSentenceScreenStyles;

  return (
    <View style={styles.container}>
      <Headline style={{ opacity: 0.8 }}>Your sentence</Headline>
      <Subheading style={styles.sentence}>{displayFullSentence}</Subheading>
      {/* 
        // @ts-ignore react-native-paper version most likely*/}
      <Button
        onPress={slideCarouselToStart}
        style={styles.takeBackButton}
        mode='contained'
      >
        Create new sentence
      </Button>
    </View>
  );
};

export default FullSentenceScreen;
