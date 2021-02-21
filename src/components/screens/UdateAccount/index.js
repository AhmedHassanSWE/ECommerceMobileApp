import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Input} from '../../Input';
import AppButton from '../../AppButton';
import styles from './style';
import {updateUserName} from '../../../redux/actions/authActionCreators';
import {useDispatch, useSelector} from 'react-redux'

export function UpdateAccountScreen(props) {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    const {navigation} = props;
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Input 
                    wrapperStyle={styles.input}
                    stacked
                    placeholder='Name'
                    onChangeText={setInput}
                />
             </View>
            <AppButton title='SAVE' onPress={() => {
                dispatch(updateUserName(input));
                navigation.navigate('AccountScreen');
                }} />
        </SafeAreaView>
    )
}