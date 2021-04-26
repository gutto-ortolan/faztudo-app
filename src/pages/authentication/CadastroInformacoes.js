import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
// import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from "../../components/CampoTexto";
import CampoTelefone from "../../components/CampoTelefone";
import { Ionicons } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";

import * as firebase from "firebase";
import "firebase/firestore";

const CadastroInformacoes = ({ route, navigation }) => {
  const [termo, setTermo] = useState(false);
  const [profissional, setProfissional] = useState(false);
  const [cliente, setCliente] = useState(false);
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [genero, setGenero] = useState();
  const [erroNome, setErroNome] = useState(null);
  const [erroTelefone, setErroTelefone] = useState(null);
  const [erroCheck, setErroCheck] = useState(null);
  const [erroGenero, setErroGenero] = useState(null);
  const [tpUsuario, setTpUsuario] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const credenciais = route.params?.credenciais;

  const dbh = firebase.firestore();

  function selecionaProfissional(valor) {
    if (valor) {
      setProfissional(true);
      setCliente(false);
    } else {
      setProfissional(false);
      setCliente(true);
    }
  }

  function selecionaCliente(valor) {
    if (!valor) {
      setProfissional(true);
      setCliente(false);
    } else {
      setProfissional(false);
      setCliente(true);
    }
  }

  const validar = () => {
    setErroNome(null);
    setErroTelefone(null);
    setErroCheck(null);
    setErroGenero(null);
    let error = false;
    if (nome == null) {
      setErroNome("Informe o seu nome completo");
      error = true;
    }

    if (telefone == null) {
      setErroTelefone("Informe o seu telefone de contato");
      error = true;
    } else {
      if (telefone.length != 15) {
        setErroTelefone("Informe o seu telefone de contato corretamente");
        error = true;
      }
    }

    if (!profissional && !cliente) {
      setErroCheck("Escolha uma das opções");
      error = true;
    }

    if (genero == null) {
      setErroGenero("Informe o seu gênero");
      error = true;
    }

    return !error;
  };

  const aceitarTermo = () => {
    if (!termo) {
      Alert.alert(
        "Termos de Uso",
        "Você deve aceitar os termos para continuar."
      );
      return false;
    }

    return true;
  };

  async function cadastrarUsuario() {
    setLoading(true);
    if (validar() && aceitarTermo()) {
      try {
        const usuario = {
          nome: nome,
          telefone: telefone,
          tpUsuario: profissional ? "P" : "C",
          genero: genero,
        };
        await firebase
          .auth()
          .createUserWithEmailAndPassword(credenciais.email, credenciais.senha)
          .then((res) => {
            const {
              user: { uid },
            } = res;
            dbh.collection("usuario").doc(uid).set({
              nome: usuario.nome,
              email: credenciais.email,
              telefone: usuario.telefone,
              tpUsuario: usuario.tpUsuario,
              genero: usuario.genero,
            });
          });
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{
        marginTop: 20,
      }}
    >
      <View style={Estilos.background}>
        <View style={Estilos.container}>
          <View style={Estilos.containerMensagem}>
            <Text style={Estilos.mensagemConta}>QUASE LÁ...</Text>
            <Text style={Estilos.mensagemCredencial}>
              Continue seu cadastro, informe mais alguns dados!
            </Text>
          </View>

          <FormInput
            labelValue={nome}
            onChangeText={setNome}
            placeholderText="Nome completo"
            iconType="user"
            autoCapitalize="words"
            autoCorrect={true}
          />
          {erroNome ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroNome}</Text>
            </View>
          ) : null}
          <CampoTelefone
            labelValue={telefone}
            onChangeText={setTelefone}
            placeholderText="Telefone"
            iconType="phone"
            autoCorrect={false}
          />
          {erroTelefone ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroTelefone}</Text>
            </View>
          ) : null}

          <View style={Estilos.inputContainer}>
            <View style={Estilos.iconStyle}>
              <Ionicons name={"transgender-outline"} size={22} color="#666" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <ModalDropdown
                style={{ width: 250 }}
                defaultValue="Gênero"
                dropdownStyle={Estilos.dropdownStyle}
                textStyle={Estilos.genderTextStyle}
                dropdownTextStyle={Estilos.dropdownTextStyle}
                options={["Masculino", "Feminino", "Outro"]}
                onSelect={(idx, value) => {
                  setGenero(value);
                }}
              />
            </View>
          </View>
          {erroGenero ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroGenero}</Text>
            </View>
          ) : null}

          <View style={Estilos.containerCheck}>
            <View style={Estilos.checkboxPrincipal}>
              <View style={Estilos.checkboxContainer}>
                <View>
                  <Text style={Estilos.label}>Sou Profissional</Text>
                  <Text style={Estilos.labelSecundario}>
                    Quero oferecer meus serviços
                  </Text>
                </View>
                <CheckBox
                  value={profissional}
                  tintColors={{ true: "#ffb745", false: "#ffb745" }}
                  onValueChange={(valor) => selecionaProfissional(valor)}
                />
              </View>

              <View style={Estilos.checkboxContainer}>
                <View>
                  <Text style={Estilos.label}>Sou Cliente</Text>
                  <Text style={Estilos.labelSecundario}>
                    Quero contratar serviços
                  </Text>
                </View>
                <CheckBox
                  value={cliente}
                  tintColors={{ true: "#ffb745", false: "#ffb745" }}
                  onValueChange={(valor) => selecionaCliente(valor)}
                />
              </View>
              {erroCheck ? (
                <View style={Estilos.containerErro}>
                  <Text style={Estilos.mensagemErro}>{erroCheck}</Text>
                </View>
              ) : null}
            </View>
          </View>

          <View style={Estilos.checkboxTermosCotainer}>
            <CheckBox
              value={termo}
              onValueChange={(valor) => setTermo(valor)}
              tintColors={{ true: "#ffb745", false: "#ffb745" }}
            />
            <Text style={Estilos.labelSecundario}>Concordo com os</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Termos");
                setTermo(true);
              }}
            >
              <Text style={(Estilos.labelSecundario, Estilos.labelTermo)}>
                Termos de uso.
              </Text>
            </TouchableOpacity>
          </View>

          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

          <TouchableOpacity
            style={Estilos.buttonContainer}
            onPress={() => {
              cadastrarUsuario();
            }}
          >
            {loading ? (
              <View style={{ flexDirection: "row" }}>
                <ActivityIndicator color="white" />
                <Text style={Estilos.buttonText}>Carregando</Text>
              </View>
            ) : (
              <Text style={Estilos.buttonText}>Criar a minha conta</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CadastroInformacoes;

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
  containerCheck: {
    alignItems: "center",
    width: "100%",
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffb745",
  },
  mensagemCredencial: {
    fontSize: 13,
    fontWeight: "bold",
  },
  checkboxTermosCotainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  checkboxTermos: {
    color: "#ffb745",
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
  },
  genderTextStyle: {
    fontSize: 16,
    color: "#666",
  },
  dropdownTextStyle: {
    fontSize: 16,
    color: "#333",
  },
  labelTermo: {
    marginLeft: -3,
    color: "#ffb745",
    fontWeight: "bold",
    textDecorationLine: "underline",
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
