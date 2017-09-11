import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ProjectTableCell from './ProjectTableCell';

export default class ProjectView extends Component {
    // static propTypes = {
    //     navigator: PropTypes.object.isRequired,
    // }
    render(){
        const { navigate } = this.props.navigation;
        var projects = []
        for (let i = 0; i < 10; i++){
            //projects.push()
        }
        return(
             <View style={styles.container}>
                 <ScrollView style={styles.scrollContainer}>
                    <ProjectTableCell navigation={this.props.navigation} name="Open Project 101" />
                </ScrollView>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '70%',
        backgroundColor: "#fff",
        justifyContent: 'flex-start'
    },
    scrollContainer: {
        flex:1,

    }
})