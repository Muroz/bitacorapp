import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import BitacoraView from './BitacoraView';

export default class ProjectView extends Component {
    constructor(props) {
        super(props);
        this.state = { Project: undefined } ;
      }
    componentWillMount(){
        const {state} = this.props.navigation;
        this.setState({ Project:state.params.Project })
        console.log(state.params.Project )
        
        console.log(this.state)
    }
 
     static navigationOptions = {title: '1232'};

    
    _handleBitacora(){
        var currentDate = new Date();
        //var dateString = currentDate.getMonth()  + '/' +currentDate.getDate() + "/" + currentDate.getFullYear()
        var dateString = currentDate.toDateString();
        // this.props.navigator.push({
        //     component:BitacoraView,
        //     title:dateString,
        //     barTintColor : '#22A86D',
        //     titleTextColor: '#fff',
        //     tintColor :'#fff',
        // })
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Image source={require('../../imgs/companyLogo.png')} style={styles.logo}/>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}> 1231</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}> Address: </Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}> Company: </Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}> Supervisor: </Text>
                    </View>
                </View>
                
                <View style={styles.buttonContainer1}>
                    <TouchableOpacity style={styles.button} onPress={()=> this._handleBitacora()}>
                        <Image source={require('../../imgs/bitacoraIcon.png')} style={styles.image} />
                        <Text style={styles.imageText}> Bitacora </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../imgs/planosIcon.png')} style={styles.image} />
                        <Text style={styles.imageText}> Planos </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer2}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../imgs/comiteeIcon.png')} style={styles.image} />
                        <Text style={styles.imageText}> Comite </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../imgs/teamIcon.png')} style={styles.image} />
                        <Text style={styles.imageText}> Equipo </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#3E4649",
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent : 'flex-start',
        //backgroundColor: '#fff',
        height: "30%",
        width: "80%",
        marginTop: "25%",
    },
    logo:{
        height: 75,
        width: 75,
    },
    infoBox:{
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 10,
        height: '10%',
        justifyContent: 'center',  
    },
    infoText:{
        color: '#95989A',
    },
    buttonContainer1:{
        flexDirection : 'row',
        width: '80%',
        height: '20%',
        margin: 10,
        //backgroundColor: '#fff',
        //justifyContent: 'flex-start',
        //alignItems: 'flex-start',
    },
    buttonContainer2:{
        flexDirection : 'row',
        width: '80%',
        height: '20%',
        margin: 10,
        //backgroundColor: '#fff',
        //justifyContent: 'flex-start',
        //alignItems: 'flex-start',
    },
    button:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100%',
        width: '45%',
        margin: 10,
        borderRadius: 10,
        //margin: "5%",
    },
    image:{
        //width: '100%',
        //height: '100%',
    },
    imageText:{
        color: '#95989A',
    }


})