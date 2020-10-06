import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    const countTheSeconds = () => {
      this.setState((previousState) => {
        return {
          count: ++this.state.count,
        };
      });
    };

    setInterval(countTheSeconds, 1000);
  }

  render() {
    return (
      <Text style={styles.title}>
        This is {this.props.name} at {this.state.count}!
      </Text>
    );
  }
}

export default class Clock extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Count name="Long dep zai" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#1D3557',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
  },
});
