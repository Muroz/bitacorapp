import React, { Component, PropTypes } from 'react';
import { StyleSheet, ActivityIndicator, Button, View, TextInput, TouchableOpacity, Text, StatusBar, } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

import * as firebase from "firebase";

export default class LoginForm extends Component {


    constructor(props) {
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
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            this.setState({ error: '', loading: false });
        })
            .catch((error) => {
                alert(error)
                this.setState({ error: 'Authentication failed.', loading: false });

                // firebase.auth().createUserWithEmailAndPassword(email, password).then(() => { 
                //     this.setState({error: '', email: '', password: '', loading: false });
                // })
                //     .catch(() => {
                //     });
            });
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return<View style={styles.loginButton}>
            <ActivityIndicator
                animating={this.state.animating}
                color = 'white'
                style={[styles.centering, { height: 40 }    ]}
                size="large" />
                </View>
                
        }
        return <View style={styles.loginButton}>
            <Button color='#fff'
            onPress={this.onLoginPress} title="Log in" />
            </View>
    }
    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Fumi
                label={'Email'}
                iconClass={FontAwesomeIcon}
                iconName={'envelope'}
                iconColor={'white'}
                iconSize={20}
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                style={styles.input}
                returnKeyType="next"
                onSubmitEditing={() => this.passWordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Fumi
              label={'Password'}
              iconClass={FontAwesomeIcon}
              iconName={'unlock-alt'}
              iconColor={'white'}
              iconSize={20}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
              secureTextEntry
              style={styles.input}
              returnKeyType="go"
              ref={(input) => this.passWordInput = input}
            //   keyboardType="password"
              autoCapitalize="none"
              autoCorrect={false}
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
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        height: 65,
        marginBottom: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#03A9F4',
        height:40
    },

    textStyle: {
        color: '#A2A2A2',
        textAlign: 'center',
        marginTop: 20,
    },
})