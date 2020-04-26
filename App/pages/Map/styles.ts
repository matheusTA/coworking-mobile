import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  map: {
    flex: 1,
  },

  avatar: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: normalize(50),
    borderColor: "#FFF",
    borderWidth: normalize(3),
  },

  callout: {
    width: normalize(260),
  },

  companyName: {
    fontWeight: "bold",
    fontSize: normalize(16),
  },

  companyTechs: {
    color: "#666",
    marginTop: normalize(5),
  },
});
