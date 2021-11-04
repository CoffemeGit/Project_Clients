import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name = 'Экран 2' component = {Screen1}/>
       <Stack.Screen name = 'Экран 1' component = {Screen2}/>
       
    </Stack.Navigator>
   </NavigationContainer>
  );
}

