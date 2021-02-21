import React from 'react';
import {View} from 'react-native';
import styles from './style';

export function Card(props) {
    const {style, cardStyle, ...rest} = props;

    return <View {...rest} style={[styles.container, cardStyle]} />
}