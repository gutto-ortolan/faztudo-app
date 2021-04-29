import React, { useContext, useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "firebase/firestore";

import Perfil from "../pages/aplicativo/Perfil";
import ServicosContratados from "../pages/aplicativo/cliente/ServicosContratados";
import PesquisarProfissionais from "../pages/aplicativo/cliente/PesquisarProfissionais";

import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ServicosContratadosStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="ServicosContratados"
      component={ServicosContratados}
      options={{
        title: "Serviços Contratados",
      }}
    />
  </Stack.Navigator>
);

const PesquisarProfissionaisStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="PesquisarProfissionais"
      component={PesquisarProfissionais}
      options={{
        title: "Pesquisar Profissionais",
      }}
    />
  </Stack.Navigator>
);

const PerfilStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Perfil"
      component={Perfil}
      options={{
        title: "Perfil",
      }}
    />
  </Stack.Navigator>
);

const TabCliente = ({ navigation }) => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#ffb745",
    }}
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
      name="PesquisarProfissionaisStack"
      component={PesquisarProfissionaisStack}
      options={({ route }) => ({
        tabBarLabel: "Pesquisar Serviços",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="search" color={color} size={23} />
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

export default TabCliente;
