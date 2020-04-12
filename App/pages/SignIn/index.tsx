import React, { useRef, useState } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const inputPasswordRef = useRef<TextInput>(null);
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
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
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

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
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
