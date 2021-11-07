import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import GreyButton from '../components/GreyButton';
import RedButtom from '../components/RedButton';

export default function Clients({navigation}) {
  const clients = [ivanov,petrov,fomina];

  const clientComponent = clients.map( (item, i) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("0", item)}>
          <GreyButton title={item.name+" "+item.surname}/>
        </TouchableOpacity>
    )
  })

  return (
   <View>  
      <SafeAreaView>
      
        <View> 
          <RedButtom title="Клиенты"/>
        </View>
      
        <View style={styles.grey}> 
          <ScrollView>
            {clientComponent}
          </ScrollView>
        </View>
      </SafeAreaView>
   </View>  
  );
}

let ivanov = {
  name: "Иван",
  surname: "Иванов",
  patronymic: "Иванович",
  age: 30,
  telephone:"+7-907-233-22-33",
  cardNumber: 100500,
  isBlocked: true,
  couponsNumber: 7,
  couopnsOnHands: 2,
}
let petrov = {
  name: "Петр",
  surname: "Петров",
  patronymic: "Петрович",
  age: 57,
  telephone:"+7934-2443-232-35",
  cardNumber: 100,
  isBlocked: false,
  couponsNumber: 12,
  couopnsOnHands: 0,
}
let fomina = {
  name: "Прасковья",
  surname: "Фомина",
  patronymic: "Ильинична",
  age: 17,
  telephone:"+7900-543-232-55",
  cardNumber: 120,
  isBlocked: false,
  couponsNumber: 12,
  couopnsOnHands: 0,
}

const styles = StyleSheet.create({
  grey: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30
  },
  page: {
    flex:1
  }
});
