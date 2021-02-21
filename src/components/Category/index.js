import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './style';
import {Card} from '../Card';

export function Category(props) {

    const {category} = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CategoryScreen')}>
            <Card>
                <Image source={{uri: category.imageUrl}} style={styles.image} />
            </Card>
            <Text style={styles.title}>{category.title}</Text>
        </TouchableOpacity>
    )
}