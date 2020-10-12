import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../img/pipi.jpg')} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.signInTitle}>Sign in</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputHolder}>
              <Icon name="mail-outline" size={40} style={styles.icon} />
              <View>
                <Text style={styles.smallTitle}>Email</Text>
                <TextInput style={styles.input} placeholder="abc@gmail.com" />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputHolder}>
              <Icon name="lock-closed-outline" size={40} style={styles.icon} />
              <View>
                <Text style={styles.smallTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="**********"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.signInbutton}>
            <TouchableOpacity>
              <Text style={styles.labelButton}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.smaillButtonContainer}>
            <View style={styles.googleButton}>
              <TouchableOpacity>
                <Text style={styles.labelSmallButton}>Google</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.facebookButton}>
              <TouchableOpacity>
                <Text style={styles.labelSmallButton}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.forgotContainer}>
          <Text style={{color: '#ffc400'}}>Forgot password?</Text>
          <Text style={{color: '#7c7c7c'}}>
            Don't have account? Sign up now
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  logoContainer: {
    flex: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  formContainer: {
    flex: 35,
  },
  signInTitle: {
    fontSize: 20,
    color: '#7f7f7f',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  smallTitle: {
    fontSize: 14,
    color: '#7f7f7f',
  },
  inputHolder: {
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    width: 250,
    height: 35,
    fontSize: 13,
    padding: 0,
    paddingBottom: 7,
    marginBottom: 5,
  },
  inputContainer: {
    marginVertical: 5,
  },
  icon: {
    alignSelf: 'flex-start',
    marginRight: 7,
    height: 40,
    width: 40,
    color: '#ffca18',
  },
  buttonContainer: {
    flex: 25,
    justifyContent: 'space-around',
  },
  signInbutton: {
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#4da445',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#0868be',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smaillButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labelButton: {
    fontSize: 18,
    color: '#fff',
  },
  labelSmallButton: {
    fontSize: 14,
    color: '#fff',
  },
  forgotContainer: {
    flex: 15,
    paddingVertical: 20,
    alignItems: 'center',
  },
});
