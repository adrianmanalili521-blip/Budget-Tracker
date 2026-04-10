import { FlatList, Text, View } from "react-native";

import CustomButton from '../components/customButton'
import AddItemView from '../components/addItemView'

import { useState } from 'react'

export default function Index() {
  const tempData = [
    { id: 1, title: 'food', description: 'Grocery Shopping', price: 45.00 },
    { id: 2, title: 'transport', description: 'Bus fare', price: 2.50 },
    { id: 3, title: 'food', description: 'Lunch at cafe', price: 12.00 },
    { id: 4, title: 'utilities', description: 'Electric bill', price: 60.75 },
    { id: 5, title: 'entertainment', description: 'Movie ticket', price: 15.00 },
    { id: 6, title: 'food', description: 'Dinner takeout', price: 18.25 },
    { id: 7, title: 'shopping', description: 'New shirt', price: 25.99 },
    { id: 8, title: 'health', description: 'Pharmacy items', price: 10.50 },
    { id: 9, title: 'transport', description: 'Taxi ride', price: 8.75 },
    { id: 10, title: 'subscription', description: 'Streaming service', price: 9.99 }
  ];

  const [show, setShow] = useState(false);
  const [exit, setExit] = useState(false);

  function handleExit () {
    setExit(true);
  }

  function handleClick () {
    setShow(true);
    setExit(false);
  }

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <FlatList
        style={{flex: 1, backgroundColor: '#EEEEEE'}}
        data={tempData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 20, borderWidth: 1, borderColor: 'black', borderRadius: 10, margin: 10, marginLeft: 15, marginRight: 15}}>
            <Text>{item.id} {item.title} {item.description} {item.price}</Text>
          </View>
        )}
      />

      <CustomButton 
        title="add" 
        handleClick={handleClick}
        handleExit={handleExit}
      />
      {show && !exit &&(
        <AddItemView  
          handleClick={handleExit}
          handleExit={handleExit}
        />
      )}
    </View>
  );
}
