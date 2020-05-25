import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: normalize(20),
    paddingHorizontal: normalize(10),
  },

  inputContainer: {
    backgroundColor: "#f4f4f4",
    borderBottomColor: "#f4f4f4",
    borderTopColor: "#f4f4f4",
  },

  spotsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(15),
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
    borderRadius: 10,
  },

  spotImage: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: 50,
    borderWidth: normalize(4),
    marginRight: normalize(20),
  },

  spotData: {
    flex: 1,
  },

  spotTitle: {
    fontSize: normalize(25),
    fontWeight: "300",
    color: "#666",
  },

  spotEmail: {
    fontSize: normalize(20),
    fontWeight: "bold",
    color: "#666",
    marginBottom: normalize(5),
  },

  spotTechs: {
    fontSize: normalize(20),
    fontWeight: "300",
    color: "#666",
  },
});
