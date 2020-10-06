import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/Login';
import Signin from './components/Signin';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import ListSubject from './components/ListSubject';
import HomeMenu from './components/HomeMenu';

import MutlipleGreeting from './components/Tutorials/MutlipleGreeting';
import Clock from './components/Tutorials/Clock';
import InputExample from './components/Tutorials/InputExample';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Menu" component={HomeMenu} />
      //     <Stack.Screen name="LogIn" component={Login} />
      //     <Stack.Screen name="SignUp" component={Signin} />
      //     <Stack.Screen name="SectionList" component={ListSubject} />
      //     <Stack.Screen name="Profile" component={Profile} />
      //     <Stack.Screen name="Profile2" component={Profile2} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      //<Profile2 />

      //for learning
      //<MutlipleGreeting />
      //<Clock />
      <InputExample />
    );
  }
}

export default App;
