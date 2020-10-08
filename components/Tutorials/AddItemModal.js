import * as React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  Alert,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {Modal, Portal, Button, Provider, TextInput} from 'react-native-paper';

export default class addItemModal extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    //alert('Show');
    this.setState({isVisible: true});
  }

  hideModal() {
    //alert('Hide');
    this.setState({isVisible: false});
  }

  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.state.isVisible} onDismiss={this.hideModal}>
            <View style={styles.container}>
              <View style={styles.contentHolder}>
                <View style={styles.inputHolder}>
                  <TextInput
                    label="Email"
                    placeholder="Nhập tiêu đề"
                    onChangeText={() => console.log('Pressed Input1')}
                  />
                  <TextInput
                    label="Email"
                    placeholder="Nhập miêu tả"
                    onChangeText={() => console.log('Pressed Input1')}
                  />
                </View>
                <View style={styles.buttonHolder}>
                  <Button
                    style={styles.buttonStyle}
                    mode="text"
                    onPress={this.hideModal}>
                    Decline
                  </Button>
                  <Button
                    style={styles.buttonStyle}
                    mode="text"
                    onPress={() => console.log('Pressed Accept')}>
                    Accept
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 250,
    backgroundColor: '#F1FAEE',
    alignSelf: 'center',
    padding: 10,
  },
  contentHolder: {},
  inputHolder: {
    height: 150,
  },
  buttonHolder: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonStyle: {},
});
