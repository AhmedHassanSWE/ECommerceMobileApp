import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import {USER_KEY, TOKEN_KEY} from '../../utils/Consts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = token => ({
    type: ActionTypes.SET_TOKEN,
    payload: {token}
})

export const setUser = user => ({
    type: ActionTypes.SET_USER,
    payload: {user}
})

const signInStart = () => ({type: ActionTypes.SIGNIN_START})

const signInSuccess = () => ({type: ActionTypes.SIGNIN_SUCCESS})

const signInFaliure = () => ({type: ActionTypes.SIGNIN_FALIURE})

const confirmCodeStart = () => ({type: ActionTypes.CONFIRM_START})

const confirmCodeSuccess = () => ({type: ActionTypes.CONFIRM_SUCCESS})

const confirmCodeFaliure = () => ({type: ActionTypes.CONFIRM_FALIURE})

export const clearReduxData = () => ({type: ActionTypes.CLEAR_REDUX_DATA})

export const signIn = phone => {
    
    return (dispatch, getState) => {
        dispatch(signInStart())
            axios.post('/verify', {phone})
            .then(res => {
                dispatch(signInSuccess())
              //  navigation.navigate('ConfirmationCodeScreen', {phone})
                console.log(res.data)
            })
            .catch(err => {
                dispatch(signInFaliure())
                console.log('Error: ', err)
            })
    }
}

export const confirmCode = (phone, code) => {
    return (dispatch, getState) => {
        dispatch(confirmCodeStart())
        axios
        .post('/verify/validate', {phone, code})
        .then(res => {
            dispatch(confirmCodeSuccess())
            console.log(res.data);
            const {token, userData} = res.data;
            axios.defaults.headers.Authorization = 'Bearer' + token;
            dispatch(setToken(token))
            dispatch(setUser(userData))
            AsyncStorage.setItem(TOKEN_KEY, token);
            AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));

        })
        .catch(err => {
            dispatch(confirmCodeFaliure())
            console.log('error', err)
        })
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        axios.defaults.headers.Authorization = null;
        AsyncStorage.clear();
        dispatch(clearReduxData());
    }
}

export const getUserData = () => {
    return (dispatch, getState) => {
        axios.get('/user/get-data')
        .then(res => {
            dispatch(res.data.userData)
        })
        .catch(err => {r.log('error', err)})
    }
}

export const updateUserName = name => {
    return (dispatch, getState) => {
        axios.put('/user/change-name', {name})
        .then(res => {
            dispatch(getUserData)
        })
    }
}