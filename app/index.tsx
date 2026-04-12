import { FlatList, Text, View } from "react-native";

import CustomButton from '../components/customButton'
import AddItemView from '../components/addItemView'
import CustomHeader from '../components/customeHeader'
import DashboardView from '../components/dashboardView'

import { Transaction }from '../interface/transactionInterface'

import { useState } from 'react'


export default function Index() {
  const [tempData, setTempData] = useState<Transaction[]>([
    { title: 'food', description: 'Grocery Shopping', price: 45.00 },
    { title: 'transport', description: 'Bus fare', price: 2.50 },
    { title: 'food', description: 'Lunch at cafe', price: 12.00 },
    { title: 'utilities', description: 'Electric bill', price: 60.75 },
    { title: 'entertainment', description: 'Movie ticket', price: 15.00 },
    { title: 'food', description: 'Dinner takeout', price: 18.25 },
    { title: 'shopping', description: 'New shirt', price: 25.99 },
    { title: 'health', description: 'Pharmacy items', price: 10.50 },
    { title: 'transport', description: 'Taxi ride', price: 8.75 },
    { title: 'subscription', description: 'Streaming service', price: 9.99 }
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
        renderItem={({item, index}) => (
          <View style={{padding: 20, borderWidth: 1, borderColor: 'black', borderRadius: 10, margin: 10, marginLeft: 15, marginRight: 15}}>
            <Text>{index+1} {item.title} {item.description} {item.price}</Text>
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
