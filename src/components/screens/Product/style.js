import {ScaledSheet} from 'react-native-size-matters'
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const imageDim = width;

const styles = ScaledSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: imageDim,
        height: imageDim
    },
    text: {
        position: 'absolute',
        color: '#FFF'
    },
    titleWrapper: {
        position: 'absolute',
        flexDirection: 'row'
    },
    backIcon: {
        fontSize: '32@s',
        color: '#FFF',
        paddingStart: '10@s',
        paddingVertical: '10@s'
        
    },
    productTitleWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productTitle: {
       fontSize: '20@s',
       fontWeight: 'bold',
       color: '#FFF',
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    wrapper: {
        flex: 1,
        padding: '5@vs'
    },
    descriptionText: {
        fontSize: '18@s',
        color: 'grey',
        paddingVertical: '5@vs'
    },
    description: {
        fontSize: '12@s'
    }
   
})

export default styles;