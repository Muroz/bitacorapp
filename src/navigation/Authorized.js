import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MainView from './mainViewNavigator';

const Authorized = DrawerNavigator({
    ProjectHome: { screen: MainView  },
}, {

});


export default Authorized;