import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ProjectView from './ProjectView'

export default class ProjectTableCell extends Component {
    // static propTypes = {
    //     navigator: PropTypes.object.isRequired,
    // }
    // _handleSelection(){
    //     this.props.navigator.push({ 
    //         navigationBarHidden: false,
    //         component : ProjectView,
    //         title: 'Project',
    //         barTintColor : '#22A86D',
    //         titleTextColor: '#fff',
    //         tintColor :'#fff'
    //     });
    // }
    render(){
        const { navigate } = this.props.navigation;
        return(
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.cellContainer} onPress={()=> navigate('ProjectView')}>
                    <View style={styles.cell}>
                        {/*<View style={styles.styleBox}>*/}
                        <Text> {this.props.name} </Text>
                        {/*</View>*/}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        //flex: 1,
        height: 60,
        backgroundColor: "white",
        marginTop: 10,
        alignItems: 'center',
        margin: 20
    },
    cellContainer: {
        flex: 4,
        //marginRight: 30, 
 
    },

    cell:{
        flex:2,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: 'black', 
    },
    // styleBox:{
    //      //flex: 1,
    //      position: 'absolute',
    //      borderBottomWidth: 50,
    //      borderBottomColor: 'white',
    //      borderLeftWidth: 0,
    //      borderLeftColor: 'transparent',
    //      borderRightWidth: 50,
    //      borderRightColor: 'transparent',
    // },

});