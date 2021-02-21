import {ScaledSheet} from 'react-native-size-matters';
import {Platform} from 'react-native';
import {TINT_COLOR} from '../../utils/colors'

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row'
    },
    oldPrice: {
        color: '#BBB',
        paddingHorizontal: '5@s',
        textDecorationLine: 'line-through'
    },
    newPrice: {
        fontSize: '16@s',
        color: TINT_COLOR
    }
})

export default styles;