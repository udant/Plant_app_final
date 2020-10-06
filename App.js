import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import PlantSelectionScreen from "./screens/PlantSelection";

import LoginScreen from "./screens/Login";
import { AppTabNavigator } from "./components/AppTabNavigator";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  Login:  LoginScreen ,
  //PlantSelection:  PlantSelectionScreen ,

  BottomTab:  AppTabNavigator 
});

const AppContainer = createAppContainer(switchNavigator);
