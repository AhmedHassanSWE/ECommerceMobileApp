import React from 'react';
import {View, Text, Button} from 'react-native';

class Counter extends React.Component {
    state = {
        counter: 0,
    }

    incrementHandler = () => {
        this.setState(prevState => ({counter: prevState.counter +1}))
    };

    descrementHandler = () => {
        this.setState(prevState => ({counter: prevState.counter -1,}))
    };    

  render() {
    return(
      <View style={{alignItems: 'center'}}>
          <Button title='Increment' onPress={this.incrementHandler} />
          <Text>{this.state.counter}</Text>
          <Button title='Decrement' onPress={this.descrementHandler} />
      </View>
    )
  }
}


export default Counter;
