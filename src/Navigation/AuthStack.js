import React from 'react';
import {View, Text} from 'react-native';

import {SignInScreen} from '../components/screens/SignInScreen'
import ConfirmationCodeScreen from '../components/screens/ConfirmationCode'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export function AuthStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SignInScreen' 
                component={SignInScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen name='ConfirmationCodeScreen' component={ConfirmationCodeScreen} />
        </Stack.Navigator>
    );
  }