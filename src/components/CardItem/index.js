import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from '../Card/index';
import styles from './style';
import {Price} from '../Price/index'
import AddToCard from '../AddToCard/index';
import {useNavigation} from '@react-navigation/native'

export function CardItem(props) {
    const {cardItem} = props;
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
            <Card cardStyle={styles.container}>
                <Image source={{uri: cardItem.product.imageUrl}} style={styles.image} />
                <View style={styles.wrapper}>
                    <Text style={styles.text}>{cardItem.product.title}</Text>
                    <Price price={cardItem.product.price} discount={cardItem.product.discount} />
                    <AddToCard />
                </View>
            </Card>
        </TouchableOpacity>
    )
}