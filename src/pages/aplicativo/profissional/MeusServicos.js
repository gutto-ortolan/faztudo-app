import React, { useContext } from "react";
import { View, Text } from "react-native";

import FabButton from "../../../components/FabButtonGroup";
import { AuthContext } from "../../../navigation/AuthProvider";

const MeusServicos = ({ navigation }) => {
  const { user, usuario } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Meus Serviços</Text>
      <FabButton
        style={{ bottom: 80, right: 60 }}
        buttons={[true, true]}
        icon2="search"
        texto1="Filtrar"
        icon3="hammer"
        texto2="Novo Serviço"
        onPress2={() => {
          navigation.navigate("CriarServico", {
            usuario: usuario,
            user: user,
          });
        }}
      />
    </View>
  );
};

export default MeusServicos;
