import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'

import CustomToggleButton from '../components/customToggleButton'
import Card from '../components/card'
import CustomHeader from '../components/customeHeader'
import DashboardView from '../components/dashboardView'

import Feather from '@expo/vector-icons/Feather';

import { useState } from 'react'

function SummaryView () {
    const [selected, setSelected] = useState('week');

    return (
        <ScrollView>
            <View style={{flex: 1}}>
                <CustomHeader />
                <DashboardView />
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
                    <TouchableOpacity>
                        <Card title='food'/>
                    </TouchableOpacity>
                    <TouchableOpacity><Card title='transport'/></TouchableOpacity>
                    <TouchableOpacity><Card title='entertainment'/></TouchableOpacity>
                    <TouchableOpacity><Card title='bills'/></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        gap: 10,
    }
})

export default SummaryView;