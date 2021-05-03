import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../../navigation/AuthProvider";

import FabButton from "../../components/FabButtonGroup";

const Perfil = () => {
  const { user, usuario } = useContext(AuthContext);
  const [tpUsuario, setTpUsuario] = useState();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {usuario ? (
        <View style={{ alignItems: "center" }}>
          <Text>{user.uid}</Text>
          <Text>{usuario.nome}</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
      {usuario ? (
        <FabButton
          style={{ bottom: 80, right: 60 }}
          buttons={[true, true]}
          icon2="sign-out-alt"
          texto1="Sair"
          icon3="pencil-alt"
          texto2="Editar"
          onPress1={() => {
            firebase.auth().signOut();
          }}
        />
      ) : null}
    </View>
  );
};

export default Perfil;
