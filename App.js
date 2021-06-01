import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login'
import Traductor2 from './src/components/Traductor2'
import Menu from './src/components/Menu'

const Stack = createStackNavigator();

export default function App() {
  return (
    <ImageBackground source={require('./src/img/plantilla.png')} style={styles.image}>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
            options={{ headerShown: false }} />
          <Stack.Screen name="Traductor2" component={Traductor2}
            options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height:'100%',
  },
});
