import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, NavigatorIOS } from 'react-native';
import { NavigationActions } from 'react-navigation';

import LoginForm from './LoginForm';
import * as firebase from "firebase";


export default class Login extends Component {

 static navigationOptions = {header:null };

    constructor(props){
        super(props);
        this.getInitialView();
    }

    getInitialView() {
        firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
              if (user != null){
                const resetNavigator = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'Authorized',
                        })
                    ],
                });
                this.props.navigation.dispatch(resetNavigator);
              }else{
                  console.log("no user ")
              }
        
          });
        }

    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoBorder}>
                        <Image style={styles.logo} source={require('../../imgs/BIT.png')} />
                        <Text style={styles.title}>
                            Your construction app
                        </Text>
                    </View>
                </View>
               
                <View style={styles.formContainer}>
                    <LoginForm title="Login" navigation={this.props.navigation} />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#27364E",
    },
    logo: {
        alignItems : 'center',
        marginTop : 30,
        
    },
    logoContainer: {
        alignItems : 'center',
         marginTop: 80,
         marginBottom: 80,
        flex:2,
       
    },
    logoBorder:{
        marginLeft: '20%',
        marginRight: '20%',
        width: 130,
        height: 130,
        backgroundColor: "#28110A",
        borderWidth: 2,
        borderColor: "#fff",
        alignItems : 'center',
       
    },
    formContainer: {
        // marginLeft: 10,
        // marginRight: 10,
        flex: 6,
       //backgroundColor: '#fff',
    },
    title:{
        color: '#fff',
        marginTop: 50,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#27364E",
        //flex: 1

    }
});