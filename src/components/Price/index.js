import React from 'react';
import {View, Text} from 'react-native';
import styles from './style'
import {getActualPrice} from '../../utils/HelperFunctions';
import {CURRENCY} from '../../utils/Consts'

export function Price(props) {
    const {price, discount} = props;

    return(
        <View style={styles.container}>
            <Text style={styles.newPrice}>{CURRENCY} {getActualPrice(price, discount)}</Text>
            { discount && <Text style={styles.oldPrice}>{CURRENCY} {price}</Text>}
        </View>
    )
} 