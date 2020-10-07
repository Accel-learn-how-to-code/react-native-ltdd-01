import React, {Component} from 'react';
import {Text, View, ScrollView, Dimensions, StyleSheet} from 'react-native';

export default class ScrollViewExample extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Hello Baby this is screen 1</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title}>Hello Baby this is screen 2</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.title}>Hello Baby this is screen 3</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'lightblue',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});
