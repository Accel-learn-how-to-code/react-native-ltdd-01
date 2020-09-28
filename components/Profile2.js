import * as React from 'react';
import logo from '../img/pipi.jpg';
import icon from '../img/gear.png';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  SectionList,
  // StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ProfileInformation} from '../data/ProfileInformation';

function ItemProfile(item) {
  return (
    <View style={styles.blockInfor}>
      <Text>{item.title}</Text>
    </View>
  );
}

function Profile({navigation}) {
  const infor = {ProfileInformation};
  console.log(infor.data);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopContent}>
          <Image style={styles.iconContainer} source={icon} />
          <Image style={styles.imgContainer} source={logo} />
          <Text style={styles.title}>Võ Đình Hoàng Long</Text>
          <Text style={{color: 'white'}}>Đà Nẵng, Việt Nam</Text>
        </View>
        <View style={styles.headerBottomContent}>
          <View style={styles.headerContent}>
            <Text style={styles.title2}>453</Text>
            <Text style={styles.title2}>Follower</Text>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title2}>500</Text>
            <Text style={styles.title2}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {/* {
          infor.map(x => {return <ItemProfile item={x} />})
        } */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e15',
    borderWidth: 1,
  },
  headerTopContent: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerBottomContent: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderWidth: 2,
  },
  headerContent: {
    alignItems: 'center',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '50%',
  },
  title: {
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 25,
  },
  title2: {
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 5,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imgContainer: {
    marginBottom: 10,
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: '#4A525A',
  },
  iconContainer: {
    marginRight: -50,
    marginBottom: 10,
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
  },
  blockInfor: {
    width: '45%',
    height: 100,
    backgroundColor: '#1e1e15',
    marginHorizontal: 2,
    marginVertical: 5,
  },
});

export default Profile;
