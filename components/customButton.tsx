import { View, Text, TouchableOpacity } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';

function CustomButton () {
    return (
        <TouchableOpacity style={{height: 50, width: 50, borderRadius: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2FA084', position: 'absolute', zIndex: 999, elevation: 5 , right: 20, bottom: 20}}>
            <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
    );

}

export default CustomButton;