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
          };
    }

    componentDidMount() {
        // start listening for firebase updates
        this.listenForProjects(this.projectRef);
      }
      //turn off the listen when exit the view
    // componentWillUnmount(){
    //     this.projectRef.off()
    //   }
   

    _renderItem(project) {
        // a method for building each list item
        const onProjectCompletion = () => {
          this.projectRef.child(project._key).remove()
        };
        return (
            <ProjectTableCell onProjectCompletion={ onProjectCompletion} navigation={this.props.navigation} Project={project} />
        );
      }

      listenForProjects(projectRef) {
        projectRef.on('value', (dataSnapshot) => {
          var projects = [];
          dataSnapshot.forEach((childSnapshot) => {
            projects.push({ Name: childSnapshot.child("Name").val(), 
            Address: childSnapshot.child("Address").val(), 
            City: childSnapshot.child("City").val(), 
            PhotoUrl: childSnapshot.child("PhotoUrl").val(), 
            id:childSnapshot.child("id").val(),
            _key: childSnapshot.child._key }
        );
          });
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(projects)
          });
        });
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