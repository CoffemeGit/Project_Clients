import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function RedButton({title}) {
  return (
   
      <View> 
       <TouchableOpacity> 
          <View style={styles.line} />
          <Text style={styles.button}>{title}</Text>
       </TouchableOpacity>
      </View>
   
  );
}
 
const styles = StyleSheet.create({
  
  button: {
  //  marginTop: 20,
    backgroundColor: 'red',
    fontSize: 21,
    fontWeight: "bold",
    color: 'white',
    padding: 13
  },
    line: {
    width: '100%',
    height: 20,
    backgroundColor: '#C50000'
    }

});
