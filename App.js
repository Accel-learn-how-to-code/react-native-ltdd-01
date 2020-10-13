import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from './components/Login';
// import Signin from './components/Signin';
// import Profile from './components/Profile';
// import Profile2 from './components/Profile2';
// import Profile3 from './components/Profile3';
// import Login2 from './components/Login2';
// import ListSubject from './components/ListSubject';
// import FlatListExample from './components/FlatListExample';
// import HomeMenu from './components/HomeMenu';
import TestHome from './components/TestHome';
import Signup from './components/Signup2';
import Login from './components/Login3';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Menu" component={HomeMenu} />
      //     <Stack.Screen name="LogIn" component={Login} />
      //     <Stack.Screen name="Login2" component={Login2} />
      //     <Stack.Screen name="SignUp" component={Signin} />
      //     <Stack.Screen name="SectionList" component={ListSubject} />
      //     <Stack.Screen name="Profile" component={Profile} />
      //     <Stack.Screen name="Profile2" component={Profile2} />
      //     <Stack.Screen name="Profile3" component={Profile3} />
      //     <Stack.Screen name="FlatListExample" component={FlatListExample} />
      //   </Stack.Navigator>
      // </NavigationContainer>


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={TestHome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
