import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function GreyButton({title}) {
  return (
   
    <View>
          <Text style={styles.button}> {title}</Text>
    </View> 
   
  );
}
 
const styles = StyleSheet.create({
  
  button: {
    //justifycontent: 'flex-end',
    //flex: 1,
    marginTop: 20,
    backgroundColor: '#E1E1E1',
    fontSize: 21,
    fontWeight: "bold",
    color: 'black',
    padding: 10
  },

});
