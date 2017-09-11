import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

import * as firebase from "firebase";

import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import Authorized from './src/navigation/Authorized';
import Firebase from "./src/include/firebase/firebase";
const firebaseApp = Firebase.initialize()

class HomeScreen extends React.Component {
 

  static navigationOptions = {
    title: 'Welcome',
    header: {
      visible: false
  }
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const bitacorapp = StackNavigator({
  Unauthorized: { screen: Login },
  Authorized:{ screen: Authorized,  navigationOptions: {
    header: null,
} }
},{ 
    headerMode: 'screen',
  
  });

AppRegistry.registerComponent('bitacorapp', () => bitacorapp);