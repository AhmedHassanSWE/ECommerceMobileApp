import React from 'react';
import {View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native';
import styles from './style'
import {Category} from '../../Category';
import {Product} from '../../Product';
import {dummyProductWithDiscount, dummyProducts, dummyCategory, dummyCategories} from '../../../utils/dummyData';
import {ProductsList} from '../../ProductsList'

function renderCategory({item}) {
    return <Category category={item} />
}

function renderCategoriesList(categories) {
    return (
        <FlatList data={categories} renderItem={renderCategory} horizontal={true} />
    )
}

export function HomeScreen(props) {
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Categories</Text>
            {renderCategoriesList(dummyCategories)}
            <Text style={styles.headerText}>Products</Text>
            <ProductsList data={dummyProducts} />
        </ScrollView>
        </SafeAreaView>
    )
}