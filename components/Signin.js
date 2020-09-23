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
import Svg from 'react-native-svg';

function Signin({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.imgContainer} source={logo} />
        <View style={styles.header}>
          <Text style={styles.title}>WELCOME !</Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: 25,
              paddingVertical: 5,
            }}>
            Sign up to start your journey
          </Text>
        </View>
        {/* Võ Đình Hoàng Long 1811505310323 */}
        <View style={styles.content}>
          <Text style={styles.labelTiltle}>Email: </Text>
          <TextInput style={styles.inputPlace} placeholder="user@mail.com" />
          <Text style={styles.labelTiltle}>Phone: </Text>
          <TextInput style={styles.inputPlace} placeholder="0905035581" />
          <Text style={styles.labelTiltle}>Password: </Text>
          <TextInput
            style={styles.inputPlace}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Text style={styles.labelTiltle}>Confirm Password: </Text>
          <TextInput
            style={styles.inputPlace}
            secureTextEntry={true}
            placeholder="Password"
          />
          <View style={styles.submitButton}>
            <Button title="SUBMIT" color="black" />
          </View>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: 'bold'}}>
              Already have an account? Login here.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 4,
    paddingHorizontal: 20,
  },
  inputPlace: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  labelTiltle: {
    paddingHorizontal: 14,
    marginVertical: 5,
    fontSize: 16,
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
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 20,
  },
  forgot: {
    marginTop: 15,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  signUp: {
    alignSelf: 'center',
  },
});

export default Signin;
