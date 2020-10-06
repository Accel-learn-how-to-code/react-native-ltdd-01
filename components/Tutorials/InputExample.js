import React from 'react';
import {Component} from 'react';
import {Text, View, TextInput, Keyboard, StyleSheet} from 'react-native';

export default class InputExample extends Component {
  constructor() {
    super();
    this.state = {
      typedText: '',
      password: '',
      mutliText: '',
      message: '',
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState({message: 'Keyboard is showing'});
      },
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState({message: 'Keyboard is off'});
      },
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type your name here"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            this.setState({typedText: text});
          }}
        />
        <TextInput
          style={styles.input}
          autoFocus={true}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          onChangeText={(text) => {
            this.setState({password: text});
          }}
        />
        <TextInput
          style={styles.mutliInput}
          autoFocus={true}
          placeholder="MultiText"
          placeholderTextColor="gray"
          multiline={true}
          onChangeText={(text) => {
            this.setState({mutliText: text});
          }}
        />
        <Text>{this.state.typedText}</Text>
        <Text>{this.state.password}</Text>
        <Text>{this.state.mutliText}</Text>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    padding: 20,
  },
  input: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  mutliInput: {
    borderWidth: 2,
    height: 100,
    padding: 10,
    margin: 10,
  },
});
