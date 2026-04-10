import { View, Text, StyleSheet} from 'react-native'

import CustomButton from './customButton';
import CustomInput from './customInput';

import { useState } from 'react'

import { Picker } from '@react-native-picker/picker'

interface AddItemViewProp {
    handleExit: () => void;
    handleClick: () => void;
}

function AddItemView ( { handleExit, handleClick } : AddItemViewProp) {
    const [date , setDate] = useState('');

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Add Transaction</Text>
            <CustomButton 
                title="exit"
                handleClick={handleClick}
                handleExit={handleExit}
            />
            <Text style={{marginTop: 20}}>Type</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 5}}>
                <CustomButton 
                    title='expense'
                    handleClick={handleClick}
                    handleExit={handleExit}
                />
                <CustomButton 
                    title='income'
                    handleClick={handleClick}
                    handleExit={handleExit}
                />
            </View>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Category</Text>
            <Picker style={{marginTop: 5}}>
                <Picker.Item label='Food' value='Food'/>
                <Picker.Item label='Transport' value='Transport'/>
                <Picker.Item label='Entertainment' value='Entertainment'/>
                <Picker.Item label='Bills' value='Bills'/>
            </Picker>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Amount</Text>
            <CustomInput title='amount' value={date} setValue={setDate}/>
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Date</Text>
            <CustomInput title='date' value={date} setValue={setDate}/>

            <Text style={{fontWeight: 'bold', marginTop: 10}}>Description</Text>
            <CustomInput title='description' value={date} setValue={setDate}/>
            <CustomButton title='addTransaction' handleClick={handleClick} handleExit={handleExit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        display: 'flex', 
        flexDirection: 'column',
        padding: 20
    }
});

export default AddItemView;