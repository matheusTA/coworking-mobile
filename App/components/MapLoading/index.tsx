import React from "react";
import { View, Text } from "react-native";
import Lottie from "lottie-react-native";

import mapLoading from "../../lottieAnimation/map.json";
import styles from "./styles";

const MapLoading: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={mapLoading}
        resizeMode="contain"
        autoSize
        autoPlay={true}
        loop={true}
        style={styles.mapLoading}
      />
      <Text style={styles.label}>Carregando...</Text>
    </View>
  );
};

export default MapLoading;
