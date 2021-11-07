import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function MyButton({NameOfField,InField}) {
  return (
   
      <View> 
       <TouchableOpacity > 
          <Text style={styles.textNameOfField}>{NameOfField}</Text>
          <Text style={styles.textInField}>{InField}</Text>
       </TouchableOpacity>
      </View>
   
  );
}
 
const styles = StyleSheet.create({
  
  textNameOfField: {
    color: "grey",
    fontSize: 13,
    paddingLeft: 7,
    paddingTop: 10
  },
  textInField: {
    color: 'black',
    fontSize: 18,
    paddingTop: 3,
    paddingLeft: 7
  }

});
