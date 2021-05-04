import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../../navigation/AuthProvider";
import { FontAwesome5 } from "@expo/vector-icons";

import FabButton from "../../components/FabButtonGroup";

import Fonts from "../../styles/Fonts";
import Colors from "../../styles/Colors";

const Perfil = ({ navigation }) => {
  const { user, usuario } = useContext(AuthContext);
  const [tpUsuario, setTpUsuario] = useState();

  return (
    <View style={styles.container}>
      {usuario ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.backgroud}
        >
          <View style={{ alignItems: "center" }}>
            <View style={styles.containerAvatar}>
              <Image
                style={styles.avatar}
                source={require("../../assets/logo.png")}
              />
            </View>
            <TouchableOpacity style={styles.containerAvatarCamera}>
              <FontAwesome5 name="camera" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerInformacoes}>
            <View style={styles.informacao}>
              <Text style={styles.label}>Nome</Text>
              <Text style={styles.userInfo}>{usuario.nome}</Text>
            </View>
            <View style={styles.informacao}>
              <Text style={styles.label}>E-mail</Text>
              <Text style={styles.userInfo}>{usuario.email}</Text>
            </View>
            <View style={styles.informacao}>
              <Text style={styles.label}>Telefone</Text>
              <Text style={styles.userInfo}>{usuario.telefone}</Text>
            </View>
            <View style={styles.informacao}>
              <Text style={styles.label}>Gênero</Text>
              <Text style={styles.userInfo}>{usuario.genero}</Text>
            </View>
            <View style={styles.informacao}>
              <Text style={styles.label}>Tipo Usuário</Text>
              <Text style={styles.userInfo}>
                {usuario.tpUsuario === "P" ? "Profissional" : "Cliente"}
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator size="large" color={Colors.amarelo} />
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
          onPress2={() => {
            navigation.navigate("EditarPerfil");
          }}
        />
      ) : null}
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  containerAvatar: {
    shadowColor: "#151734",
    shadowRadius: 15,
    shadowOpacity: 0.4,
  },
  backgroud: {
    marginTop: 30,
    marginHorizontal: 25,
  },
  containerAvatarCamera: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -40,
    marginRight: -80,
    zIndex: 1,
    backgroundColor: Colors.amarelo,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "black",
  },
  containerInformacoes: {
    marginTop: 30,
  },
  informacao: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#aaaaaa",
    paddingBottom: 12,
    marginBottom: 20,
  },
  userInfo: {
    fontFamily: Fonts.labels,
    fontSize: 15,
  },
  label: {
    fontFamily: Fonts.textos,
    fontSize: 15,
  },
});
