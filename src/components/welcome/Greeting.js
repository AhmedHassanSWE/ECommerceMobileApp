import React from 'react';
import {Text} from 'react-native';

class Greeting extends React.Component {
   render() {
        const {name, greetingSign} = this.props;

        return(
           <Text>{greetingSign ? greetingSign : 'Hello'}, {name ? name : 'Man'}</Text>
        )
   }
}

export default Greeting;