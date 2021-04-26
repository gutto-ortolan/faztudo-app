import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroCredenciais from "../pages/authentication/CadastroCredenciais";
import CadastroInformacoes from "../pages/authentication/CadastroInformacoes";
import Login from "../pages/authentication/Login";
import Termos from "../pages/authentication/TermosDeUso";
import Estilos from "./style";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="CadastroCredenciais"
        component={CadastroCredenciais}
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#fff",
            elevation: 0,
          },
          headerLeft: () => (
            <View style={Estilos.btnVoltar}>
              <FontAwesome.Button
                name="chevron-left"
                size={13}
                backgroundColor="#fff"
                color="#ffb745"
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={Estilos.textoVoltar}> LOGIN</Text>
              </FontAwesome.Button>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="CadastroFuncionais"
        component={CadastroInformacoes}
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#fff",
            elevation: 0,
          },
          headerLeft: () => (
            <View style={Estilos.btnVoltar}>
              <FontAwesome.Button
                name="chevron-left"
                size={13}
                backgroundColor="#fff"
                color="#ffb745"
                onPress={() => navigation.navigate("CadastroCredenciais")}
              >
                <Text style={Estilos.textoVoltar}>VOLTAR</Text>
              </FontAwesome.Button>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Termos"
        component={Termos}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
