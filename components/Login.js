import * as React from 'react';
import logo from '../img/pipi.jpg';
import {
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <Image style={styles.imgContainer} source={logo} />
      <View style={styles.header}>
        <Text style={styles.title}>HELLO THERE,</Text>
        <Text style={styles.title}>WELCOME BACK !</Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingHorizontal: 25,
            paddingBottom: 25,
            marginBottom: 10,
            color: '#1D3557',
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
          <Text style={{fontWeight: 'bold', color: '#1D3557'}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <View style={styles.submitButton}>
          <Button title="GO" color="#1D3557" />
        </View>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontWeight: 'bold', color: '#1D3557'}}>
            Don't have a account? Sign up now!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F1FAEE',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  content: {
    flex: 4,
    paddingHorizontal: 20,
  },
  inputPlace: {
    height: 40,
    width: '100%',
    borderColor: '#1D3557',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  labelTiltle: {
    paddingHorizontal: 14,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  submitButton: {
    marginVertical: 15,
  },
  imgContainer: {
    margin: 10,
    marginBottom: 40,
    width: 130,
    height: 130,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#1D3557',
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
