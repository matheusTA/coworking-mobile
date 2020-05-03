import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  profileContainer: {
    backgroundColor: "#FFF",
    paddingTop: normalize(30),
    paddingBottom: normalize(20),
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
    borderRadius: 10,
  },

  profileImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: normalize(10),
    borderWidth: normalize(4),
  },

  dataContainer: {
    marginHorizontal: normalize(10),
    marginBottom: normalize(10),
  },

  profileLabel: {
    fontSize: normalize(20),
    fontWeight: "bold",
    color: "#303030",
  },

  profileData: {
    fontSize: normalize(20),
    fontWeight: "300",
    color: "#666",
  },

  spotsContainer: {},

  spot: {},

  spotImage: {},

  spotTitle: {},

  spotPrice: {},
});
