import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class LifeCycleTest extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log('Read to the Constructor Phase!!!');
    //change count each 2s
    setInterval(() => {
      console.log('--- 2 seconds passed away ---');
      this.setState({count: ++this.state.count});
    }, 2000);
  }
  componentDidMount() {
    console.log('Read to the Component Did Mount Phase!!!');
  }
  componentWillUnmount() {
    console.log('Read to the Component Will UnMount Phase!!!');
  }
  shouldComponentUpdate() {
    console.log('Read to the Component Should Update Phase!!!');
    //only Update if return true
    return true;
  }
  componentDidUpdate() {
    console.log('Read to the Component Did Update Phase!!!');
  }
  render() {
    console.log('Read to the Render Phase!!!');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LifeCycleTest</Text>
        <Text style={styles.title}>{this.state.count}</Text>
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
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
});
