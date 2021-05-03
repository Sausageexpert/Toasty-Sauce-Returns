
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';
import Authentication from './Screens/Authentication';


export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteScreen: WriteScreen,
  ReadScreen: ReadScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteScreen"){
        return(
          <Image
          source={require("./Images/Percy-Jackson.jpg")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadScreen"){
        return(
          <Image
          source={require("./Images/handdd.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

  const radar = createSwitchNavigator({
    Authentication: Authentication,
    MainScreen: TabNavigator
  })

const AppContainer = createAppContainer(radar);