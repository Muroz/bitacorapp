import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ProjectTableCell from './ProjectTableCell';

export default class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.state = { projects: [] } ;
      }
    componentWillMount(){
        const { navigate } = this.props.navigation;
        var project1= {city: 'ST.JOHN\'S', name: 'project1'}
        var project2= {city: 'MOUNT PEARL', name: 'project2'}
        
        var dummy = [project1, project2, project2, project2,project2,project2,project2,project2]
        for (let i = 0; i < dummy.length; i++){
            this.state.projects.push(
                <ProjectTableCell key={i} navigation={this.props.navigation} Project={dummy[i]} />
            )
        }
    }
    render(){
                 // <ProjectTableCell navigation={this.props.navigation} name="Open Project 101" />

                    // <ProjectTableCell navigation={this.props.navigation} name="Open Project 101" />
       
        return(
             <View style={styles.container}>
                 <ScrollView style={styles.scrollContainer}>
   
                
                {this.state.projects}
            
                </ScrollView>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        backgroundColor: "#ecf0f1",
        justifyContent: 'flex-start'
    },
    scrollContainer: {
        flex:1,

    }
})