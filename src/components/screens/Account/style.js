import {ScaledSheet} from 'react-native-size-matters';
import { TINT_COLOR } from '../../../utils/colors';

const styles = ScaledSheet.create({
    outerContainer: {
        flex: 1
    },
    container:{ 
        flex: 1,
        padding: '10@s'
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '20@s',
    },
    personIcon: {
        fontSize: '64@s'
    },
    verticalLine: {
        width: 1,
        backgroundColor: '#555',
        marginHorizontal: '30@s'
    },
    infoTextWrapper: {
        justifyContent: 'center'
    },
    infoText: {
        fontSize: '20@s'
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginHorizontal: '20@s'
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#CFCACA',
        margin: '5@s',
    },
    icon: {
        fontSize: '26@s',
        marginEnd: '10@s',
        color: '#000'
    },
    title: {
        fontSize: '18@s',
        color: '#000'
    },
    hitToEnterNameButton: {
        color: TINT_COLOR,
        textDecorationLine: 'underline'
    }
})

export default styles;