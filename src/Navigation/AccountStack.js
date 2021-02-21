import React from 'react';
import {View, Text} from 'react-native';
import AccountScreen from '../components/screens/Account/index';
import {AddAdressScreen} from '../components/screens/AddAdress/index';
import {UpdateAccountScreen} from '../components/screens/UdateAccount/index';
import {OrdersScreen} from '../components/screens/Orders/index'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export function AccountStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='AccountScreen' 
                component={AccountScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen name='AddAdressScreen' component={AddAdressScreen} />
            <Stack.Screen name='UpdateAccountScreen' component={UpdateAccountScreen} />
            <Stack.Screen name='OrdersScreen' component={OrdersScreen} />
        </Stack.Navigator>
    );
  }