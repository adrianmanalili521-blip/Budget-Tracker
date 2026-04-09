import { View, Text, StyleSheet } from 'react-native'

import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
            <View style={styles.spendingCard}>
                <AntDesign name="shopping-cart" size={24} color="black" style={{position: 'absolute'}}/>
                <View style={{marginLeft: 35}}>
                    <Text style={styles.title}>Food</Text>
                    <Text>12.8% of total</Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold', position: 'absolute', right: 10}}>P45.50</Text>
                <View style={{height: 5, width: '12%', backgroundColor: '#2FA084', marginTop: 10}}></View>
            </View>
        );
    } else if (title === 'transport') {
        return (
            <View style={styles.spendingCard}>
                <AntDesign name="car" size={24} color="black" style={{position: 'absolute'}}/>
                <View style={{marginLeft: 35}}>
                    <Text style={styles.title}>Transport</Text>
                    <Text>52.8% of total</Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold', position: 'absolute', right: 10}}>P206.00</Text>
                <View style={{height: 5, width: '52%', backgroundColor: '#2FA084', marginTop: 10}}></View>
            </View>
        );
    } else if (title === 'entertainment') {
        return (
            <View style={styles.spendingCard}>
                <Ionicons name="game-controller" size={24} color="black" style={{position: 'absolute'}}/>
                <View style={{marginLeft: 35}}>
                    <Text style={styles.title}>Entertainment</Text>
                    <Text>25.8% of total</Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold', position: 'absolute', right: 10}}>P104.50</Text>
                <View style={{height: 5, width: '25%', backgroundColor: '#2FA084', marginTop: 10}}></View>
            </View>
        )
    } else if (title === 'bills') {
        return (
            <View style={styles.spendingCard}>
                <FontAwesome5 name="money-bill" size={24} color="black" style={{position: 'absolute'}}/>
                <View style={{marginLeft: 35}}>
                    <Text style={styles.title}>Bills</Text>
                    <Text>92.8% of total</Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold', position: 'absolute', right: 10}}>P500.50</Text>
                <View style={{height: 5, width: '92%', backgroundColor: '#2FA084', marginTop: 10}}></View>
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
    spendingCard: {
        borderBlockColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: 350,
        margin: 5,
        height: 80,
        padding: 10,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontWeight: 'bold'
    }
})

export default Card;

