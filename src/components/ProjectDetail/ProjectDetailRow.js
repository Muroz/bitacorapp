import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {NavigateActions, StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';

export default class ProjectDetailRow extends Component {
    constructor(props) {
        super(props);
        this.state = { Project: this.props.Project,
                        Title: this.props.Title,
                        IconName: this.props.IconName } ;
      }
    
   

      openDetailRow(){
        const { navigate } = this.props.navigation;
        // navigate("ProjectView", {Project:this.state.Project})
        
      }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <TouchableOpacity style={styles.cell}
            onPress = {this.openDetailRow.bind(this)}
            >
                    <View style={styles.projectImageView}>
                    <Icon
                        name={this.state.IconName.name}
                        type={this.state.IconName.type}
                        size={40}
                        color='black'
                         />
                    </View>
                    <View style={styles.projectDescriptionView}>
                        <View style={styles.DescriptionView}>
                            <Text style={styles.Ttile}>{this.state.Title} </Text>
                        </View>

                    </View>

               </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
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
        marginTop: 10,
        marginLeft: 20,
        
    },
    Ttile:{
         
        color:'white',
        fontSize: 20,
    },
    city:{
        color:'white',
        
    }

});