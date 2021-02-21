import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style'
import AppButton from '../../AppButton';
import {CURRENCY} from '../../../utils/Consts'
function renderAdressSection() {
    return(
        <View  style={styles.adressSection}>
            <Text style={styles.shipToText}>SHIP TO</Text>
            <Text>{`Some Adress
Bla Bla Bla`}</Text>
            <View style={styles.updatedWrapper}>
                <Text style={styles.updateText}>UPDATE</Text>
            </View>
        </View>
    );
}

function renderOrderCostRow(key, value) {
    return(
        <View style={styles.orderCostSection}>
            <Text style={styles.keyText}>{key}</Text>
            <Text style={styles.valueText}>{value}</Text>
        </View>
    )
}
function renderOrderCostSection() {
    return(
        <View>
            {renderOrderCostRow('Subtotal', CURRENCY + '150')}
            {renderOrderCostRow('Shipping', 'Free')}
            <View style={styles.rowLine} />
            {renderOrderCostRow('Total' , CURRENCY + '150')}
        </View>
    );
}
function renderButtonSection() {
    return(
        <View style={styles.buttonWrapper}>
            <AppButton  title='BUY' style={styles.button} />
        </View>
    );
}


export function CheckoutScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            {renderAdressSection()}
            {renderOrderCostSection()}
            {renderButtonSection()}
        </SafeAreaView>
    )
}