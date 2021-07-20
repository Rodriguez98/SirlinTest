import React from 'react';
import { IconButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Traductor from '../screens/Traductor';
import Menu from '../screens/Menu';
//import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props) {

  const { navigation } = props

  console.log(props);
  const buttonLeft = (screen) => {
    switch (screen) {
      // case 'search':
      case 'menu':
        return (
          <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        );
      default:
        return (
          <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
        );
    }
  };

  /*  const buttonRight = () => {
        return (
          <IconButton
            icon="magnify"
            onPress={() => navigation.navigate('search')}
          />
        );
      };*/

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'Inicio',
          headerLeft: () => buttonLeft('login'),
        }}
      />
      <Stack.Screen
        name="traductor"
        component={Traductor}
        options={{
          title: '',
          headerLeft: () => buttonLeft('traductor'),
        }}
      />
      <Stack.Screen
        name="menu"
        component={Menu}
        options={{
          title: 'Menu',
          headerLeft: () => buttonLeft('menu'),
        }}
      />
    </Stack.Navigator>
  );
}