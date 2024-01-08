import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; // Importe o SplashScreen
import { StatusBar } from 'react-native';

import * as Font from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { Routes } from './src/routes'
import { Background } from './src/components/Background';

let customFonts = {
  'Inter_400Regular': Inter_400Regular,
  'Inter_500Medium': Inter_500Medium,
  'Rajdhani_500Medium': Rajdhani_500Medium,
  'Rajdhani_700Bold': Rajdhani_700Bold
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}