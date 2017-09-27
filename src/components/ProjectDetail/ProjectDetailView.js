import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';
import ProjectDetailRow  from './ProjectDetailRow';
import * as firebase from 'firebase'

export default class ProjectView extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.Project.Name,
    });
    constructor(props) {
        super(props);
        const userRef = firebase.database().ref("Users")
        const { state } = this.props.navigation;
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            Project: state.params.Project,
            dataSource: dataSource, // dataSource for our list
        };

       

    }


    render() {
        return (
            <View style={styles.container}>
            <ProjectDetailRow 
            Project = {this.state.Project} 
            Title={"AVANCE DE OBRA"} 
            IconName={{name:"text-document", type:"Entypo"}} 
            navigation ={this.props.navigation}
            />


            <ProjectDetailRow
             Project = {this.state.Project} Title={"ALMACEN"} 
             IconName={{name:"archive"}}
              navigation ={this.props.navigation}/>

            <ProjectDetailRow Project = {this.state.Project} Title={"ALMACEN"} IconName={"archive"} navigation ={this.props.navigation}/>

            <ProjectDetailRow Project = {this.state.Project} Title={"PERSONAS"} IconName={"group"} navigation ={this.props.navigation}/>

            <ProjectDetailRow Project = {this.state.Project} Title={"AVANCE DE OBRA"} IconName={"file-document"} navigation ={this.props.navigation}/>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#ecf0f1",
    },

})