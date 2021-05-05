import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { Ionicons } from "@expo/vector-icons";

import CampoNome from "../../components/CampoTexto";
import CampoTelefone from "../../components/CampoTelefone";

import Fonts from "../../styles/Fonts";
import Colors from "../../styles/Colors";

import * as firebase from "firebase";
import "firebase/firestore";

import { AuthContext } from "../../navigation/AuthProvider";

const EditarPerfil = ({ navigation, route }) => {
  const { user, setUser, setUsuario } = useContext(AuthContext);

  const usuario = route.params?.usuario;

  const [nome, setNome] = useState(usuario.nome);
  const [telefone, setTelefone] = useState(usuario.telefone);
  const [genero, setGenero] = useState(usuario.genero);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState(null);
  const [erroNome, setErroNome] = useState(null);
  const [erroTelefone, setErroTelefone] = useState(null);

  const dbh = firebase.firestore();

  const validar = () => {
    setErroNome(null);
    setErroTelefone(null);
    let error = false;
    if (nome == null) {
      setErroNome("Informe o seu nome completo");
      error = true;
      setLoading(false);
    }

    if (telefone == null) {
      setErroTelefone("Informe o seu telefone de contato");
      error = true;
      setLoading(false);
    } else {
      if (telefone.length != 15) {
        setErroTelefone("Informe o seu telefone de contato corretamente");
        error = true;
        setLoading(false);
      }
    }

    return !error;
  };

  async function editar() {
    if (!validar()) {
      return null;
    }

    const usuarioEditado = {
      nome: nome,
      telefone: telefone,
      email: usuario.email,
      genero: genero,
      tpUsuario: usuario.tpUsuario,
    };
    setLoading(true);
    await dbh
      .collection("usuario")
      .doc(user.uid)
      .update(usuarioEditado)
      .then(() => {
        setUsuario(usuarioEditado);
        setMensagem("Usuário editado com sucesso!");
        setLoading(false);
      })
      .catch((error) => {
        setMensagem("Erro ao editar o usuário!");
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <CampoNome
        labelValue={nome}
        onChangeText={setNome}
        placeholderText="Nome completo"
        iconType="user"
        autoCapitalize="words"
        autoCorrect={true}
      />
      {erroNome ? <Text style={{ color: "red" }}>{erroNome}</Text> : null}

      <CampoTelefone
        labelValue={telefone}
        onChangeText={setTelefone}
        placeholderText="Telefone"
        iconType="phone"
        autoCorrect={false}
      />
      {erroTelefone ? (
        <Text style={{ color: "red" }}>{erroTelefone}</Text>
      ) : null}

      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <Ionicons name={"transgender-outline"} size={22} color="#666" />
        </View>
        <View style={{ marginLeft: 10 }}>
          <ModalDropdown
            style={{ width: 250 }}
            defaultValue={genero}
            dropdownStyle={styles.dropdownStyle}
            textStyle={styles.genderTextStyle}
            dropdownTextStyle={styles.dropdownTextStyle}
            options={["Masculino", "Feminino", "Outro"]}
            onSelect={(idx, value) => {
              setGenero(value);
            }}
          />
        </View>
      </View>

      {mensagem ? <Text style={{ color: "red" }}>{mensagem}</Text> : null}

      <TouchableOpacity style={styles.buttonContainer} onPress={editar}>
        {loading ? (
          <View style={{ flexDirection: "row" }}>
            <ActivityIndicator color="white" />
            <Text style={styles.buttonText}>Gravando</Text>
          </View>
        ) : (
          <Text style={styles.buttonText}>Gravar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default EditarPerfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.fundo,
    paddingHorizontal: 25,
  },
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
  dropdownStyle: {
    width: 200,
    height: 130,
    borderColor: "#ffb745",
    borderWidth: 1,
    marginTop: -16,
  },
  genderTextStyle: {
    fontSize: 16,
    color: "#666",
    fontFamily: Fonts.labels,
  },
  dropdownTextStyle: {
    fontSize: 16,
    color: "#333",
    fontFamily: Fonts.labels,
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: 40,
    backgroundColor: "#ffb745",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: Fonts.botoes,
    //fontWeight: "bold",
    color: "#ffffff",
  },
});
