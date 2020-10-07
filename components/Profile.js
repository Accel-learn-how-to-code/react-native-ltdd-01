import * as React from 'react';
import logo from '../img/pipi.jpg';
import icon from '../img/gear.png';
import {
  //SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  // StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ProfileInformation from '../data/ProfileInformation';

function ItemProfile({item}) {
  return (
    <View>
      <Text style={styles.labelTiltle}>{item.title}</Text>
      <Text style={styles.textContent}>{item.description}</Text>
    </View>
  );
}

function Profile() {
  const infor = ProfileInformation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopContent}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => Alert.alert('You clicked option!')}>
            <Image style={{width: 30, height: 30}} source={icon} />
          </TouchableOpacity>
          <View style={styles.imgContainerBorder}>
            <Image style={styles.imgContainer} source={logo} />
          </View>
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
      {/* Võ Đình Hoàng Long 1811505310323 */}
      <View style={styles.content}>
        {infor.map((x, index) => {
          return <ItemProfile key={index} item={x} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
  },
  header: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D3557',
    borderWidth: 1,
  },
  headerTopContent: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerBottomContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#457B9D',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerContent: {
    alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '50%',
  },
  title: {
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 25,
  },
  title2: {
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 10,
    paddingBottom: 20,
  },
  inputPlace: {
    height: 40,
    width: '100%',
    borderWidth: 0,
    paddingHorizontal: 10,
  },
  labelTiltle: {
    paddingHorizontal: 14,
    marginVertical: 5,
    fontSize: 20,
    color: '#1D3557',
    fontWeight: 'bold',
  },
  submitButton: {
    marginVertical: 15,
  },
  imgContainerBorder: {
    width: 170,
    height: 170,
    borderWidth: 1,
    borderColor: '#457B9D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imgContainer: {
    width: 150,
    height: 150,
    borderWidth: 4,
    borderColor: '#457B9D',
    borderRadius: 100,
  },
  iconContainer: {
    marginRight: -50,
    marginVertical: 10,
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
  },
  textContent: {
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#1D3557',
    borderWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
    borderBottomColor: '#1D3557',
  },
});

export default Profile;
