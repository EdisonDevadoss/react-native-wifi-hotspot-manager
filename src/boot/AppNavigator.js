import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HotsPotScreen from "../Screen/HotsPot";
import CreateHotspotScreen from "../Screen/CreateHotspot";

const AppNavigator = createStackNavigator({
  HotsPot: {
    screen: HotsPotScreen
  },
  CreateHotspot: {
    screen: CreateHotspotScreen
  }
});

export default createAppContainer(AppNavigator);
