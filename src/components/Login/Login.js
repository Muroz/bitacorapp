import React, { Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, NavigatorIOS } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
 static navigationOptions = {header:null };
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
                    <LoginForm title="Login" navigation={this.props.navigation}/>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#27364E",
        // alignItems: 'center',
        // justifyContent: 'flex-start',
    },
    logo: {
        //marginTop: 200
       // height:100,
       // width: 200,
    },
    logoContainer: {
        alignItems : 'center',
        // justifyContent : 'center',
        // backgroundColor: "#28110A",
        // width: 140,
        // height: 80,
         marginTop: 80,
         marginBottom: 80,
        // borderWidth: 2,
        // borderColor: "#fff",
        flex:2,
       
    },
    logoBorder:{
        marginLeft: '20%',
        marginRight: '20%',
        width: 130,
        height: 130,
        //flex: 3,
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