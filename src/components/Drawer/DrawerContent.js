import React, { Component } from 'react';
import { View, Image, Text, Button} from 'react-native';
import { DrawerItems, NavigationActions} from 'react-navigation';
import * as firebase from 'firebase';

export default class DrawerContent extends Component {
     // <Image source={{ uri: user.photoURL }} style={avatar} />

     handleLogout(){
        try {        
         firebase.auth().signOut();
         const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Unauthorized' }),
            ]
          })
      
          this.props.navigation.dispatch(resetAction);
       
            } catch (error) {
            alert(error);
        }
    }
    render() {
       
        return (
            <View style={styles.container}>
            <DrawerItems {...this.props} />
            
                <View style={styles.logOutButton}>
                <Button color='#fff' onPress = {this.handleLogout.bind(this)}title="Log out" />
                    
                </View>

                
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },
    logOutButton: {
        height: 50,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    }
};

