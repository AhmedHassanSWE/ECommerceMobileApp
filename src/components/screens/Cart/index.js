import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './style'
import {dummyCardItem, dummyCardItems} from '../../../utils/dummyData'
import {CardItem} from '../../CardItem/index'
import AppButton from '../../AppButton'

function renderCartItem({item}) {
    return <CardItem cardItem={item} />
}

function renderCartItems(cartItems) {
    return <FlatList data={cartItems} renderItem={renderCartItem} />
}

export function CartScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            {renderCartItems(dummyCardItems)}
                <View style={styles.wrapper}>
                    <Text style={styles.totalText}>Total = 124 $</Text>
                    <AppButton title='CHECK OUT' buttonStyle={styles.checkoutText} />
                </View>
        </SafeAreaView>
    )
}