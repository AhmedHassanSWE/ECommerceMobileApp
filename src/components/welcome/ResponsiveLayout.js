import React from 'react';
import {View, Text, TextInput, Dimensions, StyleSheet} from 'react-native';
import {rem} from '../../utils/Consts';

const {width, height} = Dimensions.get('window');


export function Input(props) {
    return (
        <TextInput style={{
            fontSize: 18 * rem,
            height: 40 * rem,
            borderWidth: 2,
            borderColor: '#666',
            borderRadius: 10,
            marginBottom: 20,
            padding: 10,
        }} placeholder={props.placeholder} />
    )
}

export function SignUpScreen(props) {
    console.log('Width = ' + width)
    const [realTimeWidth, setWidth] = React.useState(width);

    React.useEffect(() => {
        Dimensions.addEventListener('change', ({window}) => {
            setWidth(window.width);
        })
    return () => {
        Dimensions.removeEventListener('change');
    }
      
    }, [])


    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 30
        }}>
            <Input placeholder='Email' />
            <View style={realTimeWidth > 400? {flexDirection: 'row'}: null}>
                <View style={realTimeWidth > 400? {flex: 1, marginEnd: 10}: null}>
                    <Input placeholder='Password' />
                </View>

                <View style={realTimeWidth > 400? {flex: 1, marginStart: 10}: null}>
                    <Input placeholder='Confirm' />
                </View>

            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{
                    fontSize: 24 * rem,
                    fontWeight: 'bold',
                }}>Sign Up</Text>
            </View>
        </View>
    )
}

//width 392
