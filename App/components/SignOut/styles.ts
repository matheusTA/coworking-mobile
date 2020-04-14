import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
  },

  title: {
    fontSize: normalize(30),
    color: "#000",
    fontWeight: "bold",
    marginBottom: normalize(30),
  },

  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: normalize(10),
  },

  buttonCancel: {
    height: normalize(50),
    width: normalize(100),
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
    borderWidth: normalize(3),
    borderColor: "#F95F62",
    marginRight: normalize(10),
  },

  buttonTextCancel: {
    color: "#F95F62",
    fontWeight: "bold",
    fontSize: normalize(20),
  },

  buttonOk: {
    height: normalize(50),
    width: normalize(100),
    backgroundColor: "#F95F62",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
  },

  buttonTextOk: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: normalize(20),
  },
});
