import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './screens/inicio';
import Acessar from './screens/acessar';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>

      <Stack.Navigator initialRouteName='inicio'>

        <Stack.Screen
          name='inicio'
          component={Inicio}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='acessar'
          component={Acessar}
          options={{headerShown: false}}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
