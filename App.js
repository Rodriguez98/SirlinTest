import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login'
import Traductor from './src/screens/Traductor'
import Menu from './src/screens/Menu'
import Danza from './src/screens/Danza'
import Historia from './src/screens/Historia'
import Musica from './src/screens/Musica'
import Turismo from './src/screens/Turismo'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
