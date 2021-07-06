import React, { useState, useMemo } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper
} from 'react-native-paper'
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation
}
  from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext'
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login'
import Traductor from './src/screens/Traductor'
import Menu from './src/screens/Menu'
import Danza from './src/screens/Danza'
import Historia from './src/screens/Historia'
import Musica from './src/screens/Musica'
import Turismo from './src/screens/Turismo'

const Stack = createStackNavigator();


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

export default function App() {
  return (
    <PreferencesContext.Provider value={preference}>
      <PaperProvider theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
      <NavigationContainer theme={
        theme === 'dark' ? DarkThemeNavigation : DefaultThemeNavigation}>
        <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
            options={{ headerShown: false }} />
          <Stack.Screen name="Traductor" component={Traductor}
            options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={Menu}
            options={{ headerShown: false }} />
          <Stack.Screen name="Danza" component={Danza}
            options={{ headerShown: false }} />
          <Stack.Screen name="Historia" component={Historia}
            options={{ headerShown: false }} />
          <Stack.Screen name="Musica" component={Musica}
            options={{ headerShown: false }} />
          <Stack.Screen name="Turismo" component={Turismo}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </PreferencesContext.Provider >
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});
