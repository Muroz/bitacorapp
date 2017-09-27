import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {NavigateActions, StackNavigator} from 'react-navigation'
export default class ProjectTableCell extends Component {
    constructor(props) {
        super(props);
        this.state = { Project: this.props.Project } ;
      }
      openProject(){
        const { navigate } = this.props.navigation;
        navigate("ProjectView", {Project:this.state.Project});  
      }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.cell}
            onPress = {this.openProject.bind(this)}
            >
                    <View style={styles.projectImageView}>
                        <Image
                            style={styles.projectImage}
                            source={{ uri: this.state.Project.PhotoUrl}}
                        />
                    </View>
                    <View style={styles.projectDescriptionView}>
                        <View style={styles.DescriptionView}>
                            <Text style={styles.projectName}>{this.state.Project.Name} </Text>
                            <Text style={styles.city}>{this.state.Project.City} </Text>
                        </View>

                    </View>

               </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 5,
        alignItems: 'center',
        width: '100%',

    },


    cell: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
    },
    projectImage: {
        width: '100%',
        height: '100%',

    },
    projectImageView: {
        flex: 2,
        height: '100%',
    },

    projectDescriptionView: {
        flex: 4,
        height: '100%',
        backgroundColor: "#3498db",
    },

    DescriptionView: {
        marginTop: 20,
        marginLeft: 20,
        
    },
    projectName:{
         
        color:'white',
        fontSize: 20,
    },
    city:{
        color:'white',
        
    }

});