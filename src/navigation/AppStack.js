import React, { useContext, useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "./AuthProvider";
import * as firebase from "firebase";
import "firebase/firestore";

import Perfil from "../pages/aplicativo/Perfil";
import Teste from "../pages/aplicativo/Teste";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Perfil}
      options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#2e64e5",
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: "#fff",
          elevation: 3,
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 10 }}>
        //     <FontAwesome5.Button
        //       name="sign-out-alt"
        //       size={22}
        //       backgroundColor="#fff"
        //       color="#2e64e5"
        //       onPress={() => {}}
        //     />
        //   </View>
        // ),
      }}
    />

    <Stack.Screen
      name="HomeProfile"
      component={Teste}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        // headerBackImage: () => (
        //   <View style={{ marginLeft: 15 }}>
        //     <Ionicons name="arrow-back" size={25} color="#2e64e5" />
        //   </View>
        // ),
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
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditarPerfil"
      component={Teste}
      options={{
        headerTitle: "Editar Perfil",
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const TabCliente = ({ navigation }) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Servicos"
      component={FeedStack}
      options={({ route }) => ({
        tabBarLabel: "Serviços Contratados",

        // tabBarVisible: route.state && route.state.index === 0,
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="home-outline"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />

    <Tab.Screen
      name="Profissionais"
      component={FeedStack}
      options={({ route }) => ({
        tabBarLabel: "Pesquisar Profissionais",
        tabBarOptions: {
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: "blue",
          },
        },
        // tabBarVisible: route.state && route.state.index === 0,
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="home-outline"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />

    <Tab.Screen
      name="Perfil"
      component={PerfilStack}
      options={{
        tabBarLabel: "Perfil",
        tabBarOptions: {
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: "blue",
          },
        },
        // tabBarIcon: ({ color, size }) => (
        //   <Ionicons name="person-outline" color={color} size={size} />
        // ),
      }}
    />
  </Tab.Navigator>
);

const TabProfissional = ({ navigation }) => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#ffb745",
    }}
  >
    <Tab.Screen
      name="ServicosContratados"
      component={FeedStack}
      options={({ route }) => ({
        tabBarLabel: "Serviços Contratados",
        tabBarOptions: {
          activeTintColor: "#e91e63",
          labelStyle: {
            fontSize: 12,
          },
          style: {
            backgroundColor: "blue",
          },
        },
        // tabBarVisible: route.state && route.state.index === 0,
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="home-outline"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />

    <Tab.Screen
      name="MeusServicos"
      component={FeedStack}
      options={({ route }) => ({
        tabBarLabel: "Meus Serviços",
        // tabBarVisible: route.state && route.state.index === 0,
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="home-outline"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />

    <Tab.Screen
      name="Perfil"
      component={PerfilStack}
      options={{
        tabBarLabel: "Perfil",
        // tabBarIcon: ({ color, size }) => (
        //   <Ionicons name="person-outline" color={color} size={size} />
        // ),
      }}
    />
  </Tab.Navigator>
);

const AppStack = () => {
  const { user } = useContext(AuthContext);
  const [tpUsuario, setTpUsuario] = useState();
  const dbh = firebase.firestore();

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const usu = await dbh.collection("usuario").doc(user.uid).get();
      setTpUsuario(usu.data().tpUsuario);
    } catch (e) {
      console.log(e);
    }
  };

  return tpUsuario === "P" ? <TabProfissional /> : <TabCliente />;
};

export default AppStack;
