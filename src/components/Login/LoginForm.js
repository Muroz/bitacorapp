import React,{Component, PropTypes} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, NavigatorIOS } from 'react-native';
import MainView from './MainView';


export default class LoginForm extends Component {

    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     navigator: PropTypes.object.isRequired,
    // }

    _handleLogIn(){
        //navigate('Projects');
        // this.props.navigator.push({ 
        //     navigationBarHidden: false,
        //     component : MainView,
        //     title: 'Projects',
        //     leftButtonIcon: null, 
        //     leftButtonTitle: ' ',
        //     barTintColor : '#22A86D',
        //     titleTextColor: '#fff',
        //     tintColor :'#fff'
        // });
    }
    render(){

        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                />
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor='#fff' 
                    style={styles.input}
                    returnKeyType="next" 
                    onSubmitEditing={() => this.passWordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor='#fff' 
                    secureTextEntry 
                    style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passWordInput = input} 
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Projects', { navigation: this.props.navigation })}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

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
        //backgroundColor: "#fff",
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        height: 40,
        //backgroundColor : '#fff',
        marginBottom: 10,
        paddingHorizontal: 20,

        //borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#fff',
        color: '#fff',
    },
    buttonContainer: {
        marginTop: 50,
        backgroundColor: '#10C0D5',
        paddingVertical: 15,
        borderRadius: 6
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    textStyle:{
        color: '#A2A2A2',
        textAlign: 'center',
        marginTop: 20,
    },
})