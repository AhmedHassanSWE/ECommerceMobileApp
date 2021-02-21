import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style'
import {Input} from '../../Input/index';
import Icon from 'react-native-vector-icons/MaterialIcons'

function renderSearchIcon() {
    return <Icon name='search' style={styles.icon} />
}

export function SearchScreen(props) {
    return(
        <SafeAreaView style={styles.outerContainer}>
            <View style={styles.container}>
                <Input 
                    placeholder='Type Here...'
                    bordered
                    renderIconRight={renderSearchIcon}
                />
            </View>
        </SafeAreaView>
    )
}