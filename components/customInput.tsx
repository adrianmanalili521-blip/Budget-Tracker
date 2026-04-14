import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Fontisto from '@expo/vector-icons/Fontisto';

interface CustomInputProp {
    title: string,
    date?: string,
    setDate?: (text: string) => void
    amount?: string,
    setAmount?: (number: string) => void,
    description?: string,
    setDescription?: (desc: string) => void
}

function CustomInput ( { title, date, setDate, amount, setAmount, description, setDescription } : CustomInputProp) {
    if (title === 'amount') {
        return (
            <TextInput keyboardType='decimal-pad' placeholder='P 0.00' value={amount} onChangeText={setAmount} style={styles.container} />
        );
    } else if (title === 'date') {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="MM/DD/YYYY"
                    value={date}                // now date is a string
                    onChangeText={setDate} // updates parent state
                    style={{ flex: 1, height: '100%' }}
                />
                <Fontisto name="date" size={24} color="black" style={{position: 'absolute', right: 20}}/>
            </View>
        );
    } else if (title === 'description') {
        return (
            <TextInput placeholder='Enter description' value={description} onChangeText={setDescription} style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50, 
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ddddec',
        paddingLeft: 15,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})
export default CustomInput;