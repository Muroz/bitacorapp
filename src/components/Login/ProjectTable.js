import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import ProjectTableCell from './ProjectTableCell';
import * as firebase from 'firebase';

export default class ProjectView extends Component {

    constructor(props) {
        super(props);
        this.projectRef = firebase.database().ref('Projects');        
        

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
          this.state = {
            dataSource: dataSource, // dataSource for our list
            newTask: "" // The name of the new task
          };
        // this.state = { projects: [] };
    }

    componentDidMount() {
        // start listening for firebase updates
        this.listenForTasks(this.projectRef);
      }
   

    _renderItem(project) {
        // a method for building each list item
        const onProjectCompletion = () => {
          // removes the item from the list
          this.projectRef.child(project._key).remove()
        };
        return (

            <ProjectTableCell onProjectCompletion={ onProjectCompletion} navigation={this.props.navigation} Project={project} />
        );
      }

      listenForTasks(projectRef) {
        // listen for changes to the tasks reference, when it updates we'll get a
        // dataSnapshot from firebase
        projectRef.on('value', (dataSnapshot) => {
          // transform the children to an array
          var projects = [];
          dataSnapshot.forEach((childSnapshot) => {
            projects.push({ Name: childSnapshot.child("Name").val(), 
            Address: childSnapshot.child("Address").val(), 
            City: childSnapshot.child("City").val(), 
            PhotoUrl: childSnapshot.child("PhotoUrl").val(), 
            _key: childSnapshot.child._key }
        );
          });
    
          // Update the state with the new tasks
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(projects)
          });
        });
      }



    renderRow(tempProjectHolder){
        for (let i = 0; i < tempProjectHolder.length; i++){
            this.state.projects.push(
                <ProjectTableCell key={i} navigation={this.props.navigation} Project={tempProjectHolder[i]} />
            )
        }
        // tempProjectHolder.forEach((project, index) => {
        //     console.log(project)
        //     this.state.projects.push(
        //         <ProjectTableCell key={index} navigation={this.props.navigation} Project={project} />
        //     )

        // });
        // console.log(tempProjectHolder)
    }
    render() {
    

        return (
            <View style={styles.container}>
                <ListView
                style={styles.scrollContainer}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this._renderItem.bind(this)}
                style={styles.listView}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#ecf0f1",
        justifyContent: 'flex-start'
    },
    scrollContainer: {
        flex: 1,

    }
})