import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Clients from './src/screens/Clients';
import Screen0 from './src/screens/Screen0';


const Stack = createStackNavigator();



export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator >
       
       <Stack.Screen name = 'Клиенты'  options={{headerShown: false}} component = {Clients}/>
       <Stack.Screen name = '0' options={{headerShown: false}} component = {Screen0}/>
      
    </Stack.Navigator>
   </NavigationContainer>
  );
}

