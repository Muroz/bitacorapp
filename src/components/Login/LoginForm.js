import React, {Component, PropTypes} from 'react';
import {StyleSheet, ActivityIndicator, Button, View, TextInput, TouchableOpacity, Text, StatusBar, NavigatorIO } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from "firebase";

export default class LoginForm extends Component {

    
    constructor(props){
        super(props);
        this.state = {
          loading: false,
          email: '',
          password: ''
        }

        this.onLoginPress = this.onLoginPress.bind(this);
      }

      onLoginPress() {
        this.setState({ error: '', email: '', password: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password).then(() =>{
            this.setState({ error: '', loading: false }); 
            const resetNavigator = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Authorized',
                    })
                ],
            });
            dispatch(resetNavigator);
        })
            .catch(() => {
                console.log("login fail")
                firebase.auth().createUserWithEmailAndPassword(email, password).then(() => { 
                    this.setState({error: '', email: '', password: '', loading: false });
                })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large" />   
        }
        return <Button style={styles.loginButton} onPress={this.onLoginPress} title="Log in" />
    }
    render(){

        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                />
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor='#bdc3c7' 
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                    style={styles.input}
                    returnKeyType="next" 
                    onSubmitEditing={() => this.passWordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor='#bdc3c7'
                    onChangeText={(text)=> this.setState({password:text})} 
                    value={this.state.password}
                    secureTextEntry 
                    style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passWordInput = input} 
                />

                

               
                {this.renderButtonOrSpinner()}
                <TouchableOpacity>
                    <Text style={styles.textStyle}>
                        Forgot password
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
        color: '#fff',
    },
    loginButton: {
        color: '#fff',   
        backgroundColor:'#03A9F4',     
    },

    textStyle:{
        color: '#A2A2A2',
        textAlign: 'center',
        marginTop: 20,
    },
})