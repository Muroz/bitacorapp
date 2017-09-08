import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class BitacoraView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Help
                </Text>
                <View style={styles.dateContainer}>

                </View>
                <View style={styles.buttonContainer}>

                </View>

    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: "#3E4649",
    },
    dateContainer: {
        backgroundColor: '#fff',
        //height: '100%',
        //width: '25%',
        flexGrow: 1,
    },
    buttonContainer:{
        backgroundColor:'#f0f',
        //height: '100%',
        //width: '75%',
        flexGrow: 3,
    }
})