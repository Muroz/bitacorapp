import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ProjectTable from './ProjectTable';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements'


export default class MainView extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
       title: "Projectos",
       headerLeft:
       <View style={{paddingLeft:16}}>
           <Icon
               name="menu"
               size={30}
               color='white'
               onPress={() => navigation.navigate('DrawerOpen')} />
       </View>,   });

    _handleLogout(){
        try {
           console.log("press sign out") 
         firebase.auth().signOut();
         const resetNavigator = NavigationActions.reset({
            index: 0,
            action: NavigationActions.navigate({ routeName: 'Unauthorized',}),
        });
        this.props.navigation.dispatch(resetNavigator);
            } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        const { goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <ProjectTable navigation={this.props.navigation}/>

                <TouchableOpacity onPress={()=> goBack()} style={styles.logoutButton}>
                    <View>
                        <Text style={styles.logoutText}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20%',
    },
    logoutButton: {
        marginTop: "30%",
        width: "20%",
        height: 20,
        backgroundColor: '#fff',
        opacity: 0.9,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutText:{
        color: '#95989A',
    }
})