import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('window');

const imageWidth = width / 3;
const imageHeight = imageWidth * 2;

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        padding: '10@s',
        margin: '10@s',
        backgroundColor: '#FFF'
    },
    text: {
        fontSize: '15@s'
    },
    image: {
        height: '100@s',
        width: '100@s',
        marginEnd: '10@s'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between'
    },
    orderStatusWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    orderStatus: {
        color: 'blue',
        fontSize: '14@s',
        fontWeight: 'bold'
    },
})

export default styles;