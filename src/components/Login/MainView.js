import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ProjectTable from './ProjectTable';

export default class MainView extends Component {
    //static navigationOptions = {headerLeft:null, headerTintColor: "#fff" };

    static navigationOptions = ({ navigation, screenProps }) => ({
       title: "Projectos",
       headerTintColor: "white",
       headerStyle: {
         backgroundColor: "#27364E",
       },
       headerLeft:null,
   });

    _handleLogout(){
        this.props.navigator.pop();
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