import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Button,SafeAreaView } from 'react-native';
import RedButtom from '../components/RedButton';
import MyButton from '../components/MyButton';



export default function App({route, navigation}) {
  const  name  = route.params.name;
  const  surname  = route.params.surname;
  const  patronymic  = route.params.patronymic;
  const  age  = route.params.age;
  const  telephone  = route.params.telephone;
  const  cardNumber  = route.params.cardNumber;
  const  isBlocked  = route.params.isBlocked;
  const  couponsNumber  = route.params.couponsNumber;
  const  couopnsOnHands  = route.params.couopnsOnHands;
  return (
   <View>  
     <SafeAreaView style={styles.page}>
      <View >
         <Button title='Назад' textColor="black" color='pink' onPress={() => navigation.goBack() } />
      </View>
    
      <View> 
        <RedButtom title = "О клиенте"/>
      </View>
     
      <View style={styles.white}> 
        <MyButton NameOfField = "Фамилия:" InField = {surname}/>
        <MyButton NameOfField = "Имя:" InField = {name}/>
        <MyButton NameOfField = "Отчество:" InField = {patronymic}/>
        <MyButton NameOfField = "Возраст:" InField = {age}/>
        <MyButton NameOfField = "Телефон:" InField = {telephone}/>
        <MyButton NameOfField = "Номер карты:" InField = {cardNumber}/>
      </View>

      <View style={styles.green}>
        <MyButton NameOfField = "Клиент заблокирован?" InField = {isBlocked}/>
      </View>

      <View style={styles.blue}>
        <MyButton NameOfField = "Количество купонов в БД:" InField = {couponsNumber}/>
      </View>

      <View style={styles.white}>
        <MyButton NameOfField = "Выдано на руки:" InField = {couopnsOnHands}/>
      </View>
    </SafeAreaView> 
   </View>  
  );
}

const styles = StyleSheet.create({


  white: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 30
  },
   green: {
    marginTop: 10,
    marginRight: 30,
    paddingLeft: 20,
    color: 'white',
    backgroundColor: "#00D253"
  },
   blue: {
    marginTop: 5,
    marginRight: 30,
    paddingLeft: 20,
    color: "white",
    backgroundColor: "#0080D8"
  
  },
  safeArea: {
    flex: 1
  }
});
