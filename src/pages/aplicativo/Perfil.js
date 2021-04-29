import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../../navigation/AuthProvider";

const Perfil = () => {
  const { user, usuario } = useContext(AuthContext);
  const [tpUsuario, setTpUsuario] = useState();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {usuario ? (
        <View style={{ alignItems: "center" }}>
          <Text>{user.uid}</Text>
          <Text>{usuario.nome}</Text>
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
        <ActivityIndicator size="large" color="black" />
      )}
    </View>
  );
};

export default Perfil;
