import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import styles from './style';
import {Card} from '../Card';
import {Price} from '../Price';
import {useNavigation} from '@react-navigation/native'

export function Product(props) {

    const {product} = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductScreen', {productId: 1})}>
            <Card>
                <Image source={{uri: product.imageUrl}} style={styles.image} />
            </Card>
            <Price price={product.price} discount={product.discount} />
            <Text style={styles.title}>{product.title}</Text>
        </TouchableOpacity>
    )
}