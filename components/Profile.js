import * as React from 'react';
import logo from '../img/pipi.jpg';
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
} from 'react-native';

function Signin({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopContent}>
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
      {/* Võ Đình Hoàng Long 1811505310323 */}
      <View style={styles.content}>
        <Text style={styles.labelTiltle}>Email </Text>
        <Text style={styles.textContent}>cyberpunk2076@gmail.com</Text>
        <Text style={styles.labelTiltle}>Phone </Text>
        <Text style={styles.textContent}>0905035581</Text>
        <Text style={styles.labelTiltle}>Twitter </Text>
        <Text style={styles.textContent}>facebook.com/hoanglong.vo.3998</Text>
        <Text style={styles.labelTiltle}>Facebook </Text>
        <Text style={styles.textContent}>twitter.com/AacceleloliconN</Text>
      </View>
    </View>
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
    backgroundColor: '#3E78B2',
  },
  headerTopContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBottomContent: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    backgroundColor: '#004BA8',
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold',
  },
  submitButton: {
    marginVertical: 15,
  },
  imgContainer: {
    margin: 5,
    marginBottom: 10,
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: '#4A525A',
  },
  forgot: {
    marginTop: 15,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  signUp: {
    alignSelf: 'center',
  },
  textContent: {
    paddingHorizontal: 14,
    fontSize: 16,
    color: 'black',
    borderWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
    borderBottomColor: '#eeeeee',
  },
});

export default Signin;
