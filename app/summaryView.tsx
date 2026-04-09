import { View, Text, StyleSheet } from 'react-native'

import CustomToggleButton from '../components/customToggleButton'
import Card from '../components/card'

import { useState } from 'react'

function SummaryView () {
    const [selected, setSelected] = useState('week');

    return (
        <View style={styles.container}>
            <CustomToggleButton 
                selected='week'
                setSelected={setSelected}
            />
            <Card 
                title={selected === 'week' ? 'summaryWeek' : 'summaryMonth'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})

export default SummaryView;