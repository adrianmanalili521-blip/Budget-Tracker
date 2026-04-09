import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

function CustomToggleButton () {
    const [selected, setSelected] = useState('week');

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, selected === 'week' && styles.active]}
                onPress={() => setSelected('week')}
            >
                <Text style={selected === 'week' && styles.activeText}>This Week</Text>
            </Pressable>

            {/* Separator */}
            <View style={styles.separator} />

            <Pressable
                style={[styles.button, selected === 'month' && styles.active]}
                onPress={() => setSelected('month')}
            >
                <Text style={selected === 'month' && styles.activeText}>This Month</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        overflow: 'hidden',
        width: 200,
        height: 40,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: '#2FA084',
    },
    activeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    separator: {
        width: 1,
        backgroundColor: 'black',
    },
});

export default CustomToggleButton;