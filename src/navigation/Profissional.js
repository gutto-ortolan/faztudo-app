import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import "firebase/firestore";

import Perfil from "../pages/aplicativo/Perfil";
import EditarPerfil from "../pages/aplicativo/EditarPerfil";
import ServicosContratados from "../pages/aplicativo/profissional/ServicosContratados";
import ServicosPendentes from "../pages/aplicativo/profissional/ServicosPendentes";
import MeusServicos from "../pages/aplicativo/profissional/MeusServicos";
import CriarServico from "../pages/aplicativo/profissional/CriarServico";

import { FontAwesome5 } from "@expo/vector-icons";

import Fonts from "../styles/Fonts";
import Colors from "../styles/Colors";

const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const ServicosContratadosStack = ({ navigation }) => (
  <Stack1.Navigator>
    <Stack1.Screen
      name="ServicosContratados"
      component={ServicosContratados}
      options={{
        title: "Serviços Contratados",
        headerTitleAlign: "center",
        // headerLeft: () => (
        //   <View
        //     style={{
        //       justifyContent: "center",
        //       alignItems: "center",
        //       marginLeft: 5,
        //     }}
        //   >
        //     <FontAwesome5.Button
        //       name="bars"
        //       backgroundColor={Colors.amarelo}
        //       size={23}
        //       onPress={() => {
        //         console.log("funcionou");
        //       }}
        //     />
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: Colors.amarelo,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.botoes,
        },
      }}
    />
  </Stack1.Navigator>
);

const ServicosPendentesStack = ({ navigation }) => (
  <Stack2.Navigator>
    <Stack2.Screen
      name="ServicosPendentes"
      component={ServicosPendentes}
      options={{
        title: "Serviços Pendentes",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.amarelo,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.botoes,
        },
      }}
    />
  </Stack2.Navigator>
);

const MeusServicosStack = ({ navigation }) => (
  <Stack3.Navigator>
    <Stack3.Screen
      name="MeusServicos"
      component={MeusServicos}
      options={{
        title: "Meus Serviços",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.amarelo,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.botoes,
        },
      }}
    />
    <Stack3.Screen
      name="CriarServico"
      component={CriarServico}
      options={{
        title: "Criar Serviço",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.amarelo,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.botoes,
        },
        headerLeft: () => (
          <FontAwesome5.Button
            name="arrow-left"
            size={20}
            backgroundColor={Colors.amarelo}
            color="#fff"
            onPress={() => navigation.dispatch(StackActions.pop(1))}
          />
        ),
      }}
    />
  </Stack3.Navigator>
);

const PerfilStack = ({ navigation }) => (
  <Stack4.Navigator>
    <Stack4.Screen
      name="Perfil"
      component={Perfil}
      options={{
        title: "Perfil",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.amarelo,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.botoes,
        },
      }}
    />
    <Stack4.Screen
      name="EditarPerfil"
      component={EditarPerfil}
      options={{
        title: "Editar Perfil",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.amarelo,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: Fonts.botoes,
        },
        headerLeft: () => (
          <FontAwesome5.Button
            name="arrow-left"
            size={20}
            backgroundColor={Colors.amarelo}
            color="#fff"
            onPress={() => navigation.dispatch(StackActions.pop(1))}
          />
        ),
      }}
    />
  </Stack4.Navigator>
);

const TabProfissional = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName="ServicosContratadosStack"
    activeColor={Colors.amarelo}
    barStyle={{ backgroundColor: Colors.white }}
  >
    <Tab.Screen
      name="ServicosContratadosStack"
      component={ServicosContratadosStack}
      options={({ route }) => ({
        tabBarLabel: "Contratados",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="briefcase" color={color} size={23} />
        ),
      })}
    />

    <Tab.Screen
      name="ServicosPendentesStack"
      component={ServicosPendentesStack}
      options={({ route }) => ({
        tabBarLabel: "Pendentes",
        tabBarIcon: ({ color, focused }) => (
          <FontAwesome5 name="clock" color={color} size={23} />
        ),
      })}
    />

    <Tab.Screen
      name="MeusServicosStack"
      component={MeusServicosStack}
      options={({ route }) => ({
        tabBarLabel: "Meus Serviços",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="tools" color={color} size={23} />
        ),
      })}
    />

    <Tab.Screen
      name="PerfilStack"
      component={PerfilStack}
      options={{
        tabBarLabel: "Perfil",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="user" color={color} size={23} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabProfissional;

const Estilos = StyleSheet.create({
  labelIcon: {
    fontFamily: Fonts.labels,
    backgroundColor: "red",
  },
});
