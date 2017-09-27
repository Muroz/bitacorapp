import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainView from '../components/Login/MainView';
import ProjectView from '../components/ProjectDetail/ProjectDetailView';
import DataEntry from '../components/Login/DataEntry.js';
import { Icon } from 'react-native-elements'

const  mainViewNavigator= StackNavigator({
    MainView: { screen: MainView},
    ProjectView: { screen: ProjectView },
    DataEntryView: { screen: DataEntry},
    },{
        navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#27364E",
        },
    },
    
 
    
    });


export default mainViewNavigator;