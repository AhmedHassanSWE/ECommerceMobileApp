import React from 'react';
import { View, Text, Button } from 'react-native';
import WelcomeScreenMainButton from './WelcomeScreenMainButton';
import WelcomeScreenMainText from './WelcomeScreenMainText'

class WelcomeScreenMainPage extends React.Component {
  render() {
    return(
        <View>
            <WelcomeScreenMainText></WelcomeScreenMainText>
            <WelcomeScreenMainButton></WelcomeScreenMainButton>
        </View>
    )
  }
}


export default WelcomeScreenMainPage;
