import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './components/Login';
import Signin from './components/Signin';
import Profile from './components/Profile';
import ListSubject from './components/ListSubject';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Signin" component={Signin} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      //<Profile />
      <ListSubject />
    );
  }
}

export default App;
