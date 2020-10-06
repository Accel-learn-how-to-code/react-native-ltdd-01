import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    let name = this.props.name;
    let helloString = 'Say hello from ' + name + '!';
    return <Text>{helloString}</Text>;
  }
}

export default class MutipleGreeting extends Component {
  render() {
    return (
      <View>
        <Greeting name="long" />
      </View>
    );
  }
}
