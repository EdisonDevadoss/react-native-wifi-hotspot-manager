import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HotsPotScreen from "../Screen/HotsPot";
import CreateHotspotScreen from "../Screen/CreateHotspot";
import PeersScreen from "../Screen/Peers";

const AppNavigator = createStackNavigator({
  HotsPot: {
    screen: HotsPotScreen
  },
  CreateHotspot: {
    screen: CreateHotspotScreen
  },
  Peers: {
    screen: PeersScreen
  }
});

export default createAppContainer(AppNavigator);
