import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {IonIcon} from '../components/IonIcon'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TINT_COLOR} from '../utils/colors';
import {HomeStack} from './HomeStack';
import {CartStack} from './CartStack';
import {SearchStack} from './SearchStack';
import {AccountStack} from './AccountStack'

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
    return(
       <Tabs.Navigator screenOptions={({route}) => {
        const iconName = {HomeStack: 'home', CartStack: 'cart', SearchStack: 'search', AccountStack: 'person'}
        const label = {HomeStack: 'Shop', CartStack: 'Cart', SearchStack: 'Search', AccountStack: 'Account'}


        return {
                tabBarIcon: ({focused}) => <IonIcon style={{color: focused? TINT_COLOR: 'black', fontSize: 24}} name={iconName[route.name]} />,
                tabBarLabel: ({focused}) => <Text style={{color: focused? TINT_COLOR: 'black', fontSize: 15, fontWeight: 'bold'}}>{label[route.name]}</Text>
                }
       }}>
           <Tabs.Screen name='HomeStack' component={HomeStack} />
           <Tabs.Screen name='CartStack' component={CartStack} />
           <Tabs.Screen name='SearchStack' component={SearchStack} />
           <Tabs.Screen name='AccountStack' component={AccountStack} />
       </Tabs.Navigator>
    )
}