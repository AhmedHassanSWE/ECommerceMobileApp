import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import PlatformTouchable from '../PlatformTouchable';
import styles from './styles';
import AppButton from '../AppButton/index'

function AddToCard(props){
    const [quantity, setQuantity] = React.useState(0);

    const incrementHandler = () => {
        setQuantity(quantity + 1)
    };

    const descrementHandler = () => {
        setQuantity(quantity - 1)
    };   

    const renderInatialIncreaseButton = () => {
        return(
            <AppButton onPress={incrementHandler} title='Add To Card' />
        )
    }

    const renderIncreaseDescreaseButton = () => {
        return(
            <View style={[styles.increaseDecreaseContainer, styles.button]}>
                <Text style={styles.plusMinus} onPress={descrementHandler}>-</Text>
                <Text>{quantity}</Text>
                <Text style={styles.plusMinus} onPress={incrementHandler}>+</Text>
            </View>
        )
    }

        return <View style={styles.wrapper}>{
                    quantity === 0? renderInatialIncreaseButton(): 
                    renderIncreaseDescreaseButton()
                }</View>
}

export default AddToCard;