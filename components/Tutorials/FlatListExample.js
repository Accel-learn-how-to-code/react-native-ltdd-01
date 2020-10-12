import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  TouchableHighlight,
  RefreshControl,
} from 'react-native';
//import itemData from '../../data/ProfileInformation';
import AddItemModal from './AddItemModal';
import EditItemModal from './EditItemModal';
import FlatListItem from './FlatListItem';
import getData from '../../Networking/Server';

export default class FlatListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyChanged: null,
      itemData: null,
      refresh: false,
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  onRefreshData() {
    //refresh Data each time the state is refresh
    this.refreshData();
  }

  refreshData() {
    //set the refresh
    this.setState({refresh: true});
    //get data
    getData()
      .then((data) => {
        this.setState({itemData: data.ProfileInformation});
        this.setState({refresh: false});
      })
      .catch((error) => {
        //error thì set lại mảng rỗng và refresh về false
        this.setState({itemData: []});
        this.setState({refresh: false});
        console.log('Error on refreshData function: ' + error);
      });
  }

  refreshScreen(keyChanged) {
    this.setState({keyChanged: keyChanged});
    this.flatList.scrollToEnd();
  }

  refreshItem(keyChanged) {
    this.setState({keyChanged: keyChanged});
  }

  _onPressAdd() {
    this.AddItemModal.showModal();
  }

  render() {
    let itemData = this.state.itemData;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => this._onPressAdd()}>
            <Image style={styles.icon} source={require('../../img/plus.png')} />
          </TouchableHighlight>
        </View>

        <FlatList
          //tạo ref để truy cập function trong component con
          ref={(value) => {
            this.flatList = value;
          }}
          data={itemData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => this.onRefreshData()}
            />
          }
        />

        <AddItemModal
          //tạo ref để truy cập function trong component con
          ref={(value) => {
            this.AddItemModal = value;
          }}
          parentFlatList={this}
        />

        <EditItemModal
          //tạo ref để truy cập function trong component con
          ref={(value) => {
            this.EditItemModal = value;
          }}
          parentFlatList={this}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
  },
  header: {
    backgroundColor: '#1D3557',
    height: 50,
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 34 : 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
  },
  icon: {
    height: 25,
    width: 25,
  },
});
