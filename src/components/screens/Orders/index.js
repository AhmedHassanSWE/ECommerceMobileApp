import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native'
import styles from './style';
import {Order} from '../../Order'
import {dummyOrder, dummyOrders} from '../../../utils/dummyData';

function renderOrder({item}) {
    return <Order order={item} />
}

function renderOrders(orders) {
    return <FlatList data={orders} renderItem={renderOrder} />
}

export function OrdersScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            {renderOrders(dummyOrders)}
        </SafeAreaView>
    )
}