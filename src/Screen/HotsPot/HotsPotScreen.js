import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  Text,
  View,
  Button,
  ToastAndroid,
  ListView
} from "react-native";
import styles from "./HotsPotScreenStyleSheet";
import Hotspot from "react-native-wifi-hotspot";

class HotsPotScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  //HotsPot enable function
  doEnable = () => {
    // console.warn("do Enable called");
    Hotspot.enable(
      () => {
        ToastAndroid.show("Hotspot Enable", ToastAndroid.SHORT);
      },
      err => {
        console.warn(err);
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      }
    );
  };
  //Disable HotsPot
  doDisable = () => {

    Hotspot.disable(
      () => {
        ToastAndroid.show("Hotspot Disabled", ToastAndroid.SHORT);
      },
      err => {
        console.warn(err);
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hotspot Library</Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.subtitle}>
            Enable & Check if it already opened
          </Text>
          <Button title="Enable" onPress={this.doEnable} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.subtitle}>
            Disable & Check if it already disabled
          </Text>
          <Button title="Disable" onPress={this.doDisable} />
        </View>
      </View>
    );
  }
}

export default HotsPotScreen;
