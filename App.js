import * as React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login'
import Traductor from './src/components/Traductor'
import Menu from './src/components/Menu'

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
           options={{ headerShown: false }}/>
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
    height:'100%',
  },
});
