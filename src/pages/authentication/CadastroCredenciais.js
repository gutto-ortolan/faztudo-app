import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FormInput from "../../components/CampoTexto";
import FormPassword from "../../components/CampoSenha";

import * as firebase from "firebase";
import "firebase/firestore";

import Fonts from "../../styles/Fonts";

const CadastroCredenciais = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);
  const [errorConfirmaSenha, setErrorConfirmaSenha] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dbh = firebase.firestore();

  const validar = () => {
    setErrorEmail(null);
    setErrorSenha(null);
    setErrorConfirmaSenha(null);
    let error = false;
    let temSenha = false;
    if (email == null || email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      setErrorEmail("Informe um e-mail válido");
      error = true;
    }

    if (senha == null || senha.length < 6) {
      setErrorSenha("Informe uma senha de 6 ou mais caractéres");
      error = true;
    } else {
      temSenha = true;
    }

    if (confirmaSenha == null) {
      setErrorConfirmaSenha("Informe a confirmação da senha");
      error = true;
    } else {
      if (senha != confirmaSenha) {
        setErrorConfirmaSenha("As senhas não são iguais. Tente novamente");
        error = true;
      }
    }

    return !error;
  };

  async function continuar() {
    if (validar()) {
      setLoading(true);
      await dbh
        .collection("usuario")
        .where("email", "==", email)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size == 0) {
            navigation.navigate("CadastroFuncionais", {
              credenciais: credenciais,
            });
            setLoading(false);
            setErrorEmail(null);
            setErrorSenha(null);
            setErrorConfirmaSenha(null);
            setError(null);
          } else {
            setError("*O e-mail informado já foi cadastrado");
            setLoading(false);
          }
        });
    }
  }

  const credenciais = {
    email: email,
    senha: senha,
  };

  return (
    <View style={Estilos.background}>
      <View style={Estilos.container}>
        <View style={Estilos.containerMensagem}>
          <Text style={Estilos.mensagemConta}>CRIAÇÃO DE CONTA</Text>
          <Text style={Estilos.mensagemCredencial}>
            Primeiro, informe suas credenciais
          </Text>
        </View>
        <FormInput
          labelValue={email}
          onChangeText={setEmail}
          placeholderText="E-mail"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errorEmail ? (
          <View style={Estilos.containerErro}>
            <Text style={Estilos.mensagemErro}>{errorEmail}</Text>
          </View>
        ) : null}
        <FormPassword
          labelValue={senha}
          onChangeText={setSenha}
          placeholderText="Senha"
          iconType="lock"
        />
        {errorSenha ? (
          <View style={Estilos.containerErro}>
            <Text style={Estilos.mensagemErro}>{errorSenha}</Text>
          </View>
        ) : null}
        <FormPassword
          labelValue={confirmaSenha}
          onChangeText={setConfirmaSenha}
          placeholderText="Confirme a senha"
          iconType="check"
        />
        {errorConfirmaSenha ? (
          <View style={Estilos.containerErro}>
            <Text style={Estilos.mensagemErro}>{errorConfirmaSenha}</Text>
          </View>
        ) : null}

        {error ? (
          <View style={Estilos.containerMensagemErro}>
            <Text style={{ color: "red" }}>{error}</Text>
          </View>
        ) : null}

        <TouchableOpacity style={Estilos.buttonContainer} onPress={continuar}>
          {loading ? (
            <View style={{ flexDirection: "row" }}>
              <ActivityIndicator color="white" />
              <Text style={Estilos.buttonText}>Verificando</Text>
            </View>
          ) : (
            <Text style={Estilos.buttonText}>Continuar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CadastroCredenciais;

const Estilos = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
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
  btnSubmit: {
    backgroundColor: "#ffb745",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  submitText: {
    color: "#222",
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  checkboxPrincipal: {
    width: "80%",
    marginTop: 10,
  },
  label: {
    marginRight: 8,
    fontSize: 15,
  },
  labelSecundario: {
    marginRight: 8,
    fontSize: 13,
  },
  containerMensagem: {
    marginBottom: 10,
  },
  mensagemConta: {
    fontFamily: Fonts.teste,
    fontSize: 25,
    //fontWeight: "bold",
    color: "#ffb745",
  },
  mensagemCredencial: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black",
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
  containerMensagemErro: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    fontWeight: "bold",
    color: "#ffffff",
  },
});
