import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../../navigation/AuthProvider";

const Teste = () => {
  const { user } = useContext(AuthContext);
  const [tpUsuario, setTpUsuario] = useState();

  const dbh = firebase.firestore();

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const usu = await dbh.collection("usuario").doc(user.uid).get();
      setTpUsuario(usu.data().tpUsuario);
    } catch (e) {
      console.log(e);
    }
  };

  return tpUsuario === "P" ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{user.uid}</Text>
      <Text>Profissional</Text>
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
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cliente</Text>
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

export default Teste;
