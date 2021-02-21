import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style'
import {Product} from '../../Product';
import {dummyProductWithDiscount, dummyProductWithOutDiscount, dummyCategory} from '../../../utils/dummyData';



export function CategoryScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Products</Text>
            <Product product={dummyProductWithDiscount} />
        </SafeAreaView>
    )
}