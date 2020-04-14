import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
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

  inputContainer: {
    marginBottom: normalize(20),
  },

  button: {
    height: normalize(50),
    backgroundColor: "#F95F62",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
    marginTop: normalize(30),
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
  },
});
