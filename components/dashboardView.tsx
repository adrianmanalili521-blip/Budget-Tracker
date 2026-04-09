import { StyleSheet, Text, View } from 'react-native';

import Card from '../components/card'

function DashboardView () {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>Total Balance</Text>
                <Text style={{fontSize: 32}}>P2413.51</Text>
                    <View style={styles.carContainer}>
                    <Card 
                        title="Income"
                    />
                    <Card 
                        title="Expenses"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#EEEEEE'
    },
    main: {
        padding: 20,
        backgroundColor: '#2FA084',
        height: 200,
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5
    },
    carContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
});

export default DashboardView;