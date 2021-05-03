import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import FormInput from "../../components/CampoTexto";
import FormPassword from "../../components/CampoSenha";

import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";

import * as firebase from "firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [erroEmail, setErroEmail] = useState(null);
  const [erroSenha, setErroSenha] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const validar = () => {
    setErroEmail(null);
    setErroSenha(null);
    let error = false;
    if (email == null || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      setErroEmail("Preencha seu e-mail corretamente");
      error = true;
    }

    if (password == null) {
      setErroSenha("Preencha sua senha corretamente");
      error = true;
    }

    return !error;
  };

  const cadastrar = () => {
    setErroEmail(null);
    setErroSenha(null);
    navigation.navigate("CadastroCredenciais");
  };

  handleLogin = () => {
    if (validar()) {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError("Teste");
        });
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        marginTop: 20,
      }}
    >
      <KeyboardAvoidingView style={Estilos.background}>
        <View style={Estilos.containerLogo}>
          <Image
            style={{
              width: 245,
              height: 220,
            }}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={Estilos.container}>
          <FormInput
            labelValue={email}
            onChangeText={setEmail}
            placeholderText="E-mail"
            iconType="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {erroEmail ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroEmail}</Text>
            </View>
          ) : null}
          <FormPassword
            labelValue={password}
            onChangeText={setPassword}
            placeholderText="Senha"
            iconType="lock"
          />
          {erroSenha ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroSenha}</Text>
            </View>
          ) : null}

          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

          <TouchableOpacity
            style={Estilos.buttonContainer}
            onPress={handleLogin}
          >
            {loading ? (
              <View style={{ flexDirection: "row" }}>
                <ActivityIndicator color="white" />
                <Text style={Estilos.buttonText}>Carregando</Text>
              </View>
            ) : (
              <Text style={Estilos.buttonText}>Acessar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => cadastrar()}
            style={Estilos.btnRegister}
          >
            <Text style={Estilos.registerText}>
              Não possui cadastro? Clique aqui
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={(Estilos.btnRegister, { marginTop: 20 })}
          >
            <Text style={Estilos.registerText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;

const Estilos = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    width: "90%",
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  submitText: {
    color: "#222",
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: "#222",
    fontFamily: Fonts.textos,
  },
  mensagemErro: {
    fontSize: 12,
    color: "red",
  },
  containerErro: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: -10,
    marginBottom: 5,
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
    fontFamily: Fonts.botoes,
    fontSize: 18,
    //fontWeight: "bold",
    color: "#ffffff",
  },
});
