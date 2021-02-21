import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {IonIcon} from '../IonIcon';
import {TINT_COLOR} from '../../utils/colors'
export function Input(props) {
    const {underlined,
             underlineColor, 
             underlineHeight, 
             bordered, 
             borderWidth, 
             borderColor, 
             borderRadius, 
             placeholderPosition, 
             renderIconLeft, 
             renderIconRight, 
             stacked, 
             placeholder, 
             style, 
             wrapperStyle, 
             iconWrapperStyle, 
             showValidationFeedback, 
             isValid, 
             touched, 
             ...rest} = props;

    return (
        <View style={[bordered && {
                                    borderWidth: borderWidth || 1, 
                                    borderColor: borderColor || '#BBB', 
                                    borderRadius: borderRadius || 5, 
                                    padding: 10
                                }, wrapperStyle]}>
            {stacked && <Text style={{color:'#555'}}>{placeholder}</Text>}
            <View style={{flexDirection: 'row'}}>
                {renderIconLeft && <View style={[styles.iconWrapper, iconWrapperStyle]}>{renderIconLeft()}</View>}
                <TextInput 
                    {...rest} 
                    placeholder={stacked? '': placeholder}
                    style={[{padding: 0, textAlign: placeholderPosition || 'left', flex: 1}, style]} />
                {renderIconRight &&
                    <View style={[styles.iconWrapper, iconWrapperStyle]}>
                        {renderIconRight()}
                    </View>}
                {showValidationFeedback && touched && <IonIcon 
                                                style={{fontSize: 24, color: isValid? TINT_COLOR: 'red'}} 
                                                name={isValid? 'checkmark': 'close'} 
                                            />}
            </View>
                {(underlined || stacked) && <View style={{height: underlineHeight || 1, backgroundColor: underlineColor || '#BBBBBB80'}} />}
        </View> 
    )
}


const styles = StyleSheet.create({
    iconWrapper: {
        justifyContent: 'center',
        justifyContent: 'center',
    }
})