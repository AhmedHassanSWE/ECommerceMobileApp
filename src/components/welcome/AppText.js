import React from 'react';
import {Text} from 'react-native';

class AppText extends React.Component{
    render() {
        return <Text {...this.props} style={[{color: 'red'}, this.props.style]} />
    }
}

export default AppText;