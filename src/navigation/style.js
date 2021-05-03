import { StyleSheet } from "react-native";
import Fonts from "../styles/Fonts";

export default StyleSheet.create({
  textoVoltar: {
    fontFamily: Fonts.subtitulo,
    fontSize: 12,
    marginBottom: 2,
    marginLeft: -3,
  },
  btnVoltar: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
