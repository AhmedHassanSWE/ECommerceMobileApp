import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style';
import {Input} from '../../Input';
import AppButton from '../../AppButton/index';
import {useInput} from '../../../utils/useInput';
import {useSelector, useDispatch} from 'react-redux';
import {confirmCode} from '../../../redux/actions';
import {useUpdateEffect} from '../../../utils/useUpdateEffect';
import {showError} from '../../../utils/HelperFunctions';
import {errorCodeMessageMapper} from '../../../utils/errorCodes'

function ConfirmationCodeScreen(props) {
    const dispatch = useDispatch();
    const {phone} = props.route.params;
    const [input, changeInput] = useInput('', [{key: 'confirmationCode'}]);
    const isLoading = useSelector(state => state.auth.isConfirmingCode);
    const faliure = useSelector(state => state.auth.confirmCodeFaliure);

    useUpdateEffect(() => {
        showError('You entered wrong code')
    }, [faliure])

    const doneHandler = () => {
        if (input.isValid) {
           dispatch(confirmCode(phone, input.value))
        } 
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>Enter Confirmation Code</Text>
            </View>
            <Input
                style={styles.input}
                bordered
                placeholder='__ __ __ __'
                placeholderPosition='center'
                wrapperStyle={styles.inputWrapper}
                onChangeText={changeInput}
                onSubmitEditing={doneHandler}
                keyboardType='numeric'
            />
            <View style={styles.buttonWrapper}>
                <AppButton title='DONE' onPress={doneHandler} disabled={!input.isValid} isLoading={isLoading} />
            </View>
        </SafeAreaView>
    )
}


export default ConfirmationCodeScreen