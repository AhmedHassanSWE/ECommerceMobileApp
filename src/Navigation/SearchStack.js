import React from 'react';
import {View, Text} from 'react-native';
import {SearchScreen} from '../components/screens/Search/index';
import {ProductScreen} from '../components/screens/Product/ProductScreen';

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export function SearchStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SearchScreen' 
                component={SearchScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen name='ProductScreen' component={ProductScreen} />
        </Stack.Navigator>
    );
  }