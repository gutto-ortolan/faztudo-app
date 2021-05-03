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
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };

  render() {
    const button2Style = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55],
          }),
        },
      ],
    };

    const button3Style = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -110],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };

    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.buttons[1] ? (
          <TouchableWithoutFeedback onPress={this.props.onPress3}>
            <Animated.View style={[button3Style, styles.containerButton]}>
              <Text style={[styles.texto]}>{this.props.texto2}</Text>
              <Animated.View style={[styles.button, styles.subMenu]}>
                <FontAwesome5 name={this.props.icon3} color="white" size={23} />
              </Animated.View>
            </Animated.View>
          </TouchableWithoutFeedback>
        ) : null}

        {this.props.buttons[0] ? (
          <TouchableWithoutFeedback onPress={this.props.onPress1}>
            <Animated.View style={[button2Style, styles.containerButton]}>
              <Text style={[styles.texto]}>{this.props.texto1}</Text>
              <Animated.View style={[styles.button, styles.subMenu]}>
                <FontAwesome5 name={this.props.icon2} color="white" size={23} />
              </Animated.View>
            </Animated.View>
          </TouchableWithoutFeedback>
        ) : null}

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[rotation, styles.containerButton]}>
            <Animated.View style={[styles.button, styles.menu]}>
              <FontAwesome5 name="plus" color="white" size={23} />
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
