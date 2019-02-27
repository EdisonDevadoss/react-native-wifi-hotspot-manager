import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button, FlatList, ToastAndroid } from "react-native";
import styles from "./PeersScreenStyleSheet";
//Third party
import Hotspot from "react-native-wifi-hotspot";

class PeersScreen extends React.Component {
  static navigationOptions = {
    title: "Peers"
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  //get peers
  // Now its throw only error part
  doPeers = () => {
    Hotspot.peersList(
      data => {
        const peers = JSON.parse(data);
        this.setState({ dataSource: peers });
      },
      err => {
        ToastAndroid.show(err.toString(), ToastAndroid.SHORT);
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Text style={styles.subtitle}>Show all Peers</Text>
          <Button title="Peers" onPress={this.doPeers} />
        </View>
        <FlatList
          data={this.state.dataSource}
          style={styles.flatList}
          renderItem={({ item }, index) => {
            return (
              <View style={styles.viewList}>
                <Text style={styles.viewText}>{item.device}</Text>
                <Text style={styles.viewText}>{item.ip}</Text>
                <Text style={styles.viewText}>{item.mac}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.device}
        />
      </View>
    );
  }
}

export default PeersScreen;
