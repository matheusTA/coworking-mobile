import { StyleSheet } from "react-native";
import { normalize } from "react-native-elements";

export default StyleSheet.create({
  container: {
    margin: 30,
  },

  title: {
    fontSize: normalize(25),
    color: "#666",
    fontWeight: "bold",
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
    marginTop: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: normalize(10),
    borderWidth: 1,
    borderBottomColor: "#666",
    borderRadius: normalize(5),
  },

  button: {
    height: 42,
    backgroundColor: "#F05A5B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: normalize(10),
  },

  cancelButton: {
    height: 42,
    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
