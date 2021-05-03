import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import db from '../config';

export default class Authentication extends React.Component{
    constructor(){
        super();
        this.state = {
            password: '',
            emailID: ''
        }
    }

    login = async(email, password) => {
        try{
            const banns = await firebase.auth().signInWithEmailAndPassword(email, password)

            this.props.navigation.navigate("MainScreen");
        }

        catch(error){
            console.log(error.code);

            switch(error.code){
                case 'auth/user-not-found':
                    alert("Are you sure you exist?");
 
                    break;

                    case 'auth/too-many-requests':
                        alert("We are facing some technical issues currently. Please try again later");

                    break;
            }
        }
    }

    render(){
        return(
            <View style = {{flex: 1, backgroundColor: 'lightblue'}}>
               <TextInput style = {{border: 4, width: 500, height: 50, marginTop: 50, textAlign: 'center', fontSize: 20, alignSelf: 'center'}}
               placeholder = "Enter Email ID Here!"
               keyboardType = 'email-address'
               onChangeText = {text => {
                 this.setState({emailID: text})
               }}/>

                <TextInput style = {{border: 4, width: 500, height: 50, marginTop: 50, textAlign: 'center', fontSize: 20, alignSelf: 'center'}}
               placeholder = "Enter Password Here!"
               keyboardType = 'visible-password'
               onChangeText = {text => {
                 this.setState({password: text})
               }}/>

               <TouchableOpacity style = {{width: 100, height: 50, alignSelf: 'center', marginTop: 50}}
               onPress = {() => {
                   this.login(this.state.emailID, this.state.password);
               }}>
                   <Text>Login</Text>
               </TouchableOpacity>
            </View>
        )
    }
}