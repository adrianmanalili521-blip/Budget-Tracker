import { View, Text, StyleSheet, FlatList } from 'react-native'

import CustomToggleButton from '../components/customToggleButton'
import Card from '../components/card'

import Feather from '@expo/vector-icons/Feather';

import { useState } from 'react'

function SummaryView () {
    const [selected, setSelected] = useState('week');

    return (
        <View style={styles.container}>
            <CustomToggleButton 
                selected={selected}
                setSelected={setSelected}
            />
            <Card 
                title={selected === 'week' ? 'summaryWeek' : 'summaryMonth'}
            />
            <View style={{width: '100%', marginLeft: 30, marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10}}>
                <Feather name="trending-down" size={24} color="black" />
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Spending by Category</Text>
            </View>
            <FlatList
                data={['food', 'transport', 'entertainment', 'bills']}
                renderItem={({item}) => (
                    <Card title={item}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    }
})

export default SummaryView;