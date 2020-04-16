import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import Constants from "expo-constants";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: normalize(60),
    color: "#F95F62",
    fontWeight: "bold",
    marginBottom: normalize(30),
  },

  form: {
    alignSelf: "stretch",
    paddingHorizontal: normalize(30),
  },

  button: {
    height: normalize(50),
    backgroundColor: "#F95F62",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
    marginTop: normalize(20),
    marginBottom: normalize(20),
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: normalize(20),
  },

  register: {
    alignSelf: "center",
    color: "#666",
    fontWeight: "bold",
    fontSize: normalize(20),
    marginBottom: normalize(20),
  },
});
