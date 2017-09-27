import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MainView from  '../components/Project/MainView';
import DrawerContent from '../components/Drawer/DrawerContent';

const Authorized = DrawerNavigator({
    ProjectHome: { screen: MainView  },
    
  
}, {
    contentComponent: (props) => <DrawerContent {...props} />
});


export default Authorized;