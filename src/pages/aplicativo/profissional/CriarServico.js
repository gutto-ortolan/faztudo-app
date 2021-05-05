import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import Fonts from "../../../styles/Fonts";
import Colors from "../../../styles/Colors";

import * as firebase from "firebase";
import "firebase/firestore";

const CriarServico = ({ navigation, route }) => {
  const usuario = route.params?.usuario;
  const dbh = firebase.firestore();

  const [municipios, setMunicipios] = useState();
  const [tiposServico, setTiposServico] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMunicipios();
    getTiposServico();
  }, []);

  async function getMunicipios() {
    const mun = await dbh
      .collection("municipio")
      .orderBy("nome", "asc")
      .get()
      .then((querySnapshot) => {
        const cidades = [];
        querySnapshot.forEach((documentSnapshot) => {
          const cidade = {
            uid: documentSnapshot.id,
            nome: documentSnapshot.data().nome,
          };

          cidades.push(cidade);
        });
        setMunicipios(cidades);
      });
  }

  async function getTiposServico() {
    const tipo = await dbh
      .collection("tipoServico")
      .orderBy("nome", "asc")
      .get()
      .then((querySnapshot) => {
        const servicos = [];
        querySnapshot.forEach((documentSnapshot) => {
          const servico = {
            uid: documentSnapshot.id,
            nome: documentSnapshot.data().nome,
          };

          servicos.push(servico);
        });
        setTiposServico(servicos);
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.amarelo} />
      ) : (
        <View>
          <Text>Tipo: dropdown</Text>
          <Text>Município: dropdown</Text>
          <Text>Descrição Rápida: textInput</Text>
          <Text>Valor: textInput</Text>
          <Text>Dias da Semana: toggleButtons flatList horizontal</Text>
          <FlatList
            data={municipios}
            keyExtractor={(id, index) => index.toString()}
            renderItem={({ item }) => <Text>{item.nome}</Text>}
          />
        </View>
      )}
    </View>
  );
};

export default CriarServico;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
