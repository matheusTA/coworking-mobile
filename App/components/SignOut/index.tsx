import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Overlay } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const SignOut: React.FC = () => {
  const navigation = useNavigation();
  const [isVisible, setIsvisibli] = useState(false);

  function handleSignOut() {
    setIsvisibli(false);
    navigation.navigate("SignIn");
  }

  return (
    <>
      <MaterialIcons
        name="exit-to-app"
        size={30}
        color="#F95F62"
        onPress={() => setIsvisibli(true)}
      />
      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsvisibli(false)}
        width="auto"
        height="auto"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Deseja sair? :(</Text>

          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => setIsvisibli(false)}
            >
              <Text style={styles.buttonTextCancel}>Não</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonOk}
              onPress={() => handleSignOut()}
            >
              <Text style={styles.buttonTextOk}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </>
  );
};

export default SignOut;
