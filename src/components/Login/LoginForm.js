import React,{Component, PropTypes} from 'react';
<<<<<<< HEAD
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
=======
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
>>>>>>> bccfab1e45e3b7d1292e6117436016ea843af533
    }
    render(){

        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle="light-content" 
                />
                <TextInput 
<<<<<<< HEAD
                    placeholder="Email"
                    placeholderTextColor='#bdc3c7' 
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
=======
                    placeholder="Username"
                    placeholderTextColor='#fff' 
>>>>>>> bccfab1e45e3b7d1292e6117436016ea843af533
                    style={styles.input}
                    returnKeyType="next" 
                    onSubmitEditing={() => this.passWordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <TextInput 
                    placeholder="Password" 
<<<<<<< HEAD
                    placeholderTextColor='#bdc3c7'
                    onChangeText={(text)=> this.setState({password:text})} 
                    value={this.state.password}
=======
                    placeholderTextColor='#fff' 
>>>>>>> bccfab1e45e3b7d1292e6117436016ea843af533
                    secureTextEntry 
                    style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passWordInput = input} 
                />

<<<<<<< HEAD
                

               
                {this.renderButtonOrSpinner()}
=======
                <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Projects', { navigation: this.props.navigation })}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

>>>>>>> bccfab1e45e3b7d1292e6117436016ea843af533
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