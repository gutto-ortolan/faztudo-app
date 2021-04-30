import React from "react";
import { ActivityIndicator } from "react-native";
import Providers from "./src/navigation";

import firebaseConfig from "./src/services/FirebaseConfig";
import * as firebase from "firebase";

import {
  useFonts,
  Kanit_100Thin,
  Kanit_100Thin_Italic,
  Kanit_200ExtraLight,
  Kanit_200ExtraLight_Italic,
  Kanit_300Light,
  Kanit_300Light_Italic,
  Kanit_400Regular,
  Kanit_400Regular_Italic,
  Kanit_500Medium,
  Kanit_500Medium_Italic,
  Kanit_600SemiBold,
  Kanit_600SemiBold_Italic,
  Kanit_700Bold,
  Kanit_700Bold_Italic,
  Kanit_800ExtraBold,
  Kanit_800ExtraBold_Italic,
  Kanit_900Black,
  Kanit_900Black_Italic,
} from "@expo-google-fonts/kanit";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  let [fontsLoaded] = useFonts({
    Kanit_100Thin,
    Kanit_100Thin_Italic,
    Kanit_200ExtraLight,
    Kanit_200ExtraLight_Italic,
    Kanit_300Light,
    Kanit_300Light_Italic,
    Kanit_400Regular,
    Kanit_400Regular_Italic,
    Kanit_500Medium,
    Kanit_500Medium_Italic,
    Kanit_600SemiBold,
    Kanit_600SemiBold_Italic,
    Kanit_700Bold,
    Kanit_700Bold_Italic,
    Kanit_800ExtraBold,
    Kanit_800ExtraBold_Italic,
    Kanit_900Black,
    Kanit_900Black_Italic,
  });

  if (!fontsLoaded) return <ActivityIndicator />;

  return <Providers />;
}
