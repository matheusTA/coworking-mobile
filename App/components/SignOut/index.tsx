import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "../../contexts/auth";
import styles from "./styles";

const SignOut: React.FC = () => {
  const { signOut } = useAuth();
  const [isVisible, setIsvisibli] = useState(false);

  async function handleSignOut() {
    signOut();
  }

  return (
    <>
      <TouchableOpacity onPress={() => setIsvisibli(true)}>
        <MaterialIcons name="exit-to-app" size={30} color="#F95F62" />
      </TouchableOpacity>

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
