import React,{Component, PropTypes} from 'react';
import {StyleSheet, Spinner, Button, View, TextInput, TouchableOpacity, Text, StatusBar, NavigatorIOS } from 'react-native';
import MainView from './MainView';
export default class LoginForm extends Component {

    
    constructor(props){
        super(props);
        this.state = {
          loading: false,
          email: '',
          password: ''
        }
      }

      onLoginPress() {
        this.setState({ error: '', loading: true });
        const firebaseApp = this.props.firebaseApp
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password).then(() =>{
            this.setState({ error: '', loading: false }); 
            console.log("login")
        })
            .catch(() => {
                console.log("login fail")
                
                //Login was not successful, let's create a new account
                // firebase.auth().createUserWithEmailAndPassword(email, password)
                //     .then(() => { this.setState({ error: '', loading: false }); })
                //     .catch(() => {
                //         this.setState({ error: 'Authentication failed.', loading: false });
                //     });
            });
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner />;    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
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