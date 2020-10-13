import * as React from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLargeTitle}>Welcome</Text>
        <Text style={styles.headerSmallTitle}>
          Please login or signup to continue using our app
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../img/logo.jpg')} />
        <Text style={styles.headerSmallTitle}>Enter via Social Network</Text>
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.iconHolder}>
            <Icon name={'logo-facebook'} size={30} style={{color: 'blue'}} />
          </View>
          <View style={styles.iconHolder}>
            <Icon
              name={'logo-twitter'}
              size={30}
              style={{color: 'lightblue'}}
            />
          </View>
        </View>
        <Text style={styles.headerSmallTitle}>or Login with email</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonName}> Sign up </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: '#000'}}>You already have a account?</Text>
          <TouchableOpacity
            style={styles.buttonText}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'tomato'}}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  header: {
    flex: 20,
  },
  logoContainer: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  socialContainer: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 20,
  },
  headerLargeTitle: {
    color: 'tomato',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerSmallTitle: {
    color: '#000',
    fontSize: 16,
    marginVertical: 5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconHolder: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: 'tomato',
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonName: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
