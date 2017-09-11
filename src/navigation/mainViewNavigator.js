import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainView from '../components/Login/MainView';
import ProjectView from '../components/Login/ProjectView';
import { Icon } from 'react-native-elements'
const DrawerMenu = ({ navigate }) => {
    return <Icon 
        name="md-menu"
        size={28}
        color="white"
        style={{paddingleft: 20}}
        onPress = {()=> navigate('DrawerOpen')}

        />
        
        
};
const  mainViewNavigator= StackNavigator({
    MainView: { screen: MainView},
    ProjectView: { screen: ProjectView }},{
        navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#27364E",
        },
    }
 
    
    });


export default mainViewNavigator;