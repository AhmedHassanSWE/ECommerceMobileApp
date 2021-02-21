import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './style'
import {IonIcon} from '../../IonIcon'
import authStore from '../../../TryFlux/AuthStore';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/actions'

function RenderInfoSection(user, navigation) {
    return (
        <View style={styles.infoSection}>
            <IonIcon name='person' style={styles.personIcon} />
            <View style={styles.verticalLine} />
            <View style={styles.infoTextWrapper}>
                <Text 
                onPress={() => {
                    !user.name && navigation.navigate('UpdateAccountScreen')
                }}
                style={[styles.infoText, !user.name && styles.hitToEnterNameButton]}
                >{user.name || 'HIT TO ENTER NAME'}
                </Text>
                <Text style={styles.infoText}>{user.phone}</Text>
            </View>
        </View>
    )
}

function renderButton(iconName, title, onPress) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.renderButton}>
            <View style={styles.buttonWrapper}>
                <IonIcon name={iconName} style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.horizontalLine} />
        </TouchableOpacity>
    )
}

function RenderButtonsSection(navigation, onDispatchLogOut) {
    return (
        <View>
            {renderButton('person', 'Profile', () => navigation.navigate('UpdateAccountScreen'))}
            {renderButton('navigate', 'Shipping Adress',  () => navigation.navigate('AddAdressScreen'))}
            {renderButton('cart', 'Previous Orders',  () => navigation.navigate('OrdersScreen'))}
            {renderButton('log-out', 'Log Out', onDispatchLogOut)}
        </View>
    )
}

export function AccountScreen(props) {
    const {navigation, user} = props;
    const dispatch = useDispatch();
    const onDispatchLogOut = () => dispatch(logout())

    return (
        <SafeAreaView style={styles.outerContainer}>
            <View style={styles.container}>
                {RenderInfoSection(user, navigation)}
                {RenderButtonsSection(navigation, onDispatchLogOut)}
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps)(AccountScreen)
