import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Button,SafeAreaView } from 'react-native';


export default class Counter extends React.Component {
  
    render() {
      return (
        <View>
          <Text>Вы нажали кнопку 5 раз</Text>
          <button title = 'Нажми на меня'/>
        </View>
      );
    }
  }
