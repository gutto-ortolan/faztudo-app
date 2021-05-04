import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "./AuthProvider";
import * as firebase from "firebase";
import "firebase/firestore";

import TabProfissional from "./Profissional";
import TabCliente from "./Cliente";

import Fonts from "../styles/Colors";

const AppStack = () => {
  const { user, setUsuario } = useContext(AuthContext);
  const [tpUsuario, setTpUsuario] = useState();
  const dbh = firebase.firestore();

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const usu = await dbh.collection("usuario").doc(user.uid).get();
      setTpUsuario(usu.data().tpUsuario);
      setUsuario(usu.data());
    } catch (e) {
      console.log(e);
    }
  };

  return tpUsuario ? (
    tpUsuario === "P" ? (
      <TabProfissional />
    ) : (
      <TabCliente />
    )
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color={Fonts.amarelo} size="large" />
    </View>
  );
};

export default AppStack;
