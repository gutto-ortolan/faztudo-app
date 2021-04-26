import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

const Perfil = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Aqui é o teste.</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: 100,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          console.log("Deslogando...");
          firebase.auth().signOut();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Perfil;
