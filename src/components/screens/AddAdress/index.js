import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Input} from '../../Input';
import AppButton from '../../AppButton';
import styles from './style'

export function AddAdressScreen(props) {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Input 
                    wrapperStyle={styles.input}
                    stacked
                    placeholder='Name'
                />
                <Input 
                    wrapperStyle={styles.input}
                    stacked
                    placeholder='City'
                />
                 <Input 
                    wrapperStyle={styles.input}
                    stacked
                    placeholder='Area'
                />
                 <Input 
                    wrapperStyle={styles.input}
                    stacked
                    placeholder='Street'
                />
                 <Input 
                    wrapperStyle={styles.input}
                    stacked
                    placeholder='Building'
                />
             </View>
            <AppButton title='ADD' />
        </SafeAreaView>
    )
}