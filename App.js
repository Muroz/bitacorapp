import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import MainView from './src/components/Login/MainView';
import ProjectView from './src/components/Login/ProjectView';

class HomeScreen extends React.Component {
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