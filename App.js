import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
<<<<<<< HEAD

import * as firebase from "firebase";

=======
>>>>>>> bccfab1e45e3b7d1292e6117436016ea843af533
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import MainView from './src/components/Login/MainView';
import ProjectView from './src/components/Login/ProjectView';

<<<<<<< HEAD


class HomeScreen extends React.Component {
 

=======
class HomeScreen extends React.Component {
>>>>>>> bccfab1e45e3b7d1292e6117436016ea843af533
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const bitacorapp = StackNavigator({
  Home: { screen: Login },
  Projects : { screen: MainView},
  ProjectDesc: { screen: ProjectView},
},{ 
    headerMode: 'screen', 
  });

AppRegistry.registerComponent('bitacorapp', () => bitacorapp);