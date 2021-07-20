import React, { useState, useMemo } from 'react';
//import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper
} from 'react-native-paper'
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation
} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext'
import { StatusBar } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';

/* import Login from './src/screens/Login'
import Traductor from './src/screens/Traductor'
import Menu from './src/screens/Menu'
import Danza from './src/screens/Danza'
import Historia from './src/screens/Historia'
import Musica from './src/screens/Musica'
import Turismo from './src/screens/Turismo'

const Stack = createStackNavigator();*/

export default function App() {

  const [theme, setTheme] = useState('dark');

  DefaultThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#15212b';

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const preference = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
        <NavigationContainer theme={
          theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation}>
          <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider >
  );
}