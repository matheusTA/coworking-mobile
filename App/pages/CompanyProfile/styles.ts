import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export default StyleSheet.create({
  container: {
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

  linkedinBotton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },

  spotsTitleSection: {
    textAlign: "center",
    fontSize: normalize(25),
    fontWeight: "bold",
    color: "#666",
    marginVertical: normalize(10),
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
    // justifyContent: "space-between",
  },

  spotTitle: {
    fontSize: normalize(25),
    fontWeight: "300",
    color: "#666",
  },

  spotPrice: {
    fontSize: normalize(20),
    fontWeight: "bold",
    color: "#666",
    // alignSelf: "flex-end",
  },

  bookingButton: {
    padding: normalize(10),
    backgroundColor: "#84c870",
    marginTop: normalize(10),
    borderRadius: normalize(5),
    // textAlign: "center",
  },

  bookingText: {
    textAlign: "center",
    fontSize: normalize(20),
    color: "#fff",
    fontWeight: "bold",
  },
});
