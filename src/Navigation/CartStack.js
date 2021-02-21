import React from 'react';
import {View, Text} from 'react-native';
import {CartScreen} from '../components/screens/Cart/index';
import {ProductScreen} from '../components/screens/Product/ProductScreen';

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export function CartStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='CartScreen' 
                component={CartScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen name='ProductScreen' component={ProductScreen} />
        </Stack.Navigator>
    );
  }