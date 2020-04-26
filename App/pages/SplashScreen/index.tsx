import React from "react";
import { View, StatusBar } from "react-native";

import MapLoading from "../../components/MapLoading";

const SplashScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapLoading />
    </View>
  );
};

export default SplashScreen;
