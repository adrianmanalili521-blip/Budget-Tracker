import { View, Text, StyleSheet, Alert} from 'react-native'

import CustomButton from './customButton';
import CustomInput from './customInput';
import CustomHeader from './customeHeader';
import DashboardView from './dashboardView';
import CustomModal from './customModal'

import { useState } from 'react'

import { Picker } from '@react-native-picker/picker'

interface Transaction {
  id: number;
  title: string;
  description: string;
  price?: number; 
}

interface AddItemViewProp {
    handleAdd: () => void;
    handleExit: () => void;
    addTransaction: (newItem: Transaction) => void
}

function AddItemView ( { handleAdd, handleExit, addTransaction } : AddItemViewProp) {
    const [date , setDate] = useState(new Date().toString());
    const [amount, setAmount] = useState(""); 
    const [description, setDescription] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Food");
    const [showModal, setShowModal] = useState (false);
    let counter = 10;

    function handleAmount () {
        const parseAmount = parseFloat(amount);

        if (isNaN(parseAmount)) {
            Alert.alert("Not a Number", "you think you prick")
        } else {
            return parseAmount;
        }
         
    }

    function handleAddTransaction () {
        const inputData = {
            inputDate: date,
            inputAmount: amount, 
            inputDescription: description,
            inputCategory: selectedCategory
        }
        const parsedAmount = handleAmount();
        if (parsedAmount === undefined) return; 
        const newTransaction: Transaction = {
            id: counter+=1,
            title: selectedCategory,
            description: description,
            price: parsedAmount
        }

        addTransaction(newTransaction);

        setShowModal(true);
        setTimeout(()=> {
            setShowModal(false);
        }, 2000)

        console.log(inputData);
    }

    return (
        <View style={{height: '100%'}}>
            <CustomHeader />
            <DashboardView />
            <View style={styles.container}>
            
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Add Transaction</Text>
            <CustomButton 
                title="exit"
                handleAdd={handleAdd}
                handleExit={handleExit}
            />
            <Text style={{marginTop: 20}}>Type</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 5}}>
                <CustomButton 
                    title='expense'
                    handleAdd={handleAdd}
                    handleExit={handleExit}   
                />
                <CustomButton 
                    title='income'
                    handleAdd={handleAdd}
                    handleExit={handleExit}
                />
            </View>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Category</Text>
            <Picker style={{marginTop: 5}}
                selectedValue={selectedCategory}
                onValueChange={(category) => setSelectedCategory(category)}    

            >
                <Picker.Item label='Food' value='Food'/>
                <Picker.Item label='Transport' value='Transport'/>
                <Picker.Item label='Entertainment' value='Entertainment'/>
                <Picker.Item label='Bills' value='Bills'/>
            </Picker>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Amount</Text>
            <CustomInput title='amount'amount={amount} setAmount={setAmount}/>
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Date</Text>
            <CustomInput title='date' date={date} setDate={setDate}/>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Description</Text>
            <CustomInput title='description' description={description} setDescriptiom={setDescription}/>
            <CustomButton 
                title='addTransaction'
                handleAddTransaction={handleAddTransaction}
            />
        </View>
        {showModal && (
            <CustomModal 
            title='Transaction'
            description='Success'
        />
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        display: 'flex', 
        flexDirection: 'column',
        padding: 20
    }
});

export default AddItemView;