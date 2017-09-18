import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ProjectView from './ProjectView';
import NavigateActions from 'react-navigation'
export default class ProjectTableCell extends Component {
    constructor(props) {
        super(props);
        this.state = { Project: undefined } ;
      }
    
      componentWillMount() {
        this.setState({ Project:this.props.Project });
      }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.cell}
            onPress = {navigate('ProjectView', {project: this.state.Project})}
            >
            
                    <View style={styles.projectImageView}>
                        <Image
                            style={styles.projectImage}
                            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                        />
                    </View>
                    <View style={styles.projectDescriptionView}>
                        <View style={styles.DescriptionView}>
                            <Text style={styles.projectName}>{this.state.Project.name} </Text>
                            <Text style={styles.city}>{this.state.Project.city} </Text>
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
        backgroundColor: "grey",
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
        backgroundColor: "red",

    },

    projectDescriptionView: {
        flex: 4,
        height: '100%',
        backgroundColor: "#34495e",
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