import {ScaledSheet} from 'react-native-size-matters'

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '20@vs',
        paddingTop: '50@vs',

    },
    textWrapper: {
        alignItems: 'center',
    },
    text: {
        fontSize: '20@s',
        fontWeight: 'bold',
    },
    input: {
        
    },
    inputWrapper :{
        marginTop: '70@vs'
    },
    phoneIcon: {
        fontSize: '24@s'
    },
    iconWrapper: {
        marginEnd: '10@vs'
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: '20@vs'
    }
   
})

export default styles;