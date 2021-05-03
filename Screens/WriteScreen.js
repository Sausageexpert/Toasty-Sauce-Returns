import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import db from '../config';

var storyNumber = 1;

export default class WriteScreen extends React.Component{

    increaseStoryNumber = () => {
        if(storyNumber <= 2){
            storyNumber = storyNumber + 1;
        }

       if(storyNumber === 4){
           storyNumber = 1;
       }
    }

    refresh = () =>{
        db.ref("Story1").update({
         "Author": "not entered",
         "Title": "not entered",
         "Story": "not entered",
        });

        db.ref("Story2").update({
            "Author": "not entered",
            "Title": "not entered",
            "Story": "not entered",
           });

           db.ref("Story3").update({
            "Author": "not entered",
            "Title": "not entered",
            "Story": "not entered",
           });

         

           storyNumber = 1;
    }

    render(){
        return(
            <KeyboardAvoidingView style = {styles.container}>
                <Text style = {styles.text}>Write Your Stories Here!</Text>
                
            <TextInput
            style = {styles.textInput}
            placeholder = "Enter Name Here"
            onChangeText = {text => {
                db.ref("Story" + storyNumber).update({
                  "Author": text
                })
            }}/>

            <TextInput
            style = {styles.textInput2}
            placeholder = "Title of the Story"
            onChangeText = {text => {
                db.ref("Story" + storyNumber).update({
                  "Title": text
                })
            }}/>

            <TextInput
            style = {styles.textInput3}
            placeholder = "Write Your Story Here"
            multiline = 'true'
            onChangeText = {text => {
                db.ref("Story" + storyNumber).update({
                  "Story": text
                })
            }}/>

            <TouchableOpacity style = {styles.button}
            onPress = {() => {
                this.increaseStoryNumber();
                alert("Your story has been submitted! Please go to the read screen to read your story!")
                ToastAndroid.show("Your story has been submitted! Please go to the read screen to read your story!", ToastAndroid.SHORT);
            }}>
                <Text style = {styles.text5}>Click Here to Submit!</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button2}
            onPress = {() => {
                this.refresh();
            }}>
                <Text style = {styles.text5}>Refresh Entries</Text>
            </TouchableOpacity>

            </KeyboardAvoidingView>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1
    },

    textInput: {
        fontColor: 'white',
        borderWidth: 4,
        width: 700,
        height: 50,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    textInput2: {
        fontColor: 'white',
        borderWidth: 4,
        width: 900,
        height: 50,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    textInput3: {
        fontColor: 'white',
        borderWidth: 4,
        width: 1500,
        height: 300,
     //   backgroundColor: 'black',
     textAlign: 'center',
     fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        fontFamily: 'Edwardian Script ITC',
        outline: 'none',
        fontWeight: 'bold'
        
    },

    text: {
        fontSize: 40,
        backgroundColor: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },

   text2: {
       background: 'black',
       fontFamily: 'Calibri',
       fontColor: 'yellow',
      // textAlign: 'center',
       marginTop: 50,
       marginLeft: 200
   },

   button: {
       width: 200,
       height: 50,
       alignSelf: 'center',
       backgroundColor: 'red',
       textAlign: 'center',
       marginTop: 20,
       borderRadius: 40,
   },

   button2: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'red',
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 40,
},

   text5: {
      fontFamily: 'Algerian',
      fontSize: 20 
   }
})