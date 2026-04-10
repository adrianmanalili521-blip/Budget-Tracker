import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Fontisto from '@expo/vector-icons/Fontisto';

interface CustomInputProp {
    title: string,
    value: string;
    setValue?: (text: string) => void; // optional for amount
}

function CustomInput ( { title, value, setValue} : CustomInputProp) {
    if (title === 'amount') {
        return (
            <TextInput placeholder='P 0.00' style={styles.container} />
        );
    } else if (title === 'date') {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="MM/DD/YYYY"
                    value={value}                // now date is a string
                    onChangeText={setValue} // updates parent state
                    style={{ flex: 1, height: '100%' }}
                />
                <Fontisto name="date" size={24} color="black" style={{position: 'absolute', right: 20}}/>
            </View>
        );
    } else if (title === 'description') {
        return (
            <TextInput placeholder='Enter description' style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50, 
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ddddec',
        padding: 20,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})
export default CustomInput;