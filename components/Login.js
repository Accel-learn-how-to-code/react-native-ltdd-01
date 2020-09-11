import * as React from 'react';
import logo from '../img/pipi.jpg';
import {
  //SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  Text,
  // StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgContainer} source={logo} />
      <View style={styles.header}>
        <Text style={styles.title}>HELLO THERE,</Text>
        <Text style={styles.title}>WELCOME BACK !</Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingHorizontal: 25,
            paddingBottom: 25,
          }}>
          Log in to continue
        </Text>
      </View>
      {/* Võ Đình Hoàng Long 1811505310323 */}
      <View style={styles.content}>
        <Text style={styles.labelTiltle}>Email: </Text>
        <TextInput style={styles.inputPlace} placeholder="user@mail.com" />
        <Text style={styles.labelTiltle}>Password: </Text>
        <TextInput
          style={styles.inputPlace}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.forgot}>
          <Text style={{fontWeight: 'bold'}}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View style={styles.submitButton}>
          <Button title="GO" color="black" />
        </View>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={{fontWeight: 'bold'}}>
            Don't have a account? Sign up now!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
    padding: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'crimson',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
  content: {
    flex: 4,
    paddingHorizontal: 20,
    // backgroundColor: 'yellow',
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
    margin: 10,
    marginBottom: 25,
    width: 130,
    height: 130,
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

export default Login;
