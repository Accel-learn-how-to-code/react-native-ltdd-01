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

function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.buttonName}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonName}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SectionList')}>
        <Text style={styles.buttonName}>Section List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonName}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile2')}>
        <Text style={styles.buttonName}>Profile 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '40%',
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignSelf: 'center',
  },
  buttonName: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
