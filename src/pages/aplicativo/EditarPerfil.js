import React from "react";
import { View, StyleSheet, Text } from "react-native";

const EditarPerfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Editar Perfil</Text>
    </View>
  );
};

export default EditarPerfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
