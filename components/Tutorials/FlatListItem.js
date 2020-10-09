import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import itemData from '../../data/ProfileInformation';
import Swipeout from 'react-native-swipeout';

export default class FlatListItem extends Component {
  render() {
    var item = this.props.item;
    var index = this.props.index;
    const swipeSetting = {
      autoClose: true,
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Cảnh báo',
              'Bạn có muốn xóa item không?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    itemData.splice(index, 1);
                    //refresh state của screen
                    this.props.parentFlatList.refreshScreen(index);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: item.id,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSetting}>
        <View style={styles.itemHolder}>
          <Image style={styles.imgContainer} source={{uri: item.imageUri}} />
          <View style={styles.titleHolder}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  itemHolder: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 2,
    backgroundColor: '#457B9D',
    borderRadius: 10,
  },
  titleHolder: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  imgContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 15,
  },
});
