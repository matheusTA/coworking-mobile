import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  mapLoading: {
    width: normalize(300),
  },

  label: {
    fontWeight: "bold",
    fontSize: normalize(20),
    color: "#666",
    fontStyle: "italic",
  },
});
