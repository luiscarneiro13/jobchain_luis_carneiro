import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { HandlerNavigation } from './src/navigation';
import { THEME } from './src/constants/Theme';

export default function App() {
  return (
    <PaperProvider theme={THEME}>
      <NavigationContainer>
        <HandlerNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
