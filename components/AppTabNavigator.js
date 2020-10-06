import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import PlantSelectionScreen from "../screens/PlantSelection";
import PlantInfoScreen from "../screens/PlantInfo";
import OrderScreen from "../screens/Order";

export const AppTabNavigator = createBottomTabNavigator({
  PlantInfo: {
    screen: PlantInfoScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/plants_icon.jpg")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "Plants"
    }
  },
  PlantSelection: {
    screen: PlantSelectionScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/dill.jpg")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "select"
    }
  },
  Order: {
    screen: OrderScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-book.png")}
          style={{
            width: 20,
            height: 20
          }}
        />
      ),
      tabBarLabel: "Order"
    }
  }
});
