import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LoginForm from './LoginForm';
import * as firebase from "firebase";


const window = Dimensions.get('window');

export default class Login extends Component {

 static navigationOptions = {header:null };

    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.getInitialView();
        
    }
  
    getInitialView() {
        firebase.auth().onAuthStateChanged((user) => {
              if (user != null){
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Authorized'})
                    ]
                  })
                  this.props.navigation.dispatch(resetAction)
                  
                 
              }
          });
        }

    render(){
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container}>
            
                <View style={styles.logoContainer}>
                    <View style={styles.logoBorder}>
                        <Image style={styles.logo} source={require('../../imgs/BIT.png')} />
                    </View>
                    <Text style={styles.title}>
                    Your construction app
                </Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignItems : 'center',
        marginTop : 30,
        resizeMode: 'contain',
        
        
    },
    logoContainer: {
        alignItems : 'center',
         marginTop: 50,
         marginBottom: 80,
        flex:2,
       top:0,
       left: 0,
    },
    logoBorder:{
        width: 130,
        height: 130,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems : 'center',
       
    },
    formContainer: {
        bottom: 0,
        left:0,
        marginTop:100,
        flex: 5,
        width: window.width - 30,
        
   
    },
    title:{
        color: '#fff',
        marginTop: 15,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: "#27364E",

    }
});