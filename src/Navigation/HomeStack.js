import React from 'react';
import {View, Text} from 'react-native';
import {HomeScreen} from '../components/screens/Home/HomeScreen';
import {ProductScreen} from '../components/screens/Product/ProductScreen';
import {CategoryScreen} from '../components/screens/Categories/CategoriesScreen'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export function HomeStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen' 
                component={HomeScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen name='ProductScreen' component={ProductScreen} />
            <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
        </Stack.Navigator>
    );
  }