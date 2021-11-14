import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, ScrollView, FlatList } from 'react-native';
import GreyButton from '../components/GreyButton';
import RedButtom from '../components/RedButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Counter from './Counter';
//import { FlatList } from 'react-native-gesture-handler';



export default function Clients({navigation}) {
  const clients = [ivanov,petrov,fomina, ivanov];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("0", item)}>
        <GreyButton title={item.name+" "+item.surname}/>
      </TouchableOpacity>
  
    )};

  //  const clientComponent = clients.map( (item, i) => {
  //   return (
  //       <TouchableOpacity onPress={() => navigation.navigate("0", item)}>
  //         <GreyButton title={item.name+" "+item.surname}/>
  //       </TouchableOpacity>
  //   )
  // })


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Дворник', value: 'Дворник'},
    {label: 'Директор', value: 'Директор'}
  ]);

  return (
   
   <View>  
      <SafeAreaView>
        
        <View> 
          <RedButtom title="Клиенты"/>
        </View>
        <Counter/>
        <View style={styles.grey}> 
          <ScrollView>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
            <FlatList
              data = {clients}
              renderItem = {renderItem}
            />
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
  position: "Дворник"
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
  position: "Директор"
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
  position: "Директор"
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
