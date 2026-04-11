import { FlatList, Text, View } from "react-native";

import CustomButton from '../components/customButton'
import AddItemView from '../components/addItemView'
import CustomHeader from '../components/customeHeader'
import DashboardView from '../components/dashboardView'

import { Transaction }from '../interface/transactionInterface'

import { useState } from 'react'


export default function Index() {
  const [tempData, setTempData] = useState<Transaction[]>([
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
  ]);

  function addTransaction (newItem: Transaction) {
    setTempData(prev => [...prev, newItem]);
  }

  const [show, setShow] = useState(false);

  function handleAdd () {
    setShow(true);
  }

  function handleExit () {
    setShow(false);
  }


  return (
    <View style={{flex: 1, position: 'relative'}}>
      <CustomHeader />
      <DashboardView />
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

      { !show && (<CustomButton 
        title="add" 
        handleAdd={handleAdd}
        handleExit={handleExit}
      />)}

      {show &&(
        <AddItemView  
          handleAdd={handleAdd}
          handleExit={handleExit}
          addTransaction={addTransaction}
        />
      )}
    </View>
  );
}
