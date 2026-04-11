import { View, Text, StyleSheet} from 'react-native'

interface CustomModalProps {
    title: string,
    description: string,
}

function CustomModal ( { title, description} : CustomModalProps) {
    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    container: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
    }
});

export default CustomModal;