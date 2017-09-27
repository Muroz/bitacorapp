import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import MainView from './src/components/Project/MainView';
import ProjectView from './src/components/ProjectDetail/ProjectDetailView';
import DataEntry from './src/components/Login/DataEntry';
import Authorized from './src/navigation/Authorized';
import Firebase from './src/include/firebase/firebase';
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
  Authorized:{screen: Authorized},
  ProjectView: { screen: ProjectView },
  DataEntryView: { screen: DataEntry},
},{ 
    headerMode: 'screen',
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#27364E",
      }
    },
  
  });

AppRegistry.registerComponent('bitacorapp', () => bitacorapp);