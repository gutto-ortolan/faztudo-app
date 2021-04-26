import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TermosDeUso = ({ navigation }) => {
  return (
    <View style={Estilos.background}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#ffb745",
          }}
        >
          Termos de Uso
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#6666",
          borderRadius: 2,
          width: "90%",
          height: "70%",
        }}
      >
        <ScrollView style={{ backgroundColor: "white" }}>
          <Text style={{ textAlign: "justify" }}>
            1. SeuApp SeuApp é um serviço online (“plataforma”) para criar
            usando um configurador (kit de construção) e gerenciamento de
            aplicativos móveis, aplicativos da Web e sites (coletivamente,
            “aplicativos”). Além disso, o SeuApp oferece recursos adicionais
            para gerenciar usuários, campanhas de marketing e um sistema de
            bate-papo. SeuApp (seuapp.com ou outros endereços da web) é um
            serviço da “AppYourself GmbH”. O uso da plataforma está sujeito a
            uma cobrança. Como parte de uma fase de teste, salvo indicação em
            contrário, o teste da plataforma, em particular o configurador, é
            gratuito. A SeuApp oferece serviços adicionais que geralmente são
            cobrados. O SeuApp expandirá constantemente a gama de serviços,
            funções e módulos adicionais e os adaptará aos desenvolvimentos
            atuais. O escopo exato das ofertas é regido pelo § 7 destes Termos
            de Uso. Todas as ofertas e estes termos de uso são dirigidos a
            empresários na acepção do § 14 BGB. 2. Âmbito e definição
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={
          ({ justifyContent: "center", alignItems: "center" },
          Estilos.buttonContainer)
        }
      >
        <Text style={Estilos.buttonText}>Li e concordo com os termos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermosDeUso;

const Estilos = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2f2",
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
    width: 300,
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
