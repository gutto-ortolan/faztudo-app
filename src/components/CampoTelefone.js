import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { AntDesign } from "@expo/vector-icons";
import Fonts from "../styles/Fonts";

const CampoTelefone = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={22} color="#666" />
      </View>
      <TextInputMask
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        type={"cel-phone"}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        {...rest}
      />
    </View>
  );
};

export default CampoTelefone;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: Fonts.labels,
  },
});
