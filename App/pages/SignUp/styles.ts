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

  inputContainer: {
    marginBottom: normalize(26.56),
  },

  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: normalize(20),
    marginBottom: normalize(20),
  },

  buttonCancel: {
    height: normalize(50),
    width: normalize(150),
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
    borderWidth: normalize(3),
    borderColor: "#F95F62",
  },

  buttonTextCancel: {
    color: "#F95F62",
    fontWeight: "bold",
    fontSize: normalize(20),
  },

  buttonRegister: {
    height: normalize(50),
    width: normalize(150),
    backgroundColor: "#F95F62",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
  },

  buttonTextRegister: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: normalize(20),
  },
});
