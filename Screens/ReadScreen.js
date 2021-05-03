import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import db from '../config';

var chosenAuthor, chosenStory, chosenTitle;
var title1, title2, title3;

export default class ReadScreen extends React.Component{
    
    getTitles = () =>{
        db.ref("Story1/Title").on("value", data => {
            title1 = data.val();
        })

        db.ref("Story2/Title").on("value", data => {
            title2 = data.val();
        })

        db.ref("Story3/Title").on("value", data => {
            title3 = data.val();
        })

        this.setState({
            title1: title1,
            title2: title2,
            title3: title3
        })
    }

    componentDidMount =() =>{
          this.getTitles();
    }

    getInfo1 = () => {
        db.ref("Story1/Author").on("value", data => {
         chosenAuthor = data.val();
        })
        this.setState({chosenAuthor: chosenAuthor})

        db.ref("Story1/Story").on("value", data => {
            chosenStory = data.val();
          })
          this.setState({chosenStory: chosenStory})

          db.ref("Story1/Title").on("value", data => {
            chosenTitle = data.val();
          })
          this.setState({chosenTitle: chosenTitle})
    }

    getInfo2 = () => {
        db.ref("Story2/Author").on("value", data => {
         chosenAuthor = data.val();
        })
        this.setState({chosenAuthor: chosenAuthor})

        db.ref("Story2/Story").on("value", data => {
            chosenStory = data.val();
          })
          this.setState({chosenStory: chosenStory})

          db.ref("Story2/Title").on("value", data => {
            chosenTitle = data.val();
          })
          this.setState({chosenTitle: chosenTitle})
    }

    getInfo3 = () => {
        db.ref("Story3/Author").on("value", data => {
         chosenAuthor = data.val();
        })
        this.setState({chosenAuthor: chosenAuthor})

        db.ref("Story3/Story").on("value", data => {
            chosenStory = data.val();
          })
          this.setState({chosenStory: chosenStory})

          db.ref("Story3/Title").on("value", data => {
            chosenTitle = data.val();
          })
          this.setState({chosenTitle: chosenTitle})
    }
    


    constructor(){
        super();
        this.state = {  
            chosenAuthor: '',
            chosenStory: '',
            chosenTitle: '',
            
            title1: '',
            title2: '',
            title3: ''
        }
    }
    render(){
     
        
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Read Your Stories Here!
                </Text>

                <TouchableOpacity style = {styles.button}
                onPress = {() =>{
                    this.getInfo1();
                }}>
                    <Text style = {styles.text2}>{this.state.title1}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}
                onPress = {() =>{
                    this.getInfo2();
                }}>
                    <Text style = {styles.text2}>{this.state.title2}</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button}
                onPress = {() =>{
                    this.getInfo3();
                }}>

                    <Text style = {styles.text2}>{this.state.title3}</Text>
                </TouchableOpacity>
 
    
                <Text style = {styles.readText}>Author: {this.state.chosenAuthor} </Text>
                <Text style = {styles.readText}>Title: {this.state.chosenTitle} </Text>
                <Text style = {styles.readText}>Story: {this.state.chosenStory} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        flex: 1
    },

    text: {
        fontSize: 40,
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        textAlign: 'center'  
    },

    button: {
        width: 300,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'pink',
        textAlign: 'center',
        marginTop: 50,
        borderRadius: 40,
    },

    text2: {
        fontFamily: 'Calibri',
      fontSize: 20,
      alignText: 'center',
      marginTop: 10
    },

    readText: {
        textAlign: 'center',
        fontFamily: 'Calibri',
        fontSize: 20,
        marginTop: 50
    }
    
})
