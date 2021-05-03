import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import FabButton from "../../../components/FabButtonGroup";

const ServicosContratados = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.containerBotoes}>
        <TouchableOpacity style={styles.botoes}>
          <Text>7 dias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes}>
          <Text>15 dias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes}>
          <Text>30 dias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerServicos}>
        <TouchableOpacity style={styles.cardServicos}>
          <Text>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardServicos}>
          <Text>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardServicos}>
          <Text>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardServicos}>
          <Text>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardServicos}>
          <Text>Serviços</Text>
        </TouchableOpacity>
      </View>
      <FabButton
        style={{ bottom: 80, right: 60 }}
        buttons={[true, false]}
        icon2="search"
        texto1="Filtrar"
      />
    </ScrollView>
  );
};

export default ServicosContratados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  containerBotoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  botoes: {
    backgroundColor: "white",
    padding: 3,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginLeft: 5,
    borderWidth: 0.5,
  },
  containerServicos: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  cardServicos: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
});
