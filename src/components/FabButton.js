import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../styles/Colors";
import Fonts from "../styles/Fonts";

export default class FabButton extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback>
          <Animated.View style={[rotation, styles.containerButton]}>
            <Animated.View style={[styles.button, styles.menu]}>
              <FontAwesome5 name={this.props.icon} color="white" size={23} />
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    position: "absolute",
    marginRight: -40,
  },
  containerButton: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    },
  },
  menu: {
    backgroundColor: Colors.amarelo,
  },
  subMenu: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: Colors.amarelo,
    marginRight: 5,
  },
  texto: {
    marginRight: 10,
    fontFamily: Fonts.labels,
    fontSize: 15,
  },
});
