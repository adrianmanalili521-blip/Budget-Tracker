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
    } else if (title === 'summaryWeek') {
        return (
            <View style={styles.summary}>
                <Text>Last 7 days</Text> 
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Text style={{fontSize: 32, fontWeight: 'bold'}} >P86.49</Text>
                    <Text> total spent</Text>
                </View>
                
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Text>Income P25000.00</Text>
                    <Text>Saved P2413.51</Text>
                </View>
            </View>
        );
    } else if (title === 'summaryMonth') {
        return (
            <View style={styles.summary}>
                <Text>Last 30 days</Text> 
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Text style={{fontSize: 32, fontWeight: 'bold'}} >P86.49</Text>
                    <Text> total spent</Text>
                </View>
                
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Text>Income P25000.00</Text>
                    <Text>Saved P2413.51</Text>
                </View>
            </View>
        );
    } else if (title === 'food') {
        return (
            <View style={styles.foodCard}>
                <Text>food</Text>
            </View>
        );
    } else if (title === 'transport') {
        return (
            <View style={styles.transportCard}>
                <Text>transport</Text>
            </View>
        );
    } else if (title === 'entertainment') {
        return (
            <View style={styles.entertainmentCard}>
                <Text>entertainment</Text>
            </View>
        )
    } else if (title === 'bills') {
        return (
            <View style={styles.billsCard}>
                <Text>bills</Text>
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
        backgroundColor: '#6FCF97'
    },
    summary: {
        padding: 30,
        gap: 5,
        height: 200,
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    foodCard: {
        borderBlockColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        margin: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    transportCard: {
        borderBlockColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        margin: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    entertainmentCard: {
        borderBlockColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        margin: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    billsCard: {
        borderBlockColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        margin: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
})

export default Card;

