import {ScaledSheet} from 'react-native-size-matters'

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: '10@s',
        justifyContent: 'space-between'
    },
    adressSection: {
        borderWidth: 1,
        borderRadius: 10,
        padding: '10@s',
        margin: '10@s'
    },
    shipToText: {
        fontSize: '20@s',
        fontWeight: 'bold',
        marginBottom: '5@s'
    },
    updatedWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    updateText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: '16@s',
    },
    orderCostSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10@s'


    },
    horizontalRow: {
        height: 1,
        backgroundColor: '#000'
    },
    keyText: {
        fontSize: '15@s',
        color: '#444'
    },
    valueText: {
        fontSize: '15@s',
        color: '#111'
    },
    rowLine: {
        height: 1,
        backgroundColor: '#bbb'
    },
    buttonWrapper: {
        
    },
    
})

export default styles;