import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style';
import {Input} from '../../Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../AppButton/index';
import {validate} from '../../../utils/validate';
import {useInput} from '../../../utils/useInput';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../../redux/actions';
import {useUpdateEffect} from '../../../utils/useUpdateEffect';
import {showError} from '../../../utils/HelperFunctions'


export function SignInScreen(props) {
    const renderPhoneIcon = () => <Icon name='call' style={styles.phoneIcon} />
    const {navigation} = props;
    const [input, changeInput] = useInput('', [{key: 'isPhone'}]);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isSigningIn);
    const success = useSelector(state => state.auth.signInSuccess);
    const faliure = useSelector(state => state.auth.signInFaliure);

    useUpdateEffect(() => {
        navigation.navigate('ConfirmationCodeScreen', {phone: input.value})
    }, [success])

    useUpdateEffect(() => {
        showError('Unexpected error, Please try again')
    }, [faliure])

    

    

    const doneHandler = () => {
        if (input.isValid) {
            dispatch(signIn(input.value))
        }   
    };
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>Enter Your Phone Number</Text>
            </View>
            <Input
                style={styles.input}
                underlined
                renderIconLeft={renderPhoneIcon}
                placeholder="Phone"
                wrapperStyle={styles.inputWrapper}
                iconWrapperStyle={styles.iconWrapper}
                onChangeText={changeInput}
                keyboardType='numeric'
                editable={!isLoading}
                
            />
            <View style={styles.buttonWrapper}>
                <AppButton title='DONE' onPress={doneHandler} disabled={!input.isValid} isLoading={isLoading} />
            </View>
        </SafeAreaView>
    )
}