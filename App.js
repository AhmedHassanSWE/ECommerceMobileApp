import React from 'react';
import {AppContainer} from './src/Navigation/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, USER_KEY} from './src/utils/Consts';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {setToken, setUser, getUserData} from './src/redux/actions';

function App(props) {
  
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token)
 
  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      dispatch(setToken(val));
      axios.defaults.headers.Authorization = 'Bearer' + val;
      AsyncStorage.getItem(USER_KEY).then(user => {
        dispatch(setUser(JSON.parse(user)));
        dispatch(getUserData());
      })
    })
  }, [token])


  return token !== '' && <AppContainer isAuthenticated={!!token} />
  
}

export default App;
