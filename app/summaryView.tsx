import { View, Text, StyleSheet } from 'react-native'

import CustomToggleButton from '../components/customToggleButton';

function SummaryView () {
    return (
        <View style={styles.container}>
            <CustomToggleButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SummaryView;