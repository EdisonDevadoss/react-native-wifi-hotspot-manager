import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button, TextInput, ToastAndroid } from "react-native";
import styles from "./CreateHotspotScreenStyleSheet";
//Third party
import Hotspot from "react-native-wifi-hotspot";

class CreateHotspotScreen extends React.Component {
  static navigationOptions = {
    title: "Create your hotspot"
  };
  constructor(props) {
    super(props);
    this.state = {
      SSID: "",
      password: ""
    };
  }
  //Create your hotspot
  //This work succesfully once you enable hotspot. Otherwise it throw errors
  onCreate = () => {
    Hotspot.create(
      this.state,
      () => {
        ToastAndroid.show("Hotspot Established", ToastAndroid.SHORT);
        this.props.navigation.pop();
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Set Your hotspot </Text>
        <TextInput
          style={styles.textBox}
          onChangeText={SSID => this.setState({ SSID })}
          placeholder="SSID"
          value={this.state.SSID}
        />
        <TextInput
          style={styles.textBox}
          onChangeText={password => this.setState({ password })}
          placeholder="Password"
          secureTextEntry
          value={this.state.password}
        />
        <Button title="Create" onPress={this.onCreate} />
      </View>
    );
  }
}

export default CreateHotspotScreen;
