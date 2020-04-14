import React, { useRef, useState } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const inputPasswordRef = useRef<Input>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: "padding",
        android: undefined,
      })}
    >
      <Text style={styles.title}>Coworking</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Input
            leftIcon={<MaterialIcons name="email" size={24} color="#F95F62" />}
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 5 }}
            label="Email"
            placeholder="coworking@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => inputPasswordRef.current?.focus()}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            leftIcon={<MaterialIcons name="lock" size={24} color="#F95F62" />}
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 5 }}
            label="Senha"
            placeholder="******"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            ref={inputPasswordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="send"
            onSubmitEditing={() => console.log(email)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DashboardRoutes")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text
          style={styles.register}
          onPress={() => navigation.navigate("SignUp")}
        >
          Cadastrar-se
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
