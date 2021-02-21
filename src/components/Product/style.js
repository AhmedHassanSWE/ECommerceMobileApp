import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('window');

const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 2;

const styles = ScaledSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    image: {
        height: imageHeight,
        width: imageWidth,
    },
    title: {
        fontSize: '20@s',
    }
})

export default styles;