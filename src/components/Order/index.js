import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from '../Card';
import styles from './style';
import {Price} from '../Price'

export function Order(props) {
    const {order} = props;
    const firstCardItem = order.cardItems[0];
    return(
        <Card cardStyle={styles.container}>
            <Image source={{uri: firstCardItem.product.imageUrl}} style={styles.image} />
            <View style={styles.wrapper}>
                <Text style={styles.text}>{firstCardItem.product.title}</Text>
                <Price price={order.cost}/>
                <View style={styles.orderStatusWrapper}>
                    <Text style={styles.orderStatus}>{order.status}</Text>
                </View>
            </View>
        </Card>
    )
}