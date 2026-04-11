import { View, Text, TouchableOpacity } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';


interface CustomButtonProp {
    title: string,
    handleAdd?: () => void,
    handleExit?: () => void,
    handleAddTransaction?: () => void,
}

function CustomButton ( { title, handleAdd, handleExit, handleAddTransaction } : CustomButtonProp ) {
    if (title === 'add') {
        return (
            <TouchableOpacity onPress={handleAdd} style={{height: 50, width: 50, borderRadius: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2FA084', position: 'absolute', zIndex: 999, elevation: 5 , right: 20, bottom: 20}}>
                <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
        );
    } else if (title === 'exit') {
        return (
            <TouchableOpacity onPress={handleExit} style={{height: 30, width: 30, position: 'absolute', right: 10}} > 
                <Text style={{fontSize: 22}}>X</Text>
            </TouchableOpacity>
        );
    } else if (title === 'expense') {
        return (
            <TouchableOpacity style={{height: 50, width: 150, backgroundColor: '#fa4d5b', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Expense</Text>
            </TouchableOpacity>
        );
    } else if (title === 'income') {
        return (
            <TouchableOpacity style={{height: 50, width: 150, backgroundColor: '#2FA084', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Income</Text>
            </TouchableOpacity>
        );
    } else if (title === 'addTransaction') {
        return (
            <TouchableOpacity onPress={handleAddTransaction} style={{height: 50, width: '100%', backgroundColor: '#1F6F5F', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Add Transaction</Text>
            </TouchableOpacity>
        );
    }

}

export default CustomButton;