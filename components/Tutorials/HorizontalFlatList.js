import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WeatherData from '../../data/WeatherData';

function FlatListItem({item}) {
  return (
    <View style={styles.itemHolder}>
      <Text style={styles.title}>{item.time}</Text>
      <View style={styles.iconHolder}>
        <Icon name={item.status} size={50} color="black" />
      </View>
      <Text style={styles.title}>{item.degree}</Text>
    </View>
  );
}

export default class HorizontalFlatList extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.imgHolder} source={require('../../img/bg.jpg')} />
        <View style={styles.listHolder}>
          <FlatList
            data={WeatherData}
            horizontal={true}
            renderItem={({item, index}) => {
              return <FlatListItem item={item} index={index} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgHolder: {
    position: 'absolute',
    left: 0,
  },
  itemHolder: {
    alignItems: 'center',
    width: 150,
    height: 160,
    margin: 2,
    padding: 10,
    backgroundColor: 'gray',
  },
  listHolder: {
    opacity: 0.7,
  },
  iconHolder: {
    alignSelf: 'center',
  },
  title: {
    padding: 2,
    margin: 0,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
