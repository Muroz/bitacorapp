import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import ProjectTable from './ProjectTable';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase'

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
    
    render() {
        const { goBack } = this.props.navigation;
        console.log(this.props.navigation)
        return(
            <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            
                <ProjectTable navigation={this.props.navigation}/>
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

      
    },
})