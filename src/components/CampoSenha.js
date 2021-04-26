import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign, Ionicons } from "@expo/vector-icons";

const CampoSenha = ({ labelValue, placeholderText, iconType, ...rest }) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={22} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        secureTextEntry={hidePass}
        {...rest}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => setHidePass(!hidePass)}
      >
        <Ionicons name={hidePass ? "eye" : "eye-off"} size={25} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

export default CampoSenha;

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
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
