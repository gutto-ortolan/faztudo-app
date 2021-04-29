import React, { useContext, useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "firebase/firestore";

import Perfil from "../pages/aplicativo/Perfil";
import ServicosContratados from "../pages/aplicativo/profissional/ServicosContratados";
import MeusServicos from "../pages/aplicativo/profissional/MeusServicos";

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
        headerTitleStyle: {
          color: "#2e64e5",
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: "#fff",
          elevation: 3,
        },
      }}
    />
  </Stack.Navigator>
);

const MeusServicosStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="MeusServicos"
      component={MeusServicos}
      options={{
        title: "Meus Serviços",
        headerTitleStyle: {
          color: "#2e64e5",
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: "#fff",
          elevation: 3,
        },
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

const TabProfissional = ({ navigation }) => (
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
