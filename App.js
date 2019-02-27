/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import AppNavigator from "./src/boot";

export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
