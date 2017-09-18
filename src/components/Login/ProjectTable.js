import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ProjectTableCell from './ProjectTableCell';

export default class ProjectView extends Component {
    // static propTypes = {
    //     navigator: PropTypes.object.isRequired,
    // }
    render(){
                 // <ProjectTableCell navigation={this.props.navigation} name="Open Project 101" />

                    // <ProjectTableCell navigation={this.props.navigation} name="Open Project 101" />
        const { navigate } = this.props.navigation;
        var project1= {city: 'ST.JOHN\'S', name: 'project1'}
        var project2= {city: 'MOUNT PEARL', name: 'project2'}
        
        var projects = [project1, project2, project2, project2,project2,project2,project2,project2]
        var dummy = []
        for (let i = 0; i < projects.length; i++){
            dummy.push(
                <ProjectTableCell key={i} navigation={this.props.navigation} Project={projects[i]} />
            )
        }
        return(
             <View style={styles.container}>
                 <ScrollView style={styles.scrollContainer}>
   
                
                {dummy}
            
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