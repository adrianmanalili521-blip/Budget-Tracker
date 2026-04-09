import { View, Text, StyleSheet } from 'react-native'

import Feather from '@expo/vector-icons/Feather';



interface CardProps {
    title: string
}

function Card ( { title } : CardProps) {
    if (title === 'Income') {
        return (
            <View style={styles.container}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                    <Feather name="trending-up" size={24} color="black" />
                    <Text>Income</Text>
                </View>
                <Text>P25000.00</Text>
            </View>
        );
    } else if (title === 'Expenses') {
        return (
            <View style={styles.container}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                    <Feather name="trending-down" size={24} color="black" />
                    <Text>Expenses</Text>
                </View>
                <Text>P86.49</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#228be6'
    }
})

export default Card;

