import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SentenceContextProvider } from './context/SentenceContext';
import BannerCarousel from './screens/BannerCarousel';

export default function App() {
  return (
    <SentenceContextProvider>
      <PaperProvider>
        <BannerCarousel />
      </PaperProvider>
    </SentenceContextProvider>
  );
}
