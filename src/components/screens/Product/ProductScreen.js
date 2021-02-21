import React from 'react';
import {View, Text, Image, Platform, SafeAreaView} from 'react-native';
import styles from './style';
import {dummyProductWithDiscount, dummyProductWithOutDiscount, dummyCategory} from '../../../utils/dummyData';
import Icon from 'react-native-vector-icons/Ionicons'
import {Price} from '../../Price';
import AddToCard from '../../../components/AddToCard';
import AppButton from '../../../components/AppButton/index';
import {IonIcon} from '../../../components/IonIcon/index'
function getProduct(productId) {
    return dummyProductWithDiscount
}

export function ProductScreen(props) {
    const {productId} = props;
    const product = getProduct(productId);

    return(
        <SafeAreaView style={styles.container}>
            <Image source={{uri: product.imageUrl}} style={styles.image} />
            <View style={styles.titleWrapper}>
                <IonIcon style={styles.backIcon} name='arrow-back' />
                <View style={styles.productTitleWrapper}>
                    <Text style={styles.productTitle}>{product.title}</Text>
                </View>
            </View>
            <View style={styles.wrapper}>
                <Price price={product.price} discount={product.discount} />
                <Text style={styles.descriptionText}>Descriptisson</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.buttonWrapper}>
                    <AddToCard />
                </View>
            </View>
        </SafeAreaView>
    )
}